import React,{useState} from 'react'

export default function SignUp() {
  const [Login, setLogin] = useState({
    name:"",
    email: "",
    pass: ""
    });
    
    const handlechange =(e)=>{
    setLogin({...Login, [e.target.name]:e.target.value,});
    console.log(Login)
    };
    const handleSubmit=(e)=>{
    e.preventDefault();
    if (Login.name.length===0) {
    alert("please enter Full Name")
    }
    else if (Login.email.length===0) {
    alert("please enter Email")
    }
    else if (Login.pass.length===0 || Login.pass.length<6) {
    alert("please enter Password with atleast 6 Characters")
    }
    else {
    alert (`${Login.name} WELCOME `)
    
    }
    console.log(Login)
    }

  return (
    <div>
      <div className='loginPage block'>
        <input type="text" name="name" value={Login.name}
          className="border-solid border-2 border-slate-600 block m-auto 
         p-3 pr-20 px-5 w-80 rounded-full peer hover:border-2 hover:border-rose-600" 
          placeholder='Name' onChange={handlechange}
        /> <br />
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
         p-3 pr-20 w-80 peer  justify-center hover:btn-warning font-serif  text-white"
         onClick={handleSubmit}
         > <span className="pl-16 text-lg font-medium">SIGNUP</span></button>

        
        
        

      </div>
      
      
        
      <p className="mt-5 " style={{ color: "#949BA3" }}>or signup with</p>
    </div>
  )
}
