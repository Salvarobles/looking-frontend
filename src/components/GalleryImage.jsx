import React, { useState, useEffect } from 'react';
const apiUrl = import.meta.env.VITE_IMG_URL;
const GalleryImage = ({ img = [] }) => {
  const [mainImage, setMainImage] = useState('');
  const [secondaryImages, setSecondaryImages] = useState([]);

  useEffect(() => {
    if (img.length > 0) {
      setMainImage(img[0]);
      setSecondaryImages(img.slice(1));
    }
  }, [img]);

  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
    setSecondaryImages([mainImage, ...secondaryImages.filter(image => image !== clickedImage)]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        {mainImage && (
          <div
            className="h-96 w-full max-w-md rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${apiUrl}/accommodation/${mainImage})` }}
          ></div>
        )}
      </div>
      <div className="flex justify-center gap-4">
        {secondaryImages.map((image, index) => (
          <div
            key={index}
            className="h-24 w-24 md:h-32 md:w-32 rounded-lg bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${apiUrl}/accommodation/${image})` }}
            onClick={() => handleImageClick(image)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImage;