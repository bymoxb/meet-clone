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
      d="M28 41.45V38.35Q32.85 36.95 35.925 32.975Q39 29 39 23.95Q39 18.9 35.95 14.9Q32.9 10.9 28 9.55V6.45Q34.2 7.85 38.1 12.725Q42 17.6 42 23.95Q42 30.3 38.1 35.175Q34.2 40.05 28 41.45ZM6 30V18H14L24 8V40L14 30ZM27 32.4V15.55Q29.7 16.4 31.35 18.75Q33 21.1 33 24Q33 26.95 31.35 29.25Q29.7 31.55 27 32.4ZM21 15.6 15.35 21H9V27H15.35L21 32.45ZM16.3 24Z"
    />
  </svg>
);

export const VolIcon = forwardRef(SvgComponent);
