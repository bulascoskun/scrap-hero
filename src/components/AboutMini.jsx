import { Link } from 'react-router-dom';
import styled from 'styled-components';
import scrapHeroGuy from '../assets/scrap-monster.webp';
import Title from './Title';

const Wrapper = styled.section`
  padding: 2rem 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 4rem;
  justify-items: center;

  .info p {
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;
    word-spacing: 0.5rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-4);
  }

  .toabout {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-6);
  }

  .image img {
    max-width: 100%;
    height: 500px;
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .image {
      display: none;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1150px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .image {
      display: none;
    }
  }

  @media screen and (min-width: 1150px) and (max-width: 1350px) {
    padding: 2rem;
  }
`;

const AboutMini = () => {
  return (
    <Wrapper>
      <div className="info">
        <Title title="About Scrap Hero" />
        <p>
          Scrap Hero was founded in 2023 with the vision of becoming a leader in
          the scrap metal recycling industry. Our company buys, sells, and
          recycles all types of scrap metal, including copper, aluminum, iron,
          and more. At Scrap Hero, we are committed to an environmentally
          friendly and sustainable business model. We aim to conserve natural
          resources and reduce waste through recycling.
        </p>
        <Link className="toabout" to="about">
          More...
        </Link>
      </div>
      <div className="image">
        <img src={scrapHeroGuy} alt="Scrap Hero Guy" />
      </div>
    </Wrapper>
  );
};
export default AboutMini;
