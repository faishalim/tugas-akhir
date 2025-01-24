import * as React from "react";

const Lamp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#406187"
      fillRule="evenodd"
      d="M3.293 3.293a1 1 0 0 0 0 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1a1 1 0 0 0-1.414 0Zm16 0a1 1 0 1 1 1.414 1.414l-1 1a1 1 0 1 1-1.414-1.414l1-1Zm.414 11 1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 1.414-1.414ZM3.293 16.707a1 1 0 0 1 0-1.414l1-1a1 1 0 0 1 1.414 1.414l-1 1a1 1 0 0 1-1.414 0ZM20.414 11a1 1 0 1 0 0-2H20a1 1 0 0 0 0 2h.414ZM2 10.207a1 1 0 0 0 1 1h.414a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1Zm13.437 4.712a6 6 0 1 0-6.873 0 2.5 2.5 0 0 0 1.438 4.031C10 18.967 10 18.983 10 19a1 1 0 0 0 1 1h2a1 1 0 0 0 .999-1.05 2.5 2.5 0 0 0 1.438-4.031ZM12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2h-1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H12Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Lamp;
