import styled from 'styled-components';
import { tableData } from '../assets/tableData';
import { HeroNotHome, LightTitle, PriceTable } from '../components';

const Wrapper = styled.section`
  .price-tables {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    .price-tables {
      /* margin: 2rem; */
      gap: 4rem;
    }
  }
`;

const PriceList = () => {
  return (
    <Wrapper>
      <HeroNotHome title="Price List" />
      <LightTitle title="Current Prices" />
      <div className="lt-section-breaker"></div>
      <div className="price-tables">
        {tableData.map((tableData, i) => {
          return <PriceTable {...tableData} key={i} />;
        })}
      </div>
      <div className="lt-section-breaker"></div>
    </Wrapper>
  );
};
export default PriceList;
