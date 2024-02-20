import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  ContactFormPage,
  HeroNotHome,
  LightTitle,
  ContactInfo,
  Loading,
} from '../components';

const Wrapper = styled.section`
  .form-and-info-div {
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 0 auto;

    div {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    .form-and-info-div {
      display: flex;
      flex-direction: column;
      width: calc(100% - 3rem);
      gap: 3rem;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    .form-and-info-div {
      display: flex;
      flex-direction: column;
      width: calc(100% - 3rem);
      gap: 3rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    .form-and-info-div {
      display: flex;
      flex-direction: column;
      width: calc(50%);
      gap: 3rem;
    }
  }
`;

const Contact = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const LazyGoogleMap = React.lazy(() => import('../components/GoogleMap'));

  return (
    <Wrapper>
      <HeroNotHome title="Contact" />
      <LightTitle title="Contact Us" />
      <div className="lt-section-breaker"></div>
      <div className="form-and-info-div">
        <ContactInfo />
        <ContactFormPage />
      </div>
      <Suspense>{showMap ? <LazyGoogleMap /> : <Loading />}</Suspense>
    </Wrapper>
  );
};
export default Contact;
