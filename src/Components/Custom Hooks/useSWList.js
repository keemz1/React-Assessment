import {useState,useEffect} from 'react'

export default function useSWList(initialList) {
    useEffect(() => {
        console.log(initialList)
    }, [initialList])
}
