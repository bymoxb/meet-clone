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
      d="M44 34.25 36 26.25V31.8L33 28.8V11Q33 11 33 11Q33 11 33 11H15.2L12.2 8H33Q34.2 8 35.1 8.9Q36 9.8 36 11V21.75L44 13.75ZM42.4 46.65 35 39.25Q34.6 39.6 34.075 39.8Q33.55 40 33 40H7Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 10.4 4.225 9.9Q4.45 9.4 4.75 9L1.95 6.2L4.05 4.1L44.5 44.55ZM7 37H32.75Q32.75 37 32.75 37Q32.75 37 32.75 37L7 11.25Q7 11.25 7 11.25Q7 11.25 7 11.25V37Q7 37 7 37Q7 37 7 37ZM24.2 20Q24.2 20 24.2 20Q24.2 20 24.2 20ZM19.85 24.1Q19.85 24.1 19.85 24.1Q19.85 24.1 19.85 24.1Q19.85 24.1 19.85 24.1Q19.85 24.1 19.85 24.1Q19.85 24.1 19.85 24.1Q19.85 24.1 19.85 24.1Z"
    />
  </svg>
);

export const VideoCamOffIcon = forwardRef(SvgComponent);
