import React from 'react'
import { OpportunityProps } from '../../types/OpportunityType'
import Image from 'next/image'


const Opportunity = ({opportunity}: OpportunityProps) => {
  return (
    <div className='flex'>
      <Image src={opportunity.image.imageAdress} width={100} height={100} alt='skf' />
      <div className='max-w-md'>
        {opportunity.description}
      </div>
    </div>
  )
}

export default Opportunity