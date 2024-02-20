import styled from 'styled-components';

const Wrapper = styled.h1`
  font-size: 2.5rem;
  color: var(--color-5);
  margin-bottom: 2rem;
`;

const Title = ({ title }) => {
  return <Wrapper>{title}</Wrapper>;
};
export default Title;
