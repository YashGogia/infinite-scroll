import React from 'react'

export default function ProductCard({ product }) {
  let imgSrc = product?.images[0];
  return (
    <div className="product-card">
      <div className='product-img' style={{
        backgroundImage: `url(${imgSrc})`
      }} />
      <div className="product-details">
        <span className="title" title={product.title}>{product.title}</span>
        <span className="price">${product.price}</span>
      </div>
    </div>
  )
}
