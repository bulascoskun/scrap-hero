import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { HeroNotHome, LightTitle } from '../components';
import { carouselData } from '../assets/carousel-data';
import { motion } from 'framer-motion';

const Wrapper = styled.section`
  .product-page {
    padding: 0 10rem;
  }

  .product-photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
  }

  .product-photo {
    aspect-ratio: 1/1;
    object-fit: cover;
    width: 250px;

    padding: 1rem;
    margin: 0 1rem;
  }

  .product-info {
    margin-bottom: 4rem;
  }

  .product-info-paragraph {
    color: var(--color-4);
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    .product-page {
      padding: 0 2rem;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1200px) {
    .product-page {
      padding: 0 4rem;
    }
  }
`;

const SingleProduct = () => {
  const { id: paramsName } = useParams();
  const productName = paramsName.toUpperCase()[0] + paramsName.slice(1);

  const { id, image, info, name, longInfo, extraImages } = carouselData.find(
    (object) => {
      return object.name === productName;
    }
  );

  return (
    <Wrapper>
      <HeroNotHome title={productName} />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LightTitle title={name} />

        <div className="section-breaker" />

        <div className="product-page">
          <div className="product-info">
            {longInfo.map((paragraph, i) => {
              return (
                <p key={i} className="product-info-paragraph">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="product-photo-container">
            {extraImages.map((image, i) => {
              return (
                <img
                  className="product-photo"
                  key={i}
                  src={image}
                  alt={image}
                />
              );
            })}
          </div>
        </div>

        <div className="section-breaker" />
      </motion.div>
    </Wrapper>
  );
};
export default SingleProduct;
