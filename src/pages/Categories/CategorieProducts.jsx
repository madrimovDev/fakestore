import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CategorieProducts = () => {
    const {id} = useParams()

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=' + id).then(response => {
            console.log(response)
        })
    }, [])

  return (
    <div>CategorieProducts {id}</div>
  )
}

export default CategorieProducts