import { SVGProps } from 'react';

const CaretLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={22}
      height={38}
      viewBox="0 0 22 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 3L3 19l16 16"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CaretLeft;