import React, { Fragment, useEffect, useState } from 'react'
import NavBar from './NavBar'
import { api } from '../axios'
import { useNavigate } from 'react-router-dom'

const ProductsList = () => {

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get("/products?limit=20&skip=100")
                setProducts(data.products)
            } catch (err) {
                return alert(err.message)
            }
        })()
    }, [])

    return (
        <Fragment>
            <NavBar />
            <div className="grid grid-cols-12 mt-20 mx-auto gap-3 px-5 md:px-8">
                {
                    products.map(item => {
                        return (
                            <div key={item.id} onClick={() => navigate(`/shop/v/${item.id}`)} className='col-span-12 p-2 cursor-pointer bg-black bg-opacity-10 sm:col-span-6 md:col-span-4 lg:col-span-3 text-center'>
                                <div className='flex justify-center'>
                                    <img src={item.images[0]} alt={item.title} className='aspect-square h-52 w-52 object-contain'/>
                                </div>
                                <div>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default ProductsList
