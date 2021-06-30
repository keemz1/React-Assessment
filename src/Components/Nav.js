import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Nav.css'

export default function Nav({name}) {
    return (
        <nav className='breadcrumbs'>
            <ul >
                <li className='breadcrumbs_item'>All Cards</li>
                <Link className='breadcrumbs__link'  to='/'>
                    <li className='breadcrumbs_item'>Select A Card</li>
                </Link>
                <Link className='breadcrumbs__link' to='/cardDetails'>
                    <li className='breadcrumbs_item'>{name} Details</li>
                </Link>
            </ul>
        </nav>
    )
}
