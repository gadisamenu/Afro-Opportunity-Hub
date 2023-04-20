import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Opportunity from './Opportunity';
import { OpportunityType } from '../../types/OpportunityType';

type Props = {}



const baseUrl:string = 'https://afroopportunityhub.onrender.com/api/v1/opportunities';


const OpportunityList = ({}: Props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [opportunityList, setOpportunities] = useState<OpportunityType[]>([])
  useEffect(() => {
    async function fetchOpportunities(){ 
      const res = await axios.get(`${baseUrl}?page=${currentPage}&limit=10`)
      setOpportunities(res.data.data )
      
    }
    fetchOpportunities();
    
  }, [currentPage])
  return (
    <div className='flex flex-col gap-5 items-center'>
      {
        opportunityList.map((opportunity, index) => (
          <Opportunity key={index} opportunity={opportunity} />
        ))
      }
      <div className='flex justify-center gap-10'>
        <button className='px-5 py-2 text-white bg-blue-900 rounded-lg' onClick={() => {setCurrentPage(currentPage - 1)}}>Prev</button>
        <button className='px-5 py-2 text-white bg-blue-900 rounded-lg' onClick={() => {setCurrentPage(currentPage + 1)}}>Next</button>
      </div>
    </div>
  )
}

export default OpportunityList