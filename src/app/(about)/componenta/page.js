import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div> 
      ComponentA
      <Link href={'hello'}> hello</Link>
       </div>
  )
}

export default page