export const IllustrationSVG = ({
  className,
}: {
  className?: string;
}): JSX.Element => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Shape */}
      <path
        d="M700 300C700 465.685 565.685 600 400 600C234.315 600 100 465.685 100 300C100 134.315 234.315 0 400 0C565.685 0 700 134.315 700 300Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.1"
      />

      {/* Code Window Frame */}
      <rect
        x="250"
        y="150"
        width="300"
        height="250"
        rx="10"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Window Header */}
      <rect
        x="250"
        y="150"
        width="300"
        height="40"
        rx="10"
        fill="url(#paint1_linear)"
      />

      {/* Window Controls */}
      <circle cx="275" cy="170" r="6" fill="#FF5F56" />
      <circle cx="295" cy="170" r="6" fill="#FFBD2E" />
      <circle cx="315" cy="170" r="6" fill="#27C93F" />

      {/* Code Lines */}
      <rect
        x="270"
        y="210"
        width="200"
        height="10"
        rx="5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <rect
        x="270"
        y="240"
        width="150"
        height="10"
        rx="5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <rect
        x="270"
        y="270"
        width="180"
        height="10"
        rx="5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <rect
        x="270"
        y="300"
        width="160"
        height="10"
        rx="5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <rect
        x="270"
        y="330"
        width="190"
        height="10"
        rx="5"
        fill="currentColor"
        fillOpacity="0.1"
      />

      {/* Floating Elements */}
      <path
        d="M180 250L220 280L180 310"
        stroke="url(#paint2_linear)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M620 250L580 280L620 310"
        stroke="url(#paint3_linear)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Gradients Definitions */}
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="100"
          y1="0"
          x2="700"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--tw-gradient-from)" />
          <stop offset="1" stopColor="var(--tw-gradient-to)" />
        </linearGradient>

        <linearGradient
          id="paint1_linear"
          x1="250"
          y1="150"
          x2="550"
          y2="190"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--tw-gradient-from)" />
          <stop offset="1" stopColor="var(--tw-gradient-to)" />
        </linearGradient>

        <linearGradient
          id="paint2_linear"
          x1="180"
          y1="250"
          x2="220"
          y2="310"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--tw-gradient-from)" />
          <stop offset="1" stopColor="var(--tw-gradient-to)" />
        </linearGradient>

        <linearGradient
          id="paint3_linear"
          x1="620"
          y1="250"
          x2="580"
          y2="310"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--tw-gradient-from)" />
          <stop offset="1" stopColor="var(--tw-gradient-to)" />
        </linearGradient>
      </defs>
    </svg>
  );
};
