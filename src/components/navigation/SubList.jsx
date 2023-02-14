import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SubList = ({ open, categories }) => {
    const ulRef = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        // if (open) {
        //     setShow(true)
        //     setTimeout(() => {
        //         ulRef.current.classList.add('opacity-1')
        //         ulRef.current.classList.remove('opacity-0')

        //     }, 50)
        // } else {
        //     ulRef.current.classList.add('opacity-0')
        //     ulRef.current.classList.remove('opacity-1')
        //     setTimeout(() => {
        //         setShow(false)
        //     }, 500)
        // }
    }, [open])

    return (
        <div style={{ display: open ? 'block' : 'none' }}>
            <ul
                ref={ulRef}
                className={`absolute w-40 z-10 p-4 bg-gray-50 shadow-md rounded-md transition-all duration-500 opacity-1`}>
                {
                    categories.map(categorie => {
                        return <li className='' key={categorie.id}>
                            <Link to={'categories/' + categorie.id} className='flex justify-between'>
                            {categorie.name}
                                <img className='w-10' src={categorie.image} alt="" />
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default SubList