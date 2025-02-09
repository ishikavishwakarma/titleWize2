import React from 'react'
import FeatureTop from './Features/FeatureTop'
import FeatureBottom from './Features/FeatureBottom'

const Feature = () => {
  return (

    <div className='feature w-full flex flex-col justify-center items-center h-fit'>

      <FeatureTop/>
      <FeatureBottom/>
    </div>  
  )
}

export default Feature
