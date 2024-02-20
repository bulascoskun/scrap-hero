import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const Loading = () => {
  return (
    <Wrapper>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#b59410"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Wrapper>
  );
};
export default Loading;
