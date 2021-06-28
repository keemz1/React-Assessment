import {useState,useEffect} from 'react'

export default function useSWAPIStorage(urlState,listState) {
    const [url, setUrl] = useState(urlState);
    const [list, setList] = useState([]);
    const [search, setSearch] = useState();
    useEffect(() => {
        GetURL()
    }, [url])


    function GetURL() {
        fetch(url)
        .then(response => response.json())
        .then(json => setList([...json.results]))
    }
    return {url,list,search,setUrl,setList,setSearch}
}
