// import React from 'react'
import ProductItem from './ProductItem'
import ProductClass from './ProductClass'

const ProductPage = () => {
  const products = [
    { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
    { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
    { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
    { name: "Sk8-Hi", manufacturer: "Vans", price: 60 }
  ];

  const productsAsAClass = products.map((product, i) => {
    return (
      <ProductClass 
        key={i}
        name={product.name}
        price={product.price}
        manufacturer={product.manufacturer}
      />
    )
  })

  const listItems = products.map((product, i) => {
    return (
      <ProductItem 
        key={i}
        name={product.name}
        price={product.price}
        manufacturer={product.manufacturer}
      />
    )
  })

  return (
    <div>
      <ul>{listItems}</ul>
      <ul>{productsAsAClass}</ul>
    </div>
  )
}

export default ProductPage
