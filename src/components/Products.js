import React from 'react'
import ProductCard from './ProductCard';

const Products = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-28 sm:text-3xl">
        Shop by Category
      </h1>
      <p className="text-center font-semibold text-md mb-10 mt-5 sm:text-lg md:text-xl lg:text-xl">
        Discover a wide range of categories from electronics, fashion, home
        goods, to beauty products. Find exactly what you need with just a few
        clicks!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 sm:px-12 md:px-16 lg:px-20">
        {cards.map((photo, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default Products
