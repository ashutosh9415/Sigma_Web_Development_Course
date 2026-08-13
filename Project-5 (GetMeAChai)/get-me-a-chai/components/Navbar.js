"use client"

import React, { useState, useRef } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)
    const dropdownRef = useRef(null)


    return (
        <nav className='bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-10 md:h-16'>

            <Link className="logo font-bold flex justify-center items-center gap-2" href={"/"}>
                <img className='invertImg' src="coffee.gif" width={25} alt="" />
                <span className="text-3xl my-3 md:my-0">
                    Get Me a Chai!
                </span>
            </Link>

            {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

            <div className='relative flex justify-center items-center  md:block gap-4'>
                {session && <>
                    <button onClick={() => setShowdropdown(!showdropdown)} type="button" id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-3 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2">
                        Account
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div ref={dropdownRef} id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" onClick={() => setShowdropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} onClick={() => setShowdropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                            </li>
                            <li>
                                <a onClick={() => { setShowdropdown(false); signOut() }} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div></>
                }

                {session && <button className='text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-3 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ' onClick={() => { signOut() }}>Logout</button>}
                {!session && <Link href={"/login"}>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-3 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'>Login</button></Link>}
            </div>
        </nav>
    )
}

export default Navbar