import React from 'react'

const Card = () => {
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
    {
      src: "https://images.pexels.com/photos/5446912/pexels-photo-5446912.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      name: "Dining",
    }
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-xl mt-14 sm:text-4xl lg:text-3xl">
        Limited Time Offer!
      </h1>
      <p className="text-center font-semibold text-md mb-10 mt-5 sm:text-lg md:text-xl lg:text-xl">
        Explore our handpicked selection of best-selling products designed to
        make your shopping experience unforgettable. Whether you're upgrading
        your style or finding the perfect gift, we have something just for you!
      </p>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 px-5 sm:px-10  mb-10">
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
    </div>
  )
}

export default Card
