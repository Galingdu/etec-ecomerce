import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
       
        const response = await axios.get('https://product-server-json.onrender.com/products')
        setProducts(Array.isArray(response.data) ? response.data : []);
        
      } catch (error) {
        console.error("Error fetching products:", error)
      }finally{
        setLoading(false)
      }
    }
    fetchProducts()

  }, [])
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  )
} 

export default ProductContext 
