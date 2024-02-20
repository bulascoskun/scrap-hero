import styled from 'styled-components';
import Title from './Title';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    gap: 20px;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .row input {
    width: 47%;
  }

  input,
  textarea {
    border: 1px solid lightgray;
    padding: 0.6rem;
  }

  button {
    padding: 0.7rem;
    font-size: 1.2rem;
    width: 35%;
    align-self: flex-end;
    cursor: pointer;
    font-weight: 700;
    color: var(--color-7);
    background-color: var(--color-4);
    letter-spacing: 3px;
    border: none;
    border-radius: 6px;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-5);
      color: var(--color-7);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <Wrapper>
        <Title title="Contact Us" />
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input
              placeholder="Name Surname"
              type="text"
              id="name"
              name="name"
              required
            />

            <input
              placeholder="Email Address"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <input
            placeholder="Subject"
            type="text"
            id="subject"
            name="subject"
            required
          />

          <textarea
            placeholder="Your Message"
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>

          <button type="submit">SEND</button>
        </form>
      </Wrapper>
    </motion.div>
  );
};
export default ContactForm;
