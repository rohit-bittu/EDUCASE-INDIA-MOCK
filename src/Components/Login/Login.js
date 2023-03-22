import React, { useState } from 'react'

export default function Login() {
  const [Login, setLogin] = useState({
    email: "",
    pass: ""
  });

  const handlechange =(e)=>{
    setLogin({...Login, [e.target.name]:e.target.value,});
    console.log(setLogin)
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (Login.email.length===0) {
      alert("please enter email")
    }
    else if (Login.pass.length===0 || Login.pass.length<6) {
      alert("please enter password with atleast 6 Characters")
    }
    else {
      alert (`${Login.email} WELCOME AGAIN`)
      
    }
  }
  return (
    <>
      
        
      
      <div className='loginPage block'>
        <input type="email" name="email" value={Login.email}
          className="border-solid border-2 border-slate-600 block m-auto 
         p-3 pr-20 px-5 w-80 rounded-full peer hover:border-2 hover:border-rose-600"
          placeholder='Email Address' onChange={handlechange}
        /> <br />
        <input type="password" name="pass" value={Login.pass}
          className="border-solid border-2 border-slate-700 block m-auto 
         p-3 pr-20 px-5 w-80 rounded-full peer hover:border-2 hover:border-rose-600"
          placeholder='Password'      onChange={handlechange}
        /> <br />
        <button type='submit' class="btn-secondary rounded-full 
         border-solid border-2 block m-auto 
         p-3 pr-20 w-80 peer  justify-center text-white font-serif hover:btn-warning"
         onClick={handleSubmit}
         > <span className="pl-16 font-medium text-lg ">LOGIN</span></button>

        
        
        

      </div>
      
      <br />
        <a href="/" className='ml-48 text-base text-secondary hover:text-lg'>Forgot Password ?</a>
      <p className="mt-5" style={{ color: "#949BA3" }}>or login with</p>

    </>
  )
}
