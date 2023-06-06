import { memo } from 'react';

function ThreeLineIcon() {
  return (
    <>
      <svg
        width="25"
        height="13"
        viewBox="0 0 25 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="25" height="3" rx="1.5" fill="#615F5F" />
        <rect y="10" width="16" height="3" rx="1.5" fill="#615F5F" />
      </svg>
    </>
  );
}

export default memo(ThreeLineIcon);
