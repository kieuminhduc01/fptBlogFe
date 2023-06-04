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
  .content-container {
    opacity: 1;
    background-color: #fff;
  }
`;
export const H2Styled = styled.h2`
  font-family: 'Lexend', sans-serif;
  font-size: 31px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  letter-spacing: 1px;
  color: #960c0c;
  margin-bottom: 5px;
  margin-top: 53px;
`;
export const H1Styled = styled.h1`
  font-family: 'Lexend', sans-serif;
  font-size: 42px;
  font-weight: normal;
  font-style: normal;
  text-align: right;
  letter-spacing: 3px;
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
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  color: #2c2727;
  :hover {
    color: #960c0c;
  }
`;
export const InputFieldStyled = styled.input`
  border: none;
  border-bottom: 2px solid #707070;
  outline: none;
  border-radius: 0;
  :focus {
    box-shadow: none;
    outline: none;
  }
  :active {
    outline: none;
  }
`;
