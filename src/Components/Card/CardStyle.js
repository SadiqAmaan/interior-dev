// src/component/Card/CardStyles.js

import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 375px; /* Default width */
  height: 375px; /* Default height */

  &:hover {
    transform: scale(1.05);
  }

  /* Responsive styles */
  @media (max-width: 1200px) {
    width: 300px; /* Smaller width for medium screens */
    height: 300px; /* Adjust height accordingly */
  }

  @media (max-width: 900px) {
    width: 250px; /* Smaller width for small screens */
    height: 250px; /* Adjust height accordingly */
  }

  @media (max-width: 600px) {
    width: 200px; /* Even smaller width for extra-small screens */
    height: 200px; /* Adjust height accordingly */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the card area */
`;
