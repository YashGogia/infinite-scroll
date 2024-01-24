import React, { useState } from 'react'
import ProductModal from './ProductModal';
import { createPortal } from 'react-dom';

export default function ProductCard({ product }) {
  const { thumbnail, title, price } = product;
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    setShowModal(true)
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <div className='product-img' style={{
        backgroundImage: `url(${thumbnail})`
      }} />
      <div className="product-details">
        <span className="title" title={title}>{title}</span>
        <span className="price">${price}</span>
      </div>
      {
        showModal && createPortal(
          <ProductModal product={product} onClose={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }} />,
          document.body)
      }
    </div>
  )
}
