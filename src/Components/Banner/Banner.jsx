import React from 'react';
import { BannerWrapper } from './BannerStyle';

const Banner = () => {
  return (
    <BannerWrapper>
      <section className='banner'>
        <img src="/images/Banner.jpg" alt="Living Room" />
        <div className='title'>
          <h2>Z&Z Interiors</h2>
        </div>
      </section>
    </BannerWrapper>
  );
}

export default Banner;
