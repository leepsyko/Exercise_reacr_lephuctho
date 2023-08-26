import React from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default function ProductList({products,onViewDetail}) {
  return (
    <div className='row'>
      {products.map((product)=>{
        return <div className='col-md-4 d-flex' key={product.id}>
          <ProductItem product={product} onViewDetail={onViewDetail}/>
        </div>
      })}
    </div>
  )
}