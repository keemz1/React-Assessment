import React, { useState } from 'react'

export default function useSearch(initialValue) {
    const [state, setstate] = useState(initialValue)
    return [state,setstate]
}
