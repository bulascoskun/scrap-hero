import styled from 'styled-components';
import { HeroNotHome, LightTitle, ProductCard } from '../components';
import { carouselData } from '../assets/carousel-data';

const Wrapper = styled.section`
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-evenly;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    .products {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1200px) {
    .products {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const Products = () => {
  return (
    <Wrapper>
      <HeroNotHome title="Products" />
      <LightTitle title="Our Products" />
      <div className="lt-section-breaker"></div>
      <section className="products">
        {carouselData.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </section>
      <div className="lt-section-breaker"></div>
    </Wrapper>
  );
};
export default Products;
