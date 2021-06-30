import {useState,useEffect} from 'react'
import Card from './Card'
import maleGender from '../Assets/Gender-Male.svg'
import femaleGender from '../Assets/Gender-Female.svg'
import droid from '../Assets/droid.svg'
import '../Css/CardContainer.css';
import LoadBtn from './LoadMoreBtn'
import swapiStorage from './Custom Hooks/swapiStorage'
import useSWList from './Custom Hooks/useSWList'

export default function CardContainer({list, setList, search, setSearch,sort, setSort, sortDesc, setSortDesc}) {
    const [count, setCount] = useState(0)
    const [swList, setSWList] = useState([])

    function getSWAPIValues(value) {
        // const newValue = fetch(value)
        // .then(response => response.json())
        // .then(json => json.name)
        // console.log(newValue)
    }

    function loadMoreSWCharcaters() {
        setCount(count + 1 )
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

    async function getList() {
        let _list = await swapiStorage('https://swapi.dev/api/people/?page=');
        if (sort) {
            _list.sort((a,b) =>{
                if(a.name < b.name){
                    return -1;
                }
                if(a.name > b.name){
                    return 1
                }
                return 0
            })
            setSWList([..._list])
        }
        else if(sortDesc){
            _list.sort((a,b) =>{
                if(a.name < b.name){
                    return -1;
                }
                if(a.name > b.name){
                    return 1
                }
                return 0
            }).reverse()
            setSWList([..._list])
        }
        setSWList([..._list])
    }

    useEffect(() => {
        getList()
    }, [])


    console.log(swList)
    return (
        <div className='cardContainer'>
        {(search && list)?
            list?.map((people,index) =>(
                <Card
                    key={`id: ${index}`}
                    name={people?.name}
                    species={people?.species}
                    planet={people?.homeworld}
                    gender={getGender(people?.gender)}
                    birth_year={people?.birth_year}
                    vehicle={people?.vehicles?.length}
                    starship={people?.starships?.length}
                />
            ) || 'No Data Found?!'): 
         swList?.length !== 0 ?
         swList?.map((people,index) =>{
            return(
                <Card
                    key={`id: ${index}`}
                    name={people?.name}
                    species={people?.species}
                    planet={people?.homeworld}
                    gender={getGender(people?.gender)}
                    birth_year={people?.birth_year}
                    vehicle={people?.vehicles?.length}
                    starship={people?.starships?.length}
                />
            )
        }):<p className='loadingTxt'>Loading...</p>}
        </div>
    )
}
