import React, { useState } from 'react'

export default function useSearch(initialValue) {
    const [searchResult, setSearchResult] = useState(initialValue)
    
    return [searchResult,setSearchResult]
}
