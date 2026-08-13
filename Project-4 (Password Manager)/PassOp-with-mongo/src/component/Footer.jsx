import React from 'react'

const Footer = () => {
    return (
        <footer className="bottom-0 left-0 w-full bg-purple-600 text-white">
            <div className="logo font-bold text-2xl flex justify-center items-center">
                <span className="text-red-600">&lt;</span>
                Pass
                <span className="text-red-600">OP/&gt;</span>
            </div>
            <div className="flex justify-center items-center">
                Created webpage <img className='w-12 p-2' src="icons/dil.png" alt="love" />
                By Ashutosh Vishwakarma
            </div>
        </footer>
    )
}

export default Footer
