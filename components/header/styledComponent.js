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
  font-family: 'Lexend', sans-serif;
  font-weight: normal;
  font-style: normal;
  color: ${(props) => props.color};
  margin-bottom: 5px;
`;
export const H1Styled = styled.h1`
  font-family: 'Lexend', sans-serif;
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
`;
export const LinkStyled = styled(Link)`
  font-family: 'Lexend', sans-serif;
  font-weight: normal;
  font-style: normal;
  color: ${(props) => props.color};
  :hover {
    color: ${(props) => props.colorHover};
  }
  :active {
    color: #960c0c;
  }
  :focus {
    color: ${(props) => props.colorFocus};
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
