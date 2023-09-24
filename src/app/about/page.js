'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Page() {
const [count, setCount] = useState(11)
  return (
    <>
     About  { count }
    </>
  )
}

export default Page