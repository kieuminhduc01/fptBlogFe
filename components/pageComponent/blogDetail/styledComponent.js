import styled from 'styled-components';

export const DivBlockStyled = styled.div`
  p {
    font-size: 18px;
    text-align: justify;
    font-family: 'Lexend', sans-serif;
    @media (min-width: 576px) {
      font-size: 19px;
    }
    @media (min-width: 768px) {
      font-size: 20px;
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1400px) {
    }
  }
  li {
    font-size: 18px;
    text-align: justify;
    font-family: 'Lexend', sans-serif;
    @media (min-width: 576px) {
      font-size: 19px;
    }
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  img {
    width: 100%;
  }
  pre {
    background-color: rgb(203 203 203 / 55%);
  }
  code {
    margin: 10px 10px 10px 10px;
  }
`;
export const HrStyled=styled.hr`
  height: 2px;

`
export const ButtonTagStyled = styled.button`
  border: 1px solid #930c0c;
  padding: 8px 12px;
  @media (min-width: 576px) {
    padding: 10px 14px;
  }
  @media (min-width: 768px) {
    padding: 12px 16px;
    border: 2px solid #930c0c;
  }
  @media (min-width: 992px) {
    padding: 12px 16px;
    border: 2px solid #930c0c;
  }
  @media (min-width: 1200px) {
    padding: 12px 16px;
    border: 2px solid #930c0c;
  }
  @media (min-width: 1400px) {
    padding: 12px 16px;
    border: 2px solid #930c0c;
  }
`