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
      d="M34.3 29.95 32.15 27.8Q33.2 26.5 33.7 24.875Q34.2 23.25 34.2 21.55H37.2Q37.2 23.85 36.45 26Q35.7 28.15 34.3 29.95ZM27.9 23.55 25.25 20.95V9.05Q25.25 8.2 24.65 7.6Q24.05 7 23.2 7Q22.35 7 21.75 7.6Q21.15 8.2 21.15 9.05V16.8L18.15 13.8V9.05Q18.15 6.95 19.625 5.475Q21.1 4 23.2 4Q25.3 4 26.775 5.475Q28.25 6.95 28.25 9.05V21.55Q28.25 21.95 28.175 22.55Q28.1 23.15 27.9 23.55ZM41.35 45.45 29.65 33.75Q28.5 34.3 27.25 34.675Q26 35.05 24.7 35.2V42H21.7V35.2Q16.4 34.65 12.8 30.775Q9.2 26.9 9.2 21.55H12.2Q12.2 26.05 15.425 29.175Q18.65 32.3 23.2 32.3Q24.4 32.3 25.475 32.1Q26.55 31.9 27.65 31.35L1.75 5.5L3.7 3.6L43.45 43.35ZM23.05 18.7Q23.05 18.7 23.05 18.7Q23.05 18.7 23.05 18.7Q23.05 18.7 23.05 18.7Q23.05 18.7 23.05 18.7Z"
    />
  </svg>
);

export const MicOffIcon = forwardRef(SvgComponent);