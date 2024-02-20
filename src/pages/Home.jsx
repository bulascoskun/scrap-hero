import styled from 'styled-components';

import {
  AboutMini,
  ContactForm,
  Hero,
  PricingMini,
  ProductsMini,
} from '../components';

const Wrapper = styled.section``;

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <AboutMini />
      <div className="section-breaker" />
      <ProductsMini />
      <div className="section-breaker" />
      <PricingMini />
      <div className="section-breaker" />
      <ContactForm />
    </Wrapper>
  );
};
export default Home;
