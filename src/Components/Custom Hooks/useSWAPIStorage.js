import {useState,useEffect} from 'react'
import useSWList from './useSWList';



export default function useSWAPIStorage(urlState,listState,count) {
    const charactersURL = `https://swapi.dev/api/people/?page=${count}`
    const [url, setUrl] = useState(charactersURL);
    const [swList, setSWList] = useSWList([]);
    useEffect(() => {
        GetURL()
    }, [count])

    function GetURL() {
        fetch(url)
        .then(response => response.json())
        .then(json => setSWList([...swList, ...json.results]))
    }
    return {url,swList,setUrl,setSWList}
}