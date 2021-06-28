import {useState,useEffect} from 'react'
import '../Css/Card.css'
import CardData from './CardData'
import cardImage from '../Assets/Card.svg'
import planetImage from '../Assets/Homeworld.svg'
import vehicleImage from '../Assets/Vehicle.svg'
import starshipImage from '../Assets/Starship.svg'
import useSWAPIStorage from './Custom Hooks/useSWAPIStorage'

export default function Card({name,gender,birth_year,species,planet,vehicle, starship}) {
    const {url, list,setUrl,setList }= useSWAPIStorage('https://swapi.dev/api/people',[]);

    

    function FilterCards() {
        
    }

    return (
        <button className='card' onClick={()=> FilterCards()}>
            <div className='cardHead'>
                <div className='cardImageContainer'>
                <img className='cardImages' src={cardImage} alt=''/>
                </div>
                <p className='name'>{name}</p>
            </div>
            <div className='cardBody'>
                <div className='cardDetails'>
                    <div className='cardDetailsSub'>
                        <div className='cardImageContainer'>
                            <img className='cardImages genderImage' src={gender} alt=''/>
                        </div>
                        <p className='birthdateTxt'>{birth_year}</p>
                        <p>{species}</p>
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
    )
}
