import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: black;
  color: gold;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .brand {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .menu {
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .menu-item {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: color 0.3s;

    &:hover {
      color: gold;
    }
  }

  .mobile-menu-button {
    background-color: gold;
    color: black;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .mobile-menu {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;

    @media (min-width: 769px) {
      display: none;
    }
  }

  .mobile-menu-item {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: color 0.3s;

    &:hover {
      color: gold;
    }
  }
`;