import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: var(--color-4);
    font-weight: 400;
  }
`;

const LightTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};
export default LightTitle;
