import Link from 'next/link';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  border: 1px solid #930c0c;
  padding: 8px 12px;
  @media (min-width: 576px) {
    padding: 10px 14px;
  }
  @media (min-width: 768px) {
    padding: 12px 16px;
    border: 2px solid #930c0c;
  }
`;
