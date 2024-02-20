import styled from 'styled-components';
import Title from './Title';

import Slider from 'react-slick';
import { motion, useInView } from 'framer-motion';

import CarouselCard from './CarouselCard';
import { carouselData } from '../assets/carousel-data';
import { useRef } from 'react';

const Wrapper = styled.section`
  padding: 0 5rem;
  text-align: center;
  max-width: 100%;

  .slider-main {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2rem;

    .image {
      display: none;
    }
  }
`;

const ProductsMini = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: isInView ? 0 : 60, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <Wrapper>
        <Title className="title" title="Scrap Hero Products" />

        {/* SLIDER */}
        <Slider className="slider-main" {...settings}>
          {carouselData.map((item) => {
            const { id, image, info, name } = item;
            return (
              <CarouselCard
                key={id}
                carouselImage={image}
                material={name}
                info={info}
              />
            );
          })}
        </Slider>
      </Wrapper>
    </motion.div>
  );
};
export default ProductsMini;
