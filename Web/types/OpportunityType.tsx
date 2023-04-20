

export interface OpportunityType {
    _id: string, 
    provider: string,
    country: string,
    type: string,
    educationLevel: string[],
    description:string,
    deadLine: string,
    image:{imageAdress:string}
    requirements: string[],
    open: boolean,
    duration: string,
    createdAt: string,
    updatedAt: string,
    __v: number

  }


export interface OpportunityProps{
    opportunity: OpportunityType
}

