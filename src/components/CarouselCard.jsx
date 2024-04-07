import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 0.3rem;
  border-radius: 0.5rem;
  aspect-ratio: 1 / 1;

  height: 250px;
  min-height: 250px;
  max-height: 250px;
  background-color: var(--color-4);

  .carousel-image {
    aspect-ratio: 1/1;
    height: 240px;
    object-fit: cover;
    transition: all 0.5s;
    border-radius: 0.5rem;
  }

  .carousel-info {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 30%;
    background-color: var(--color-4);
    padding: 1rem;
    border-radius: 0.5rem;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .carousel-info h3 {
    color: var(--color-7);
    margin-bottom: 0.4rem;
  }

  .carousel-info p {
    color: var(--color-1);
  }
`;

const CarouselCard = ({ carouselImage, material, info }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/products/${material.toLowerCase()}`}>
      <Wrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className="carousel-image" src={carouselImage} alt="Copper" />
        <div className={`carousel-info ${isHovered ? 'visible' : ''}`}>
          <h3>{material}</h3>
          <p>{info}</p>
        </div>
      </Wrapper>
    </Link>
  );
};
export default CarouselCard;
