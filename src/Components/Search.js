import {useState,useEffect,useRef} from 'react'
import '../Css/Search.css'
import classNames from 'classnames'
import searchIcon from '../Assets/Search.svg'
import useSearch from './Custom Hooks/useSearch'
import useSWAPIStorage, { useSWAPIStorageSearch } from './Custom Hooks/swapiStorage'
import useSWList from './Custom Hooks/useSWList'

export default function Search({setList, search, setSearch, sort, setSort, sortDesc, setSortDesc}) {
    const [ascendingOrder, setAscendingOrder] = useState(false)
    const [descendingOrder, setDescendingOrder] = useState(false)
    const [searchLocal, setSearchLocal] = useState('')

    const ascClass = classNames({
        'ascButton':true,
        'orderIs-active': ascendingOrder
    })

    const descClass = classNames({
        'decButton':true,
        'orderIs-active': descendingOrder
    })

    function getCharcaterSearch() {
        let searchValue = searchLocal.toLowerCase().trim()
        setSearch(searchValue)
        const searchURL = `https://swapi.dev/api/people/?search=${searchValue}`


        // ----------- This displays the data from the Links but is commented out because the API is slow ---------//
    
        fetch(searchURL)
        .then(response => response.json())
        .then(json =>(json?.results?.map((res,index)=>{
            Object.keys(res)
            .map(async(key,i)=>{
                console.log('test: ',json.results[index][key])
                if (key === 'homeworld') {
                    await fetch(res[key])
                .then(response => response.json())
                .then((world) => {json.results[index][key]=world.name})
                }
                if (key === 'species') {
                    await fetch(res[key])
                .then(response => response.json())
                .then((world) => {json.results[index][key]=world.name})
                }
                if (key === 'vehicle') {
                    await fetch(res[key])
                .then(response => response.json())
                .then((world) => {json.results[index][key]=world.name})
                }
                if (key === 'starships') {
                    await fetch(res[key])
                .then(response => response.json())
                .then((world) => {json.results[index][key]=world.name})
                }
            }); return setList([...json.results])})))
    }

    function getselectOption() {
        
    }

    return (
        <div className='searchContainer'>
            <div className='searchFrame1'>
                <input
                    className='searchbar' type='text'
                    placeholder='Search'
                    value={searchLocal}
                    onChange={e=>{e.preventDefault();
                    setSearchLocal(e.target.value);
                     }}
                />
                <button className='btnSearch' type='button' onClick={()=> {getCharcaterSearch()}}>
                    <img src={searchIcon} alt=''/>
                </button>
            </div>
            <div className='searchFrame2'>
                <p className='txtSortBy'>Sort By</p>
                <div className='select'>
                <select className='searchSelect'>
                    <option onClick={()=>getselectOption()} value='Homeworld'>Homeworld</option>
                    <option onClick={()=>getselectOption()} value='Vehicle'>Vehicle</option>
                    <option onClick={()=>getselectOption()} value='Starship'>Starship</option>
                </select>
                </div>
                <button
                onClick={()=>{setSort(!sort);setSortDesc(false)}} className={ascClass} type='button'>
                    ASC
                </button>
                <button onClick={()=>{setSortDesc(!sortDesc);setSort(false)}} className={descClass} type='button'>
                    DESC
                </button>
            </div>
        </div>
    )
}
