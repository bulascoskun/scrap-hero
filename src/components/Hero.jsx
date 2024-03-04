import styled from 'styled-components';
import scrapHero from '../assets/scrap-hero.avif';

const Wrapper = styled.section`
  .hero-image-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  .hero-image {
    object-fit: cover;
    width: 100%;
    height: 70vh;
    opacity: 1;
  }

  .hero-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background-color: #ffffffc5;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 2rem;
  }

  .hero-info-text {
    font-family: IronMan;
    font-size: 8rem;

    color: var(--color-5);
  }

  @media screen and (max-width: 820px) {
    .hero-image {
      object-fit: cover;
      width: 100%;
      height: 60vh;
    }

    .hero-info {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 1.5rem 0;
    }

    .hero-info-text {
      text-align: center;
      font-size: 5rem;
      color: var(--color-5);
    }
  }

  @media screen and (min-width: 820px) and (max-width: 1150px) {
    .hero-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 1rem 0;
    }

    .hero-info-text {
      text-align: center;
      font-size: 6rem;
      color: var(--color-5);
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-image-container">
        <img className="hero-image" src={scrapHero} alt="Scrap Metal" />
        <div className="hero-info">
          <p className="hero-info-text">Looking for scraps?</p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
