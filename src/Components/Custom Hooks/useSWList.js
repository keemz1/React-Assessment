import {useState} from 'react'

export default function useSWList(initialList) {
    const [list, setList] = useState(initialList);
    return [list,setList]
}
