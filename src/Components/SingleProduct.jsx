import React, { Fragment, useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { api } from '../axios'

const SingleProduct = () => {

    const { product_id } = useParams()
    const [product, setProduct] = useState(null)
    const [currentImage, setCurrenntImage] = useState("")

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/products/${product_id}`)
            setProduct(data)
            setCurrenntImage(data.images[0])
        })()
    }, [])

    return (
        <Fragment>
            <NavBar />
            {
                product && <Fragment>
                    <div className='mt-20 flex justify-between px-2 md:px-10'>
                        <div className='flex'>
                            <div className='flex flex-col w-5/12'>
                                {
                                    product.images.map((item, index) => {
                                        return (
                                            <img onClick={() => setCurrenntImage(item)} key={index} src={item} alt={item} className='w-20 cursor-pointer h-20'/>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <img src={currentImage} alt={product.title}/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='flex items-center gap-2'><p>{product.brand}</p> - { product.title }</h2>
                            <p>{ product.description }</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-red-600'><s>${product.price}</s></p>
                                <p className='text-green-600'>${product.price - (product.price * product.discountPercentage / 100)}</p>
                            </div>
                            <p><i className='fa fa-star' />{product.rating}</p>
                            <p>{product.returnPolicy}</p>
                        </div>
                    </div>
                    <div className='flex px-2 md:px-10 flex-col gap-3'>
                        {
                            product.reviews.map((item, index) => {
                                return (
                                    <div key={index} className='flex justify-between px-3 border-2 border-green-600 p-4'>
                                        <div>
                                            <p><i className='fa fa-star' />{item.rating} {item.reviewerName}</p>
                                            <p className='ms-4 mt-3'>{item.comment}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>    
                </Fragment>
            }
        </Fragment>
    )
}

export default SingleProduct
