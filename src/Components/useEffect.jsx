import React, { useEffect, useState } from 'react';

const UseEffect = () => {

    // const [rand, setRand] = useState(0)
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [errorData, setErrorData] = useState({
        username: "",
        password: ""
    })

    // const handleRandom = () => {
    //     const min = 1000
    //     const max = 10000
    //     const randomNumber = Math.floor(Math.random() * (max - min) ) + min 
    //     setRand(randomNumber)
    // }
    // const [timer, setTimer] = useState(0)
    // const [axis, setAxis] = useState({x: 0, y: 0})

    // const handleMouseMove = ({pageX, pageY}) => {
    //     setAxis({x: pageX, y: pageY})
    // }

    useEffect(() => {
        // const interval = setInterval(() => {
        //     const date = new Date()
        //     setTimer(date.toLocaleString("en-IN", {
        //         day: "2-digit",
        //         month: "long",
        //         year: "numeric",
        //         hour: "2-digit",
        //         minute: "2-digit",
        //         second: "2-digit",
        //         hour12: true
        //     }).toUpperCase())
        // }, 1000);
        // document.addEventListener("mousemove", handleMouseMove)

        // return () => {
        //     clearInterval(interval)
        //     document.removeEventListener("mousemove", handleMouseMove)
        // }
    }, []);

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    const handleValidation = () => {
        if (!formData.username && !formData.password) {
            return setErrorData({
                username: "Username is required",
                password: "Password is required"
            })
        }
        return setErrorData({
            username: "",
            password: ""
        })
    }

    useEffect(() => {
        handleValidation()
    }, [formData])
    
    return (

        <div className='w-screen h-screen flex flex-col gap-5 text-white justify-center items-center'>
            {/* <div className='w-10 h-10 blur-md rounded-full opacity-35 bg-white fixed' style={{
                top: `${axis.y}px`,
                left: `${axis.x}px`
            }} />
            <div className='text-white'>
                { timer }
            </div> */}
            {/*  <div className='flex flex-col'>
                <p>Floor: { Math.floor(10.99) }</p>
                <p>Ceil: { Math.ceil(49.01) }</p>
                <p>Round: {Math.round(49.5)}</p>
             <p>Random: {rand}</p> 
             <button className='bg-green-600 p-1 mt-6 px-3 text-white ' onClick={handleRandom}>Generate Random Number</button>
         </div> */}
            
            <form onSubmit={handleSubmit} className='w-[500px] p-5 bg-[#2c2c2c] flex flex-col text-gray-700 gap-4'>
                <input onChange={handleChange} value={formData.username} type="text" placeholder='Enter Username' name="username" className='p-2.5 outline-none'/>
                <span className='text-sm text-red-400 italic'>{ errorData.username }</span>
                <input onChange={handleChange} value={formData.password} type="password" placeholder='Enter Password' name="password" className='p-2.5 outline-none' />
                <span className='text-sm text-red-400 italic'>{ errorData.password }</span>
                <button className='p-2.5 text-white bg-green-600 '>Login</button>
            </form>
        </div>
    );
}

export default UseEffect;
