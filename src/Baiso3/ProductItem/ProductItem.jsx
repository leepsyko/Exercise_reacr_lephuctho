import React from 'react'

export default function ProductItem({product,onViewDetail}) {
  return (
    <div className='card mb-2 p-3 m-5'>
        <img src={product.image} alt="product" />
        <div className="card-body">
            <h3 className='card-title'>{product.name}</h3>
            <p className="card-text">{product.price}$</p>
            <button className='btn btn-primary' onClick={()=>onViewDetail(product.id)}>Xem chi tiết</button>
        </div>
    </div>
)
}
