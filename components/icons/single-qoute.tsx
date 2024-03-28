import { SVGProps } from 'react';

const SingleQoute = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.111 41A9.111 9.111 0 010 31.889C0 28.534 3.036 17.903 9.111 0h4.556L9.11 22.778a9.11 9.11 0 110 18.222zm22.778 0a9.11 9.11 0 01-9.111-9.111c0-3.355 3.036-13.986 9.11-31.889h4.556L31.89 22.778a9.111 9.111 0 010 18.222z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SingleQoute;