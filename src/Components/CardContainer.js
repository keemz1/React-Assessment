import {useState,useEffect} from 'react'
import Card from './Card'
import maleGender from '../Assets/Gender-Male.svg'
import femaleGender from '../Assets/Gender-Female.svg'
import droid from '../Assets/droid.svg'
import '../Css/CardContainer.css';
import useSWAPIStorage from './Custom Hooks/useSWAPIStorage'
import LoadBtn from './LoadMoreBtn'

export default function CardContainer({list, setList, search, setSearch,sort}) {
    const {url, swList,setUrl,setSWList }= useSWAPIStorage('','', 1);


    function getSWAPIValues(value) {
        const newValue = fetch(value)
        .then(response => response.json())
        .then(json => json.name)
        console.log(newValue)
    }

    function getGender(gender) {
        if (gender === 'male') {
            return maleGender
        }
        else if(gender === 'female'){
            return femaleGender
        }
        else{
            return droid
        }
    }

    function sortAscending() {
        swList.sort((a,b) => 
        {if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1
        }
        return 0
    })
    }
    function sortDescending() {
        swList.sort().reverse()
    }

    useEffect(() => {
        if (sort) {
            sortAscending()
        }
        else{
            sortDescending()
        }
    }, [sort,swList])

console.log(swList)

    return (
        <div className='cardContainer'>
        {(search && list)?
            list?.map(people =>(
                <Card
                    key={people.url}
                    name={people.name}
                    species={getSWAPIValues(people.species)}
                    gender={getGender(people.gender)}
                    birth_year={people.birth_year}
                    vehicle={people.vehicles.length}
                    starship={people.starships.length}
                />
            ) || 'No Data Found?!'): 
         swList?.map(people =>{
            return(
                <Card
                    key={people.url}
                    name={people.name}
                    species={getSWAPIValues(people.species)}
                    gender={getGender(people.gender)}
                    birth_year={people.birth_year}
                    vehicle={people.vehicles.length}
                    starship={people.starships.length}
                />
            )
        })}
        <LoadBtn/>
        </div>
    )
}
