import { Request,Response, NextFunction } from 'express';
import Opportunity from '../models/Opportunity';

const searchAndFilter = async (req: Request, res:Response, next: NextFunction) => {
    try {
       
        // Copy req.query
        const reqQuery = { ...req.query }

        // Fields to exclude
        const removeFields = ['select','page','sort', 'limit',"open","educationLevel","type"]

        // Loop over removeFields and delete them from reqQuery
        removeFields.forEach((param) => delete reqQuery[param])

        // cast to string
        let  queryStr = JSON.stringify(reqQuery)

        queryStr = queryStr.replace(
            /\b(gt|gte|lt|in|lte)\b/g,(match) => `$${match}`
        )

        // cast to JSON Object
        let jsonQuery = JSON.parse(queryStr)

        function escapeRegex(text : string) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };


        if (jsonQuery.provider){
            jsonQuery.provider = {$regex : new RegExp( escapeRegex(jsonQuery.provider), "gi" )}
        }
        if (jsonQuery.duration){
            jsonQuery.duration = {$regex: new RegExp(escapeRegex(jsonQuery.duration),"gi")}
        }
        if (jsonQuery.country){
            jsonQuery.country = {$regex : new RegExp( escapeRegex(jsonQuery.country), "gi" )}
        }    

        let aggregatePipeline:Array<any> = [
            {$match:jsonQuery},
        ]

        if (req.query.type){
            aggregatePipeline.push(
                {$match:{"type":{$in:[req.query.type]}}}
            )
        }
        if (req.query.educationLevel){
            aggregatePipeline.push(
                {$match:{"educationLevel":{$in:[req.query.educationLevel]}}}
            )
        }
        if (req.query.open){
            if (req.query.open == 'false'){
                aggregatePipeline.push({$match:{"open":false}})
            }
            else{
                aggregatePipeline.push({$match:{"open":true}})
            }
        }


        /**
         * sort
         */
        if (req.query.sort){
            let sortQuery = {};
            (<string>req.query.sort).split(',').forEach(
                e=>{
                    e = e.trim()
                    if (e[0] == '-'){
                        sortQuery[e.slice(1)] = -1
                    }
                    else{
                        sortQuery[e]=1
                    }
                }
            )
            aggregatePipeline.push({$sort:sortQuery})
        }

        /**
         * select fields 
         */
        let fieldSelect = {}
        if (req.query.select) {
            (<string>req.query.select).split(',').forEach(
                e=>{
                    e = e.trim()
                    if (e[0] == '-'){
                        fieldSelect[e.slice(1)]= 0
                    }
                    else{
                        fieldSelect[e]=1
                    }
                }
            )
            aggregatePipeline.push({$project:fieldSelect})
        }  
     
    
        /**
         * Pagination
         */
        const page = parseInt(<string>req.query.page, 10) || 1
        const limit = parseInt(<string>req.query.limit, 25) || 25
        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        aggregatePipeline.push({$skip:startIndex})
        aggregatePipeline.push({$limit:limit})

        /**
         * Excuting the query
         */
        const results = (await Opportunity.aggregate(aggregatePipeline))

        
        let total = results.length

        /**
         *  Pagination result
         */ 
        const pagination: any = {}

        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit
            }
        }

        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit
            }
        }
        
        res.searchResult = {
            success: true,
            count: total,
            pagination,
            data: results
          }

        next()
    } catch(err) {
        res.status(400).json({"error" : err.message})
    }
    return 
  }

export default searchAndFilter

