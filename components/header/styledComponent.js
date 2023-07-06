import Link from 'next/link';
import styled from 'styled-components';

export const DivStyled = styled.div`
  .header-container {
    background-color: #fff;
    text-align: center;
    top: 0;
    right: 0;
    left: 0;
  }
`;
export const H2Styled = styled.h2`
  font-family: 'SVN-Housttely Signature';
  font-weight: normal;
  font-style: normal;
  color: ${(props) => props.color};
  margin-bottom: 5px;
`;
export const H1Styled = styled.h1`
  font-family: 'SVN-North Carossela';
  font-weight: normal;
  font-style: normal;
  color: #960c0c;
  margin-bottom: 0px;
`;

export const HrStyled = styled.hr`
  height: ${(props) => props.height} !important;
  background-color: black;
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  @media (min-width: 576px) {
    width: ${(props) => props.widthSm};
  }
  @media (min-width: 768px) {
    top: ${(props) => props.topMd};
    width: ${(props) => props.widthMd};
  }
  @media (min-width: 992px) {
    width: ${(props) => props.widthLg};
  }
  @media (min-width: 1200px) {
    width: ${(props) => props.widthXl};
  }
  @media (min-width: 1400px) {
    width: ${(props) => props.widthXxl};
  }
`;
export const LinkStyled = styled(Link)`
  font-family: 'Lexend', sans-serif !important;
  font-weight: normal !important;
  font-style: normal !important;
  color: ${(props) => props.color}!important;
  :hover {
    color: ${(props) => props.colorhover}!important;
  }
  :active {
    color: #960c0c !important;
  }
  :focus {
    color: ${(props) => props.colorfocus} !important;
  }
`;
export const InputFieldStyled = styled.input`
  border: none;
  border-bottom: ${(props) => props.borderBottom};
  outline: none;
  border-radius: 0;
  :focus {
    box-shadow: none;
    outline: none;
    border-color: #960c0c;
  }
  :active {
    outline: none;
  }
`;