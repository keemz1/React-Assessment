import {useEffect} from 'react'
import useSWAPIStorage from './useSWAPIStorage'
import useSWList from './useSWList'

export default function useListUpdate(value) {
    const [list, setList] = useSWList(value)
    useEffect(() => {
        setList(value)
    }, [value])
}
