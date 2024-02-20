import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  border: 1px solid var(--color-6);
  max-width: 350px;
  justify-self: center;
  background-color: white;
  transition: all 0.5s ease;

  .product-modal {
    opacity: 0;
    visibility: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #000000d1;
    transition: all 0.5s ease;
  }

  .product-link-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: var(--color-1);
    font-weight: 700;
    text-decoration: none;
    font-size: 2rem;
    color: var(--color-7);
    transition: all 0.5s ease;

    &:hover {
      color: var(--color-8);
    }
  }

  .product-info {
    padding: 1rem;
  }

  .product-image {
    object-fit: cover;
    aspect-ratio: 1 / 1;
    max-width: 100%;
  }

  img,
  h3 {
    margin-bottom: 1rem;
  }

  h3,
  p {
    transition: all 0.6s ease;

    text-align: center;
    color: var(--color-3-1);
  }
`;

const ProductCard = ({ product }) => {
  const { id, image, name, info } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`product-modal ${isHovered ? 'half-visible' : ''}`}>
        <Link to={`${name.toLowerCase()}`} className="product-link-text">
          {name}
        </Link>
      </div>
      <div className="product-info">
        <img className="product-image" src={image} alt={name} />
        <h3 style={isHovered ? { color: 'var(--color-6)' } : null}>{name}</h3>
        <p style={isHovered ? { color: 'var(--color-6)' } : null}>{info}</p>
      </div>
    </Wrapper>
  );
};
export default ProductCard;
