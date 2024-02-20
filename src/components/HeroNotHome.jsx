import styled from 'styled-components';
import scrapHero from '../assets/scrap-hero.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  margin-bottom: 2rem;

  .hero-image-container {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .hero-image {
    object-fit: cover;
    width: 100%;
    height: 20vh;
    filter: brightness(0.4);
  }

  .hero-title {
    display: flex;
    flex-direction: row;

    position: absolute;
    top: 65%;
    left: 10%;
    color: var(--color-1);
    font-size: 1.5rem;
  }

  .hero-title-icon {
    color: var(--color-7);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: var(--color-6);
    }
  }

  span {
    margin: 0 0.5rem;
  }

  @media screen and (max-width: 600px) {
    .hero-image {
      height: 10vh;
    }

    .hero-title {
      top: 50%;
      left: 2rem;
      font-size: 1.5rem;
    }
  }
`;

const HeroNotHome = ({ title }) => {
  return (
    <Wrapper>
      <div className="hero-image-container">
        <img className="hero-image" src={scrapHero} alt="Scrap Metal" />
        <div className="hero-title">
          <Link to="/">
            <FontAwesomeIcon className="hero-title-icon" icon={faHouse} />
          </Link>
          <span>|</span>
          <h4 className="hero-title-text">{title}</h4>
        </div>
      </div>
    </Wrapper>
  );
};
export default HeroNotHome;
