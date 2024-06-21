// src/components/ImageGallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import ImageModal from './ImageModal';
import './ImageGallery.css';

const images = [
  'https://tse1.mm.bing.net/th?id=OIP._YYy6s8YyeN8QARP4vGIdQHaEK&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.EBimm74Kh_zi7Jo1i58o3wHaFj&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIF.LdLyqmRBxpfAbA3KvGHaEg&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.yCfvFQVRXsGqx_nvcPn2sAHaFj&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.VqPvGsWqGrrSoL9sw4FsJAHaHa&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.wj-gv-tel2vT1YQZie678gHaFJ&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.smHeoUMvakdMnUFg6h6e2gHaHa&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.Ns4FusISLmL_J9EpAStxgAHaFG&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.de3o2HpF99tlf909VRr9wgHaEL&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.73HRe2k0eV24i2pP-lQ6MAHaJQ&pid=Api&P=0&h=180',
];

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} index={index} openModal={openModal} />
      ))}
      {selectedImageIndex !== null && (
        <ImageModal
          image={images[selectedImageIndex]}
          closeModal={closeModal}
          goToPreviousImage={goToPreviousImage}
          goToNextImage={goToNextImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
