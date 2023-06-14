import styled from 'styled-components';

export const DivStyled = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    width: 80%;
    padding-bottom: 80%;
  }
  @media (min-width: 992px) {
    width: 70%;
    padding-bottom: 70%;
  }
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
