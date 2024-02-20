import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;

  background-color: var(--color-1);
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error-code {
    font-family: IronMan;
    font-size: 10rem;
    color: var(--color-4);

    span {
      font-family: IronMan;
      color: var(--color-6-1);
    }
  }

  h2 {
    margin-top: -1rem;
    margin-bottom: 1rem;
    color: var(--color-5);
  }

  p {
    margin-bottom: 1rem;
    color: var(--color-4);
    text-align: center;
  }

  .home-link {
    text-decoration: none;
    font-weight: 700;
    color: var(--color-6-1);
    font-size: 1.6rem;
    transition: all 0.2s ease;

    &:hover {
      color: var(--color-6);
    }
  }
`;

const Error = () => {
  return (
    <Wrapper>
      <div className="error-code">
        4<span>0</span>4
      </div>
      <h2>Ohh! Page Not Found</h2>
      <p>We can't seem to find the page you are looking for</p>
      <Link className="home-link" to="/">
        Home
      </Link>
    </Wrapper>
  );
};
export default Error;
