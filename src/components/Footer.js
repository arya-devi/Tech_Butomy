import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-black pb-10">
        <hr className="my-8 border-gray-800" />

        <div className="container mx-auto px-4 font-semibold md:leading-10">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Shopping</h2>
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-lg font-semibold mb-4">Links</h3>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-lg font-semibold mb-4">Help</h3>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Payment Options
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policies
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:ml-8">
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border border-gray-700 rounded-md px-4 py-2 mb-4"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Adding horizontal rule for visual separation */}
          <hr className="my-8 border-gray-800" />

          <div className="text-center mt-8">
            <p>&copy; 2023 Shopping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
