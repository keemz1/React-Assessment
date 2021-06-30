import {useState,useEffect} from 'react'
import '../Css/Card.css'
import CardData from './CardData'
import cardImage from '../Assets/Card.svg'
import planetImage from '../Assets/Homeworld.svg'
import vehicleImage from '../Assets/Vehicle.svg'
import starshipImage from '../Assets/Starship.svg'
import useSWAPIStorage from './Custom Hooks/swapiStorage'
import { Link } from 'react-router-dom'

export default function Card({name,gender,birth_year,species,planet,vehicle, starship}) {

    

    function sendCardDetails() {
        
    }

    return (
        <Link to='/cardDetails' >
        <button className='card' onClick={()=>sendCardDetails()}>
            <div className='cardHead'>
                <div className='cardImageContainer'>
                <img className='cardImages' src={cardImage} alt=''/>
                </div>
                <p className='name'>{name}</p>
            </div>
            <div className='cardBody'>
                <div className='cardDetails'>
                    <div className='cardDetailsSub'>
                        <div className='cardDateGenderContainer'>
                            <div className='cardImageContainer'>
                                <img className='cardImages genderImage' src={gender} alt=''/>
                            </div>
                                <p className='birthdateTxt'>{birth_year}</p>
                        </div>
                        <div>
                            <p className='speciesTxt'>{species}</p>
                        </div>
                    </div>
                    <div className='cardInnerBar'> </div>
                </div>
                <div className='cardOtherDetails'>
                    <div className='cardDataContainer'>
                        <CardData
                            source={planetImage}
                            name='HOMEWORLD'
                            data={planet}
                        />
                        <CardData
                            source={vehicleImage}
                            name='VEHICLES'
                            data={vehicle}
                        />
                        <CardData
                            source={starshipImage}
                            name='STARSHIPS'
                            data={starship}
                        />
                    </div>
                </div>
            </div>
        </button>
    </Link>
    )
}
