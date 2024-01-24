import { useCallback, useEffect, useRef, useState } from "react"
import ProductCard from "./ProductCard";

/* Magic Numbers */
const BASE_API_URL = `https://dummyjson.com/products`;
const LIMIT = 12;

export function ProductList() {
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);
  const loaderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    fetch(`${BASE_API_URL}?limit=${LIMIT}&skip=${offset}&select=title,price,images`)
      .then((response) => response.json())
      .then((data) => {
        setProducts((prev) => [...prev, ...data.products]);
        setIsLoading(false);
        if (data.products.length === 0) {
          //Reset offset to create an infinite scroll effect
          setOffset(0);
        }
      })
  }, [offset])

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (isLoading) return;
    const ref = loaderRef.current;
    const observer = new IntersectionObserver((entries) => {
      console.info(entries)
      const target = entries[0];
      if (target.isIntersecting) {
        setOffset((prev) => prev + 12);
        fetchProducts()
      }
    })

    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    }
  }, [isLoading, fetchProducts])

  return (
    <>
      <div className="product-list">
        {products.map((product, idx) => <ProductCard product={product} key={idx} />)}
      </div>
      <div ref={loaderRef}></div>
    </>
  )
}
