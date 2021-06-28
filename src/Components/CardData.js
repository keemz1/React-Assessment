import React from 'react'
import '../Css/CardData.css'

export default function CardData({source,name,data}) {
    return (
        <div className='cardData'>
            <div className='cardImageContainer'>
                <img src={source} alt=''/>
            </div>
            <p className='cardText'>{name}</p>
            <p className='dataText'>{data}</p>
        </div>
    )
}
