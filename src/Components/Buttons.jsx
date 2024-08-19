import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {

    const [randomNumber] = useState(Math.floor(Math.random() * 100))

    return (
        <div className='flex justify-center mt-10 gap-3'>
            {/* <button className='border-2 p-2'>
                <Link to={"/"}>Home Page</Link>
            </button>
            <button className='border-2 p-2'>
                <Link to={"/profile"}>Profile Page</Link>
            </button>
            <button className='border-2 p-2'>
                <Link to={"/contact"}>Contact Page</Link>
            </button>
            <button className='border-2 p-2'>
                <Link to={"/profile/settings"}>Profile Settings Page</Link>
            </button>
            <button className='border-2 p-2'>
                <Link to={"/profile/update"}>Profile Update Page</Link>
            </button> */}
            <button className='border-2 p-2'>
                <Link to={`/dynamic/${randomNumber}`}>Profile Update Page [{randomNumber}]</Link>
            </button>
            
        </div>
    )
}

export default Buttons
