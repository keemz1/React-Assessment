import {useState,useEffect,useRef} from 'react'
import '../Css/Search.css'
import classNames from 'classnames'
import searchIcon from '../Assets/Search.svg'
import useSearch from './Custom Hooks/useSearch'
import useSWAPIStorage, { useSWAPIStorageSearch } from './Custom Hooks/useSWAPIStorage'
import useSWList from './Custom Hooks/useSWList'

export default function Search({list, setList, search, setSearch, setSort}) {
    const [ascendingOrder, setAscendingOrder] = useState(false)
    const [descendingOrder, setDescendingOrder] = useState(false)

    const ascClass = classNames({
        'ascButton':true,
        'orderIs-active': ascendingOrder
    })

    const descClass = classNames({
        'decButton':true,
        'orderIs-active': descendingOrder
    })

    function getCharcaterSearch() {
        let searchValue = search.toLowerCase().trim()
        setSearch(searchValue)
        const searchURL = `https://swapi.dev/api/people/?search=${searchValue}`
    
        fetch(searchURL)
        .then(response => response.json())
        .then(json => setList([...json.results]))
    }

    return (
        <div className='searchContainer'>
            <div className='searchFrame1'>
                <input
                    className='searchbar' type='text'
                    placeholder='Search'
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                />
                <button className='btnSearch' type='button' onClick={()=> {getCharcaterSearch()}}>
                    <img src={searchIcon} alt=''/>
                </button>
            </div>
            <div className='searchFrame2'>
                <p className='txtSortBy'>Sort By</p>
                <div className='select'>
                <select className='searchSelect'>
                    <option value='Homeworld'>Homeworld</option>
                    <option value='Vehicle'>Vehicle</option>
                    <option value='Starship'>Starship</option>
                </select>
                </div>
                <button
                onClick={()=>setSort(true)} className={ascClass} type='button'>
                    ASC
                </button>
                <button onClick={()=>setSort(false)} className={descClass} type='button'>
                    DESC
                </button>
            </div>
        </div>
    )
}
