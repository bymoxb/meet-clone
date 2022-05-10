import { forwardRef, Ref, SVGProps } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M24 16q6.3 0 12.05 2.525 5.75 2.525 9.85 7.325.4.5.425 1.1.025.6-.425 1.05l-4.7 4.7q-.4.4-1.15.45-.75.05-1.2-.3l-6.3-4.7v-7.7q-2.1-.8-4.275-1.125Q26.1 19 24 19q-2.1 0-4.275.325-2.175.325-4.275 1.125v7.7l-6.3 4.7q-.6.45-1.225.4Q7.3 33.2 6.8 32.7L2.1 28q-.45-.45-.425-1.05.025-.6.425-1.1 4.1-4.8 9.85-7.325Q17.7 16 24 16ZM8.05 29.75l4.15-3.05v-5q-1.95.95-3.675 2.275Q6.8 25.3 5.2 26.8Zm31.85-.05 2.9-2.9q-1.6-1.65-3.425-2.925Q37.55 22.6 35.55 21.5v4.9Zm-4.35-8.2Zm-23.35.2Z"
    />
  </svg>
);

const Callend = forwardRef(SvgComponent);
export default Callend;
