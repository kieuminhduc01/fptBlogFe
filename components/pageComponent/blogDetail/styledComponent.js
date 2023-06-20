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
    border-radius: 4px;
    padding: 10px;
  }
`;
export const HrStyled = styled.hr`
  height: 2px;
`;
export const ButtonTagStyled = styled.button`
  border: 1px solid #930c0c;
  padding: 6px 8px;
  @media (min-width: 576px) {
    padding: 6px 8px;
  }
  @media (min-width: 768px) {
    padding: 6px 12px;
    border: 2px solid #930c0c;
  }
`;
export const DivInputStyled = styled.div`
  border: 1px solid black;
  border-radius: 20px;
`;
