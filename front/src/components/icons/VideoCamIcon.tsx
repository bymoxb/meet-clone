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
      d="M7 40Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 9.8 4.9 8.9Q5.8 8 7 8H33Q34.2 8 35.1 8.9Q36 9.8 36 11V21.75L44 13.75V34.25L36 26.25V37Q36 38.2 35.1 39.1Q34.2 40 33 40ZM7 37H33Q33 37 33 37Q33 37 33 37V11Q33 11 33 11Q33 11 33 11H7Q7 11 7 11Q7 11 7 11V37Q7 37 7 37Q7 37 7 37ZM7 37Q7 37 7 37Q7 37 7 37V11Q7 11 7 11Q7 11 7 11Q7 11 7 11Q7 11 7 11V37Q7 37 7 37Q7 37 7 37Z"
    />
  </svg>
);

export const VideoCamIcon = forwardRef(SvgComponent);
