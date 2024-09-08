import styled from "styled-components";

export const BannerWrapper = styled.main`
  padding: 2rem;

  .banner {
    position: relative;
    background-color: black;
    border-radius: 1rem;
    overflow: hidden;
    margin: 1rem;
    border: 2px solid gold;
    border-radius: 2em;

    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
      opacity: 0.7;

      @media (max-width: 768px) {
        height: 400px;
      }

      @media (max-width: 480px) {
        height: 300px;
      }
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        font-size: 4rem;
        font-weight: bold;
        color: white;

        @media (max-width: 768px) {
          font-size: 3rem;
        }

        @media (max-width: 480px) {
          font-size: 2rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
