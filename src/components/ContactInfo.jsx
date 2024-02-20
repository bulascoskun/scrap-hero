import {
  faAddressBook,
  faEnvelope,
  faMobile,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.315) 0px 3px 8px;
  padding: 2rem 1rem;
  margin-right: 2rem;
  width: 45%;
  height: 100%;

  .icon {
    margin-right: 0.6rem;
    cursor: pointer;
    color: var(--color-6);
    font-size: 1.2rem;
    width: 1rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-7);
    }
  }

  h3,
  p {
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
  }

  h3 {
    color: var(--color-3-1);
    font-size: 1.4rem;
  }

  p {
    color: var(--color-3-1);
    font-size: 0.9rem;
  }

  .mobile-phone .icon {
  }

  .email {
    margin-bottom: 0;
  }
`;

const ContactInfo = () => {
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <p className="address">
        <FontAwesomeIcon className="icon" icon={faAddressBook} />
        Bereketzade, Galata Kulesi Sk. NO:3A, 34010 Beyoğlu/İstanbul
      </p>
      <p className="mobile-phone">
        <FontAwesomeIcon className="icon" icon={faMobile} />
        +1 555 555 55 55
      </p>
      <p className="phone">
        <FontAwesomeIcon className="icon" icon={faPhone} />
        +1 222 222 22 22
      </p>
      <p className="email">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        info@borsanmetalhurda.com
      </p>
    </Wrapper>
  );
};
export default ContactInfo;
