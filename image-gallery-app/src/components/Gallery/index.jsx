import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from API or database
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // Make an API call to fetch the images
      const response = await fetch('http://localhost:3004/gallery');
      const data = await response.json();

      // Update the state with the fetched images
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  return (
    <div>
      {/* <h1>Image Gallery</h1> */}
      <div className="image-grid">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.name} className="image-item" />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;