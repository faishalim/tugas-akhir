import * as React from "react";

const MCB: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    fillRule="evenodd"
    stroke="#516F91"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.3}
    viewBox="0 0 64 64"
    {...props}
  >
    <path d="M25.5 27.499a1 1 0 0 1 1-1h6c.552 0 1 .613 1 1.166V32.5l.002 6a1 1 0 0 1-1.002 1h-6a1 1 0 0 1-1-1V27.499zM25.5 35.5h8m0-3h-8m7 22a3 3 0 1 0-6 0 3 3 0 1 0 6 0" />
    <path d="M24.528 2.5c-.568 0-1.028.44-1.028.983v57.032a.96.96 0 0 0 .3.696c.193.185.455.289.728.289l9.944-.015c.273 0 .535-.104.728-.289a.96.96 0 0 0 .3-.696V3.468c0-.543-.46-.982-1.028-.983l-9.944.015M23.5 46.5h12m-12-29h12M28.25 53l2.5 2.75" />
    <path d="M30.75 53 28 55.75M32.5 9.5a3 3 0 1 0-6 0 3 3 0 1 0 6 0M28.25 8l2.5 2.75M30.75 8 28 10.75" />
  </svg>
);
export default MCB;
