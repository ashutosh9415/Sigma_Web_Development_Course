import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-50 text-purple-500'>
            <div className="mycontainer flex justify-around items-center px-5 py-5 h-15">
                <div className="logo font-bold text-purple-600 text-2xl flex">
                    <img className='w-10 h-10' src="icons/favicon.png" alt="" />
                    <span className="text-red-600">&lt;</span>
                    Pass
                    <span className="text-red-600">OP/&gt;</span>
                </div>
                <ul>
                    {/* <li className="flex gap-5">
                    <a className='hover:font-bold' href="">Home</a>
                    <a className='hover:font-bold' href="">About</a>
                    <a className='hover:font-bold' href="">Contact</a>
                </li> */}
                </ul>
                <button className='bg-purple-300 rounded-full flex justify-center items-center h-12 p-2 ring-red-500 ring-2 hover:cursor-pointer'>
                    <img className='w-10' src="icons/github.svg" alt="" />
                    <span className='text-lg font-bold py-5 text-red-600'>
                        GitHub
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
