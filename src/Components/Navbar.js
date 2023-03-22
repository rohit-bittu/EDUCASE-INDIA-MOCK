import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    // const menuItems = (
    //     <>
    //         <li className='hover:text-info no-underline hover:underline  hover:font-serif hover:font-bold '><Link to='/'>Login</Link></li>
    //         <li className='hover:text-info no-underline hover:underline  hover:font-serif hover:font-bold'><Link to='/signup'>Signup</Link></li>


    //     </>

    // )
    return (
        <>
            <nav class="navbar tabs active:tab-bordered tab-active  block justify-center space-x-4 m-auto w-[100px] lg:w-full p-9">
                <Link to="/" className=" navLink font-m px-4 py-1  text-black text-xl mr-16 " >Login</Link>
                
                <Link to="/signup" className="navLink font-m px-4 py-1 text-xl text-black ">Signup</Link>
                
            </nav>

            {/* <div className="tabs">
                <Link to="/signup" className="tab active:tab-bordered ">Tab 1</Link>
                <a className="tab tab-bordered tab-active">Tab 2</a>
                <a className="tab tab-bordered">Tab 3</a>
            </div> */}
        </>
    )
}

