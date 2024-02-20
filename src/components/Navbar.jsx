import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import scrapMonsterLogo from '../assets/output-onlinepngtools.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Wrapper = styled.section`
  background: var(--color-1);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;

  .top-header {
    font-size: 0.9rem;
    padding: 0.5rem 3rem;
    background-color: var(--color-3);
    display: flex;
    justify-content: space-between;
    background: var(--color-4);
    color: var(--color-1);
  }

  .email,
  .phone-number,
  .location,
  .socials {
    display: flex;
    align-items: center;

    a {
      color: var(--color-1);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .icon {
    margin-right: 5px;
  }

  .socials-icon {
    margin-left: 15px;
  }

  .navbar {
    padding: 0.5rem 8rem;
    display: flex;
  }

  .logo img {
    width: 100px;
    height: 60px;

    object-fit: cover;
    object-position: right top;
  }

  .nav-links {
    display: flex;
    width: 100%;
    justify-content: space-between;
    list-style-type: none;
    padding: 0 3rem 0 10rem;
  }

  .nav-links li {
    display: flex;
    align-items: center;
  }

  .nav-link {
    display: flex;
    text-decoration: none;
    color: var(--color-5);
    font-weight: 500;
    transition: all 0.2s;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;

    &:hover {
      color: var(--color-6);
    }
  }

  .burger-button {
    border: none;
  }

  .burger-icon {
    display: none;
  }

  .burger-menu {
    background-color: var(--color-0);
    margin-top: 4.4rem;
    padding: 1rem 0;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 100%;

    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* ANIMATION */
    opacity: 0;
    position: fixed;
    top: 0;
    left: -100%;
    text-align: center;
    transition: all 0.3s ease;
  }

  .burger-menu.open {
    opacity: 1;
    left: 0;
  }

  .burger-menu-link {
    z-index: 99;
    color: var(--color-5);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.7rem;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 820px) {
    .top-header {
      display: none;
    }

    .navbar {
      background-color: var(--color-1);
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      position: fixed;
      width: 100%;
      padding: 0.35rem 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      display: none;
    }

    .burger-icon {
      display: block;
      font-size: 2rem;
    }

    .burger-menu {
      display: flex;
    }
  }

  @media screen and (min-width: 820px) and (max-width: 1200px) {
    .navbar {
      padding: 0.5rem 3rem;
    }

    .nav-links {
      padding: 0 3rem;
    }

    .nav-links li {
      display: flex;
      align-items: center;
    }
  }
`;

const Navbar = () => {
  const location = useLocation();

  const [burgerMenuClass, setBurgerMenuClass] = useState('');

  const handleClick = () => {
    setBurgerMenuClass(burgerMenuClass === '' ? 'open' : '');
  };

  useEffect(() => {
    setBurgerMenuClass('');
  }, [location]);

  return (
    <Wrapper>
      {/* HEADER */}
      <div className="top-header">
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
        <div className="socials">
          <a target="_blank" href="https://www.facebook.com/">
            <FontAwesomeIcon className="socials-icon" icon={faFacebook} />
          </a>
          <a target="_blank" href="https://www.twitter.com/">
            <FontAwesomeIcon className="socials-icon" icon={faTwitter} />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <FontAwesomeIcon className="socials-icon" icon={faInstagram} />
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/" className="nav-link">
            <img src={scrapMonsterLogo} alt="Scrap Monster" />
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className="nav-link">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="products" className="nav-link">
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink to="pricelist" className="nav-link">
              PRICE LIST
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="nav-link">
              CONTACT
            </NavLink>
          </li>
        </ul>
        <button className="burger-button">
          <FontAwesomeIcon
            className="burger-icon"
            icon={faBars}
            onClick={handleClick}
          />
        </button>
      </nav>

      {/* BURGER MENU */}
      <div className={`burger-menu ${burgerMenuClass}`}>
        <NavLink to="/" className="burger-menu-link">
          HOME
        </NavLink>
        <NavLink to="about" className="burger-menu-link">
          ABOUT
        </NavLink>
        <NavLink to="products" className="burger-menu-link">
          PRODUCTS
        </NavLink>
        <NavLink to="pricelist" className="burger-menu-link">
          PRICE LIST
        </NavLink>
        <NavLink to="contact" className="burger-menu-link">
          CONTACT
        </NavLink>
      </div>
    </Wrapper>
  );
};
export default Navbar;
