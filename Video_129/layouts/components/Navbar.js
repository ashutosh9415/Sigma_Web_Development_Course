import React from 'react'

const navbar = () => {
    return (
        <navbar className='bg-blue-500 w-full p-5 m-1 rounded rounded-s-sm flex justify-between'>
            <ul className='flex justify-between gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
            </ul>
        </navbar>
    )
}

export default navbar
