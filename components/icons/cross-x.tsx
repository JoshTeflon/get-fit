import { SVGProps } from 'react';

const CrossX = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={17}
      viewBox="0 0 46 17"
      fill="none"
      {...props}
    >
      <path
        d="M1.23 4.785l43.998 6.491M1 11.07l43.993-6.118"
        stroke="currentColor"
        strokeWidth={3.86}
      />
    </svg>
  );
};

export default CrossX;
