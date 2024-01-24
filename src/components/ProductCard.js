import React from 'react'

/**
 * {
    "id": 15,
    "title": "Classic White Crew Neck T-Shirt MODIF",
    "price": 59,
    "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe. ezezez",
    "images": [
        "[\"https://api.escuelajs.co/api/v1/files/171b.jpg\"]"
    ],
    "creationAt": "2024-01-24T03:05:11.000Z",
    "updatedAt": "2024-01-24T13:49:13.000Z",
    "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-01-24T03:05:11.000Z",
        "updatedAt": "2024-01-24T03:05:11.000Z"
    }
}
 */

export default function ProductCard({ product }) {
  let imgSrc = product?.images[0]
  if (imgSrc.startsWith('[')) {
    imgSrc = JSON.parse(imgSrc)[0]
  }
  return (
    <div className="product-card">
      <img src={imgSrc} alt={product.title} />
      <div className="product-details">
        <span className="title" title={product.title}>{product.title}</span>
        <span className="price">${product.price}</span>
      </div>
    </div>
  )
}
