import React from "react";
import ProductCard from "./components/ProductCard";
import SliderComponent from "./components/SliderComponent";

const App = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/5446912/pexels-photo-5446912.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      name: "Dining",
    },
    {
      src: "https://images.pexels.com/photos/10437485/pexels-photo-10437485.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      name: "Living",
    },
    {
      src: "https://images.pexels.com/photos/4769470/pexels-photo-4769470.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      name: "Bedroom",
    },
  ];

  const photos = [
    {
      src: "https://pagedone.io/asset/uploads/1688031162.jpg",
      alt: "Gallery image 1",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031232.jpg",
      alt: "Gallery image 2",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031357.jpg",
      alt: "Gallery image 3",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031375.jpg",
      alt: "Gallery image 4",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031396.jpg",
      alt: "Gallery image 5",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031414.png",
      alt: "Gallery image 6",
    },
  ];

  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-8 bg-white shadow-md relative">
        {/* Left section: Menu button and Shopping Title */}
        <div className="flex items-center gap-6">
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-3xl"
            onClick={() =>
              document.getElementById("menu").classList.toggle("hidden")
            }
          >
            &#9776;
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 hidden md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <h1 className="text-3xl font-bold">Shopping</h1>
        </div>

        {/* Right section: Navigation Links */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* Icons */}
          <div className="flex gap-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="menu"
          className="hidden absolute top-0 left-0 right-0 bg-white shadow-lg md:hidden flex flex-col items-center py-6 space-y-4"
        >
          {/* Hamburger menu icon */}
          <button
            className="text-3xl mb-4"
            onClick={() =>
              document.getElementById("menu").classList.toggle("hidden")
            }
          >
            &#9776;
          </button>
          <ul className="font-semibold cursor-pointer">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Background Image with Card */}
      <div
        className="h-screen bg-cover bg-center flex"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        {/* Empty Half */}
        <div className="w-1/2"></div>

        {/* Filled Half with Card */}
        <div className="w-1/2 flex items-center justify-start">
          <div className="max-w-3xl p-8 py-28 bg-orange-100 border border-gray-200 rounded-lg shadow">
            <h6 className="mb-2 text-lg font-bold text-gray-500">
              Technology Insights
            </h6>
            <h2 className="mb-4 text-5xl font-bold tracking-tight text-yellow-600 ">
              Noteworthy Acquisitions of 2021
            </h2>
            <p className="mb-6 text-xl font-semibold text-gray-800 ">
              Discover the biggest technology acquisitions of the year,
              presented in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-10 py-5 text-md font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-4  "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/*  card */}
      <h1 className="text-center font-bold text-xl mt-14 sm:text-4xl md:text-3xl lg:text-3xl">
        Limited Time Offer!
      </h1>
      <p className="text-center font-semibold text-md mb-10 mt-5 sm:text-lg md:text-xl lg:text-xl">
        Explore our handpicked selection of best-selling products designed to
        make your shopping experience unforgettable. Whether you're upgrading
        your style or finding the perfect gift, we have something just for you!
      </p>
      <div className="grid lg:ml-52 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 px-5 sm:px-10 md:px-20  mb-10">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.name}
            />
            <p className="mt-2 text-xl font-semibold">{image.name}</p>
          </div>
        ))}
      </div>

      <h1 className="text-center font-bold text-3xl mt-28">Shop by Category</h1>
      <p className="text-center font-semibold text-md mb-10 mt-5">
        Discover a wide range of categories from electronics, fashion, home
        goods, to beauty products. Find exactly what you need with just a few
        clicks!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center px-14">
        {cards.map((photo, index) => (
          <ProductCard key={index} />
        ))}
      </div>

      <SliderComponent />

      <h1 className="text-center font-bold text-3xl mt-28">Product Features</h1>
      <p className="text-center font-semibold text-md mb-14 mt-10">
        Our product offers unparalleled quality and performance. Designed with
        precision, it ensures long-lasting durability and a seamless experience.
        Perfect for everyday use or special occasions, this item is a must-have!
      </p>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7 mb-40 px-36">
        {photos.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-8">
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-8 bg-white mb-6">
        <h1 className="text-3xl font-bold">Shopping</h1>
        <ul className="flex gap-6 font-semibold cursor-pointer">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <hr className="border-t-2 border-gray-300 mx-8 mb-10" />
      <p className="text-center text-gray-500 text-sm mt-8 mb-10">
        © 2024 Shopping. All rights reserved. Your one-stop shop for everything
        you need.
      </p>
    </div>
  );
};

export default App;
