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
      d="M40.65 45.2 34.05 38.6Q32.65 39.6 31.025 40.325Q29.4 41.05 27.65 41.45V38.35Q28.8 38 29.875 37.575Q30.95 37.15 31.9 36.45L23.65 28.15V40L13.65 30H5.65V18H13.45L2.45 7L4.6 4.85L42.8 43ZM38.85 33.6 36.7 31.45Q37.7 29.75 38.175 27.85Q38.65 25.95 38.65 23.95Q38.65 18.8 35.65 14.725Q32.65 10.65 27.65 9.55V6.45Q33.85 7.85 37.75 12.725Q41.65 17.6 41.65 23.95Q41.65 26.5 40.95 28.95Q40.25 31.4 38.85 33.6ZM18.6 23.15ZM32.15 26.9 27.65 22.4V15.9Q30 17 31.325 19.2Q32.65 21.4 32.65 24Q32.65 24.75 32.525 25.475Q32.4 26.2 32.15 26.9ZM23.65 18.4 18.45 13.2 23.65 8ZM20.65 32.7V25.2L16.45 21H8.65V27H14.95Z"
    />
  </svg>
);

export const VolOffIcon = forwardRef(SvgComponent);
