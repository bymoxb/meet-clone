import { forwardRef, Ref, SVGProps } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 30V18H18L28 8V40L18 30ZM31 32.4V15.55Q33.7 16.4 35.35 18.75Q37 21.1 37 24Q37 26.95 35.35 29.25Q33.7 31.55 31 32.4ZM25 15.6 19.35 21H13V27H19.35L25 32.45ZM18.9 24Z"
    />
  </svg>
);

export const VolOffIcon = forwardRef(SvgComponent);
