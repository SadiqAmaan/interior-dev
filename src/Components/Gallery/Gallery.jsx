// src/component/Gallery/Gallery.js

import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { GalleryWrapper, Title } from "./GalleryStyle";
import links from "../../Utils/links.json";

const Gallery = () => {
  const [imagesData, setimagesData] = useState([]);

  useEffect(() => {
    setimagesData(links?.data);
  }, [links]);

  const images = [
    "/images/Banner.jpg",
    "/images/Banner.jpg",
    "/images/Banner.jpg",
    "/images/Banner.jpg",
    "/images/Banner.jpg",
    "/images/Banner.jpg",
  ];

  return (
    <>
      {imagesData?.map((data) => {
        return (
          <GalleryWrapper>
            <Title>{data?.title}</Title>
            {data?.links?.map((imageSrc, index) => (
              <Card key={index} imageSrc={imageSrc} />
            ))}
          </GalleryWrapper>
        );
      })}
    </>
  );
};

export default Gallery;
