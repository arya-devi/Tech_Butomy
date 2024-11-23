import React from "react";

const SliderComponent = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f8f7f3] p-8 mx-4 md:mx-12 mt-10">
      {/* Left Part: Text Content */}
      <div className="w-full md:w-1/3 flex flex-col justify-center space-y-4 p-4 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="px-6 py-3 bg-yellow-600 text-white font-medium rounded-md hover:bg-yellow-700 transition">
          Explore More
        </button>
      </div>

      {/* Right Part: Images */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row space-y-4 md:space-x-4 p-4 md:p-10">
        {/* Image 1 */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Room Inspiration 1"
            className="rounded-lg object-cover h-full w-full"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm text-gray-500">01 — Bed Room</p>
            <h2 className="text-lg font-bold text-gray-800">Inner Peace</h2>
          </div>
        </div>

        {/* Image 2 */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/28753142/pexels-photo-28753142/free-photo-of-elegant-modern-living-room-interior-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Room Inspiration 2"
            className="rounded-lg object-cover h-full w-full"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition">
            <span className="text-xl font-bold text-gray-800">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
