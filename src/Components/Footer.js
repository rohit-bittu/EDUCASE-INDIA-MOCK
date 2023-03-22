import React from 'react'
import { FcGoogle } from "react-icons/fc";

import { BsTwitter, BsFacebook } from "react-icons/bs";



export default function Footer() {
  return (
    <>
      <div className="justify-center text-center flex items-center gap-9 m-6 p-4 divider">
        <a href="/" className='border-2 border-slate-300 rounded-full w-15 h-16 p-3 hover:bg-neutral'>
          <FcGoogle className='text-4xl  ' />
        </a>
        <a href="/" className='border-2 border-slate-300 rounded-full w-15 h-16 p-3 hover:bg-accent'>
          <BsFacebook className='FaceBook text-4xl  ' />
        </a>
        <a href="/" className='border-2 border-slate-300 rounded-full w-15 h-16 p-3 hover:bg-warning '>
          <BsTwitter className='Twitter text-4xl ' />
        </a>


      </div>

      <div className='justify-center text-center '>
        <p className="acount text-base font-serif">
          Don't have an account?
          <a href="/"><span className="text-secondary hover:text-lg cursor-pointer">&nbsp;Create new now!</span></a>
        </p> <br/>
        <p className="text-base font-serif">
          By signing up, you are agree with our &nbsp;
          <a href="/" className="text-secondary underline hover:text-lg">
            Terms &amp; Conditions
          </a>
        </p>
      </div>
    </>
  )
}
