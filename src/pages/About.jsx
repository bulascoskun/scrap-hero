import styled from 'styled-components';
import { HeroNotHome, LightTitle } from '../components';

import img1 from '../assets/about-us-images/about-us-1.avif';
import img2 from '../assets/about-us-images/about-us-2.avif';
import img3 from '../assets/about-us-images/about-us-3.avif';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Wrapper = styled.section`
  color: var(--color-4);

  .about-image {
    max-width: 45%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: 2rem;
  }

  .about-info {
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 0 2rem;
  }

  .row {
    margin: 2rem 12rem;
    padding-top: 0rem;

    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .about-image {
      display: none;
    }

    .row {
      display: flex;
      flex-direction: column;

      margin: 0;
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    .row {
      display: flex;

      margin: 0;
      margin-bottom: 2rem;
    }

    .about-info {
      font-size: 2vw;
    }
  }
`;

const About = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isWidthBig = width > 1000 ? 50 : 0;

  return (
    <Wrapper>
      <HeroNotHome title="About" />
      <LightTitle title="About Us" />
      <div className="lt-section-breaker"></div>

      <motion.div
        ref={ref1}
        initial={{ x: -isWidthBig, opacity: 0 }}
        animate={{ x: isInView1 ? 0 : -isWidthBig, opacity: isInView1 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="row"
      >
        <img className="about-image" src={img1} alt="About Us" />
        <p className="about-info">
          Scrap Hero was founded in 2023 with the vision of becoming a leader in
          the scrap metal recycling industry. Our company buys, sells, and
          recycles all types of scrap metal, including copper, aluminum, iron,
          and more. At Scrap Hero, we are committed to an environmentally
          friendly and sustainable business model. We aim to conserve natural
          resources and reduce waste through recycling.
        </p>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ x: isWidthBig, opacity: 0 }}
        animate={{ x: isInView2 ? 0 : isWidthBig, opacity: isInView2 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="row"
      >
        <p className="about-info">
          Scrap Hero was founded in 2023 with the vision of becoming a leader in
          the scrap metal recycling industry. Our company buys, sells, and
          recycles all types of scrap metal, including copper, aluminum, iron,
          and more. At Scrap Hero, we are committed to an environmentally
          friendly and sustainable business model. We aim to conserve natural
          resources and reduce waste through recycling.
        </p>
        <img className="about-image" src={img2} alt="About Us" />
      </motion.div>

      <motion.div
        ref={ref3}
        initial={{ x: -isWidthBig, opacity: 0 }}
        animate={{ x: isInView3 ? 0 : -isWidthBig, opacity: isInView3 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="row"
      >
        <img className="about-image" src={img3} alt="About Us" />
        <p className="about-info">
          Scrap Hero was founded in 2023 with the vision of becoming a leader in
          the scrap metal recycling industry. Our company buys, sells, and
          recycles all types of scrap metal, including copper, aluminum, iron,
          and more. At Scrap Hero, we are committed to an environmentally
          friendly and sustainable business model. We aim to conserve natural
          resources and reduce waste through recycling.
        </p>
      </motion.div>

      <div className="lt-section-breaker"></div>
    </Wrapper>
  );
};
export default About;
