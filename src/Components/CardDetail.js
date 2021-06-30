import React from 'react'
import Card from './Card'

export default function CardDetail() {

    function getSWAPIData(data) {
        
    }
    
    return (
        <div>
            {/* {swList?.map(people =>{
            return(
                <Card
                    key={people.url}
                    name={people.name}
                    species={getSWAPIData(people.species)}
                    gender={getGender(people.gender)}
                    birth_year={people.birth_year}
                    vehicle={getSWAPIData(people.vehicles.map(vehicles=>{
                        vehicles
                    }))}
                    starship={getSWAPIData(people.starships.map(starships=>{
                        starships
                    }
                    ))}
                />
            )
        })} */}
        </div>
    )
}
