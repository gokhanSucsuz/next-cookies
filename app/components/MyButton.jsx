"use client"
import React, { useState } from 'react'

import { createCookie, deleteCookie } from '../actions/actions'

const MyButton = () => {
    const [data, setData] = useState("")
    const [value, setValue] = useState("")
    const handleClick = () => {
        createCookie(data, value)
    }
    const handleDelete = () => {
        deleteCookie(data)
    }
    return (
        <div className='flex m-2 shadow-lg p-3'>
            <div><label htmlFor="data">Cookie Name: </label><input type="text" name="data" id="data" onChange={(e) => setData(e.target.value)} value={data} /></div>
            <div><label htmlFor="value">Cookie Value: </label><input type="text" name="value" id="value" onChange={(e) => setValue(e.target.value)} value={value} /></div>
            <button className='bg-green-700 text-white p-3 rounded-lg' onClick={handleClick}>Create Cookie</button>
            <button className='bg-red-700 text-white p-3 rounded-lg' onClick={handleDelete}>Delete Cookie</button>

        </div>

    )
}

export default MyButton
