import React from 'react'
import '../Css/Head.css'
import cardImage from '../Assets/Card.svg'
import deckImage from '../Assets/Deck.svg'

export default function Head() {
    return (
        <div className='headContainer'>
            <div className='headInfoFrame'>
                <div className='Frame1'>
                    <button className='btnallcards' type='button'>
                    <img src={cardImage} alt=''/>
                        All Cards
                    </button>
                    <button className='btnDecks' type='button'>
                    <img src={deckImage} alt=''/>
                        Decks
                    </button>
                </div>
                <div className='Frame2'>
                    <span>SW-</span><span>API Deck Builder</span>
                </div>
                <div className='Frame3'>
                    <p className='homeName'>Akeem Hendricks</p>
                </div>
            </div>
            <div className='headLowerBar'></div>
        </div>
    )
}
