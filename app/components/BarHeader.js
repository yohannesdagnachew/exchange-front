import React from 'react'
import './Bar.css'

export default function BarHeader() {

    const data = ['Bank', 'Currency', 'Buying', 'Selling', 'Rank'];
    return (
        <div className='bar-header-container'>
            <h2>{data[0]}</h2>
            <h2>{data[1]}</h2>
            <h2>{data[2]}</h2>
            <h2>{data[3]}</h2>
            <h2>{data[4]}</h2>
        </div>
    )
}
