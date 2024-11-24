import React from 'react'

const FeaturedProduct = () => {
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
    
  return (
    <div>
       <h1 className="text-center font-bold text-3xl mt-28">Product Features</h1>
      <p className="text-center font-semibold text-md mb-14 mt-10">
        Our product offers unparalleled quality and performance. Designed with
        precision, it ensures long-lasting durability and a seamless experience.
        Perfect for everyday use or special occasions, this item is a must-have!
      </p>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7 mb-40 lg:px-36 px-12">
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
    </div>
  )
}

export default FeaturedProduct
