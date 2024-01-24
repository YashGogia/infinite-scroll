import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

/* Magic Numbers */
const BASE_API_URL = `https://api.escuelajs.co/api/v1/products`;
const LIMIT = 12;
const OFFSET = 0;

export function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${BASE_API_URL}?limit=${LIMIT}&offset=${OFFSET}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="product-list">
      {products.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}
