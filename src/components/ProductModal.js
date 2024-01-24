import React from 'react'

export default function ProductModal({ product, onClose }) {
  console.log(onClose)
  const { thumbnail, title, description, price, category } = product;
  return (
    <div className="product-modal-container" onClick={onClose}>
      <div className="product-modal">
        <div className='product-img' style={{
          backgroundImage: `url(${thumbnail})`
        }} />
        <div className="product-details">
          <span className="title" title={title}>{title}</span>
          <span className="price">${price}</span>
          <span className="category">{category}</span>
          <p className='details'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
