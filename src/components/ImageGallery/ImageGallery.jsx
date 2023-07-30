import React from 'react';
import PropTypes from 'prop-types';
import ImageItemGallery from './ImageItemGallery';

const ImageGallery = ({
  id,
  pageURL,
  previewURL,
  user,
  modalContent,
  largeImageURL,
}) => {
  return (
    <>
      <ImageItemGallery
        id={id}
        pageURL={pageURL}
        previewURL={previewURL}
        user={user}
        modalContent={modalContent}
        largeImageURL={largeImageURL}
      />
    </>
  );
};

ImageGallery.propTypes = {};

export default ImageGallery;
ImageGallery.propTypes = {
  id: PropTypes.number,
  pageURL: PropTypes.string,
  previewURL: PropTypes.string,
  user: PropTypes.string,
  modalContent: PropTypes.func,
  largeImageURL: PropTypes.string,
};
