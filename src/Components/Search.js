import {useState} from 'react'
import '../Css/Search.css'
import classNames from 'classnames'
import searchIcon from '../Assets/Search.svg'
import useSearch from './Custom Hooks/useSearch'
import useSWAPIStorage from './Custom Hooks/useSWAPIStorage'

export default function Search({searchProp}) {
    const [searchResults, setSearchResult] = useState()
    const [order, setorder] = useState(false)
    const {url,list,setUrl,setList}= useSWAPIStorage('https://swapi.dev/api/people',[]);

    const ascDescClasses = classNames({
        'ascDecButton':true,
        'orderIs-active': order
    })


    function GetCharcaterSearch() {
        
    }

    function GetMatch(people) {
        // let searchedValue = search.toLowerCase()
        // let finalName = people.name.toLowerCase()
        // if (searchedValue === finalName) {
        //     return true
        // }
        // else{
        //     return false
        // }
    }

    return (
        <div className='searchContainer'>
            <div className='searchFrame1'>
                <input
                    className='searchbar' type='text'
                    placeholder='Search'
                />
                <button className='btnSearch' type='button' onClick={()=> {GetCharcaterSearch()}}>
                    <img src={searchIcon} alt=''/>
                </button>
            </div>
            <div className='searchFrame2'>
                <p className='txtSortBy'>Sort By</p>
                <select className='searchSelect'>
                    <option value='Homeworld'>Homeworld</option>
                    <option value='Vehicle'>Vehicle</option>
                    <option value='Starship'>Starship</option>
                </select>
                <button className={ascDescClasses} type='button'>
                    ASC
                </button>
                <button className={ascDescClasses} type='button'>
                    DESC
                </button>
            </div>
        </div>
    )
}
