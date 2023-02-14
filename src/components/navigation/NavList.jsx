import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SubList from './SubList'
import axios from 'axios'
import { MdKeyboardArrowDown } from 'react-icons/md'

const NavList = () => {
    const [open, setOpen] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories').then((response) => {
            setCategories(response.data)
        })
    }, [])

    return (
        <ul className='flex gap-4'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li className='relative' onClick={() => setOpen(!open)}>
                <Link to='#' className='flex items-center'>
                    Catalog <MdKeyboardArrowDown />
                </Link>
                <SubList categories={categories} open={open} />
            </li>
            <li>
                <Link to='/about'>About us</Link>
            </li>
            <li>
                <Link to='/support'>Support</Link>
            </li>
        </ul>
    )
}

export default NavList