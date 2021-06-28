import {useState,useEffect} from 'react'
import Card from './Card'
import maleGender from '../Assets/Gender-Male.svg'
import femaleGender from '../Assets/Gender-Female.svg'
import '../Css/CardContainer.css';
import useSearch from './Custom Hooks/useSearch'
import useSWAPIStorage from './Custom Hooks/useSWAPIStorage'
import useSWList from './Custom Hooks/useSWList';

export default function CardContainer(prop) {
    const {url, list,setUrl,setList }= useSWAPIStorage('https://swapi.dev/api/people',[]);



    function GetSWAPIValues(value) {
        const newValue = fetch(value)
        .then(response => response.json())
        .then(json => json.name)
        console.log(newValue)
    }

    

    function GetGender(gender) {
        if (gender === 'male') {
            return maleGender
        }
        else if(gender === 'female'){
            return femaleGender
        }
    }

    return (
        <div className='cardContainer'>
        {list.map(people =>{
            return(
                <Card
                    key={people.index}
                    name={people.name}
                    species={GetSWAPIValues(people.species)}
                    gender={GetGender(people.gender)}
                    birth_year={people.birth_year}
                    vehicle={people.vehicles.length}
                    starship={people.starships.length}
                />
            )
        })}
        </div>
    )
}
