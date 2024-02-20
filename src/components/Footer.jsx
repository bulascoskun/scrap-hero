import styled from 'styled-components';
import scrapHero from '../assets/output-onlinepngtools.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
  padding: 3rem 5rem;
  gap: 5rem;
  background-color: var(--color-5);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--color-2);

  h3 {
    color: var(--color-1);
    margin-bottom: 1rem;
  }

  .nav-links {
    list-style-type: none;
  }

  li {
    margin-bottom: 0.8rem;

    a {
      color: var(--color-2);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .email,
  .phone-number,
  .location,
  .socials {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;

    a {
      color: var(--color-2);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .icon {
    margin-right: 5px;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-grid footer-grid-1">
        <h3>Scrap Hero</h3>
        <p>
          Scrap Hero was founded in 2023 with the vision of becoming a leader in
          the scrap metal recycling industry.
        </p>
      </div>
      <div className="footer-grid footer-grid-2">
        <h3>Links</h3>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/pricelist" className="nav-link">
              Price List
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-grid footer-grid-3">
        <h3>Contact</h3>
        <div className="email">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <a target="_blank" href="mailto:scraphero@gmail.com">
            scraphero@gmail.com
          </a>
        </div>
        <div className="phone-number">
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <a target="_blank" href="https://web.whatsapp.com/">
            +1 555 555 55 55
          </a>
        </div>
        <div className="location">
          <FontAwesomeIcon className="icon" icon={faLocationDot} />
          <a target="_blank" href="https://maps.app.goo.gl/dffPhbxDZFFLy5Pv7">
            Taksim/İstanbul
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
