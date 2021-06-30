import React from 'react'

export default function LoadMoreBtn({onClick}) {
    return (
        <button className='btnLoadMore' onclick={onClick}>
            Load More
        </button>
    )
}
