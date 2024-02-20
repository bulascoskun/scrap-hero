import styled from 'styled-components';

import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  background-color: var(--color-5);

  padding: 3rem 5rem;
  display: grid;
  grid-template-columns: 5fr 3fr;

  .text {
    color: var(--color-1);
  }

  .pricelist-header {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    color: var(--color-7);
  }

  h4 {
    margin: 1rem 0;
  }

  p {
  }

  .pricelist-link {
    color: var(--color-7);
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      color: var(--color-7);
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .icon-container {
      display: none;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1150px) {
    display: flex;
    flex-direction: column;

    padding: 2rem 3rem;

    .icon {
      margin-top: 2rem;
      font-size: 5rem;
    }
  }
`;

const PricingMini = () => {
  return (
    <Wrapper>
      <div className="text">
        <Link to="/pricelist" className="pricelist-header">
          Price List
        </Link>
        <h4>
          Staying updated on current scrap metal prices has never been easier!
          Simply become a customer of Scrap Hero.
        </h4>
        <p>
          You can find the most recent and valid scrap prices, including
          stainless steel scrap prices, copper scrap prices, scrap cable prices,
          brass scrap prices, aluminum scrap prices, and the most current scrap
          price list{' '}
          <Link to="/pricelist" className="pricelist-link">
            here
          </Link>
          .
        </p>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon className="icon" icon={faTags} />
      </div>
    </Wrapper>
  );
};
export default PricingMini;
