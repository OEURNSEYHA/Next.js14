import React from 'react'


function page({params}) {
    console.log(params.id)
    
  return (
    <div>
        {params.id}

    </div>
  )
}

export default page