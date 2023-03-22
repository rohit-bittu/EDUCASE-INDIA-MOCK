import React from 'react'
import logo from '../logo.svg'


export default function Home() {
  return (
   <>
    <div>   
        <img src={logo} alt="reactImage" className="m-auto w-[50%] lg:w-[350px] animate-bounce mask mask-decagon"/>
        <h1 className='uppercase font-medium text-center lg:text-lg text-xs ' >my name is <b>Rohit roy,</b> <br/>i have done this project with react, tailwind & custom css</h1>
    </div>
   </>
  )
}

