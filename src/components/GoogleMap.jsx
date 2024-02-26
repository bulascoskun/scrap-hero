import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3rem;
  height: 400px;

  @media screen and (max-width: 600px) {
    margin-top: 3rem;
    padding: 0;
  }
`;

const GoogleMap = () => {
  return (
    <Wrapper>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Taksim%20Meydan%C4%B1)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </Wrapper>
  );
};
export default GoogleMap;
