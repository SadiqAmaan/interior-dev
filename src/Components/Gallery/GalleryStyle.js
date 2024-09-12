// src/component/Gallery/GalleryStyles.js

import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: flex;
  gap: 25px; /* Adjust the gap between cards as needed */
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  margin-bottom: 25px;
  font-size: 2rem;
  background: white;
  padding: 0.3em;
  border-radius: 0.5em;
  color: #000000;
  font-weight: bold;
  font-family: "Roboto", sans-serif;

  /* Responsive styles */
  @media (max-width: 1200px) {
    font-size: 1.75rem; /* Slightly smaller font size on medium screens */
  }

  @media (max-width: 900px) {
    font-size: 1.5rem; /* Smaller font size on small screens */
  }

  @media (max-width: 600px) {
    font-size: 1.25rem; /* Even smaller font size on extra-small screens */
  }
`;
