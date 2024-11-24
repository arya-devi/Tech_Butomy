import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative">
        {/* Left Section: Hamburger and Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() =>
              document.getElementById("mobileMenu").classList.toggle("hidden")
            }
          >
            &#9776;
          </button>
          <img className="w-16 hidden sm:block" src="https://media.istockphoto.com/id/1174549062/vector/shopping-bag-logo-design-icon-online-shop-symbol-vector-illustrations.jpg?s=612x612&w=0&k=20&c=Zgtz4Nom60--7vsHa54bkKP7waE7pQeMC0dJcggrT8k=" alt=""/>
          <h1 className="text-2xl font-bold">Shopping</h1>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="hidden md:flex gap-8 font-semibold cursor-pointer">
          <li className="hover:text-gray-600">Home</li>
          <li className="hover:text-gray-600">Shop</li>
          <li className="hover:text-gray-600">About</li>
          <li className="hover:text-gray-600">Contact</li>
        </ul>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-4 cursor-pointer">
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

        {/* Mobile Menu */}
        <div
          id="mobileMenu"
          className="hidden absolute top-full left-0 right-0 bg-white shadow-lg md:hidden pl-7 flex-col items-center pb-6 py-1"
        >
          <ul className="font-semibold cursor-pointer">
            <li className="hover:text-gray-600">Home</li>
            <li className="hover:text-gray-600">Shop</li>
            <li className="hover:text-gray-600">About</li>
            <li className="hover:text-gray-600">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
