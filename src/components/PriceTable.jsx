import styled from 'styled-components';

const Wrapper = styled.div`
  .table-header {
    background-color: var(--color-3);
    padding: 10px;
    font-weight: bold;
    background-color: var(--color-4);
    color: var(--color-8);
  }

  .product-name {
    font-weight: 700;
  }

  .table-header-date {
    margin-right: 0.5rem;
  }
  .table-header-name {
    font-weight: 400;
  }

  .table-content {
    .row-first {
      display: flex;
      justify-content: space-between;
      background-color: var(--color-3);
      color: var(--color-1);
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }

    .row-others {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        color: var(--color-1);
        background-color: var(--color-4);
      }
    }

    span {
      flex: 1;
      min-width: 200px;
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    span {
      flex: 1;
      min-width: 100px !important;
      text-align: center;
    }
  }
`;

const PriceTable = ({ name, date, productTypesAndPrices }) => {
  return (
    <Wrapper>
      <div className="table-header">
        <span className="table-header-date">{date}</span>
        <span className="table-header-name">{name} Scrap Prices</span>
      </div>
      <div className="table-content">
        <div className="row-first">
          <span className="product-name">Product Name</span>
          <span className="product-name">Price per kg ($)</span>
        </div>
        {productTypesAndPrices.map((arr, i) => {
          return (
            <div key={i} className="row-others">
              <span className="product-name">{arr[0]}</span>
              <span>{arr[1]}</span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default PriceTable;
