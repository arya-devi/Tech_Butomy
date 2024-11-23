import React from "react";

const ProductCard = () => {
  // Function to randomly assign a discount label
  const getRandomDiscount = () => {
    const discounts = ["-50%", "-30%", "-20%"];
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  return (
    <div className="group my-3 flex w-full max-w-sm flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
      {/* Product Image Section */}
      <a className="relative flex h-60 overflow-hidden" href="#">
        <img
          className="absolute top-0 right-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
          alt="product image"
        />

        {/* Green "New" Label */}
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          New
        </span>

        {/* Red Discount Label */}
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {getRandomDiscount()}
        </span>
      </a>

      {/* Product Details Section */}
      <div className="mt-4 px-5 pb-5">
        {/* Product Name */}
        <a href="#">
          <h5 className="text-xl font-bold tracking-tight text-slate-900">
            Lululemon Comfort Tee - White
          </h5>
        </a>

        {/* Small Paragraph */}
        <p className="mt-2 text-sm text-gray-700">
          Experience the ultimate comfort with this premium white tee, perfect for casual outings.
        </p>

        {/* Product Price */}
        <div className="mt-4 flex items-center">
          <span className="text-2xl font-bold text-slate-900">$79</span>
          <span className="ml-2 text-sm text-slate-500 line-through">$99</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;