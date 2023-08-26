import React, { useState } from 'react'
import ProductList from './ProductsList/ProductList'
import data from '../data.json'
import ModalCart from './Modal/ModalCart'

export default function Baiso3() {

  const [isOpenModal,setOpenModal] = useState(false)
  const [productDetail,setProductDetail] = useState({})

  const handleViewDetail = (id) =>{
    console.log("first")
    setOpenModal(true)
    let newProductDetail = data.filter((item)=> {return item.id === id})
    console.log(...newProductDetail)
    setProductDetail(...newProductDetail)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }



  return (
    <div className="bg-secondary">
      <div className="bg-dark p-2 opacity-50 ">  <h1 className='text-center text-light '>Tiệm Giày Retro</h1></div>
      <ProductList products={data} onViewDetail={handleViewDetail} />
           

      {isOpenModal && <ModalCart product={productDetail} onCloseModal={handleCloseModal} /> }
    </div>
  )
}
