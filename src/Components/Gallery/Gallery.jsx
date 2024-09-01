// src/component/Gallery/Gallery.js

import React from 'react';
import Card from '../Card/Card';
import { GalleryWrapper, Title } from './GalleryStyle';

const Gallery = () => {

  const images = [
    '/images/Banner.jpg',
    '/images/Banner.jpg',
    '/images/Banner.jpg',
    '/images/Banner.jpg',
    '/images/Banner.jpg',
    '/images/Banner.jpg',
  ];

  return (
    <>
      <GalleryWrapper>
        <Title>Title 1</Title>
        {images.map((imageSrc, index) => (
          <Card key={index} imageSrc={imageSrc} />
        ))}
      </GalleryWrapper>
    </>
  );
};

export default Gallery;