// src/component/Card/Card.js

import React from 'react';
import { CardWrapper, Image } from './CardStyle';

const Card = ({ imageSrc }) => (
    <CardWrapper>
      <Image src={imageSrc} alt="Card image" />
    </CardWrapper>
  );
  
export default Card;
