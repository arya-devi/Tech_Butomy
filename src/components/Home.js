import React from 'react'

const Home = () => {
  return (
    <div>
       <div
  className="h-screen bg-cover bg-center flex"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  }}
>
  {/* Empty Half */}
  <div className="hidden lg:block lg:w-1/2"></div>

  {/* Filled Half with Card */}
  <div className="flex items-center justify-center w-full lg:w-1/2 px-4 py-8">
    <div className="max-w-3xl p-6 bg-orange-100 border border-gray-200 rounded-lg shadow lg:py-20 lg:px-12">
      <h6 className="mb-2 text-lg font-bold text-gray-500">
        Technology Insights
      </h6>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-yellow-600 lg:text-5xl">
        Noteworthy Acquisitions of 2021
      </h2>
      <p className="mb-6 text-base font-semibold text-gray-800 lg:text-xl">
        Discover the biggest technology acquisitions of the year, presented in
        reverse chronological order.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-6 py-3 text-md font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-4"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-4 h-4 ms-2"
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
    </div>
  )
}

export default Home
