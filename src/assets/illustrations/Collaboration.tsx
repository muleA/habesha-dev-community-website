import { SVGProps } from 'react';

export const CollaborationIllustration = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background Circle */}
      <circle
        cx="400"
        cy="300"
        r="250"
        fill="var(--mantine-color-ethiopianGreen-0)"
        opacity="0.5"
      />

      {/* People Group */}
      <g transform="translate(250, 150)">
        {/* Person 1 with Laptop - Left */}
        <g transform="translate(0, 0)">
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="var(--mantine-color-ethiopianGreen-6)"
          />
          <path
            d="M60 120C26.9 120 0 146.9 0 180H120C120 146.9 93.1 120 60 120Z"
            fill="var(--mantine-color-ethiopianGreen-6)"
          />
          {/* Laptop */}
          <rect
            x="20"
            y="90"
            width="80"
            height="50"
            rx="4"
            fill="var(--mantine-color-dark-4)"
          />
          <rect
            x="15"
            y="135"
            width="90"
            height="5"
            rx="2"
            fill="var(--mantine-color-dark-4)"
          />
        </g>

        {/* Person 2 with Code - Center */}
        <g transform="translate(120, -30)">
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="var(--mantine-color-ethiopianYellow-6)"
          />
          <path
            d="M60 120C26.9 120 0 146.9 0 180H120C120 146.9 93.1 120 60 120Z"
            fill="var(--mantine-color-ethiopianYellow-6)"
          />
          {/* Code Window */}
          <rect
            x="20"
            y="70"
            width="80"
            height="60"
            rx="4"
            fill="var(--mantine-color-dark-4)"
          />
          {/* Code Lines */}
          <path
            d="M30 85H70M30 95H60M30 105H65"
            stroke="var(--mantine-color-ethiopianGreen-2)"
            strokeWidth="2"
          />
        </g>

        {/* Person 3 with Monitor - Right */}
        <g transform="translate(240, 0)">
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="var(--mantine-color-ethiopianRed-6)"
          />
          <path
            d="M60 120C26.9 120 0 146.9 0 180H120C120 146.9 93.1 120 60 120Z"
            fill="var(--mantine-color-ethiopianRed-6)"
          />
          {/* Monitor */}
          <rect
            x="20"
            y="80"
            width="80"
            height="60"
            rx="4"
            fill="var(--mantine-color-dark-4)"
          />
          <rect
            x="45"
            y="140"
            width="30"
            height="10"
            fill="var(--mantine-color-dark-4)"
          />
        </g>

        {/* Connection Lines with Data Flow */}
        <path
          d="M100 80 L180 50"
          stroke="var(--mantine-color-ethiopianGreen-6)"
          strokeWidth="4"
          strokeDasharray="8 8"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;16"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M240 80 L180 50"
          stroke="var(--mantine-color-ethiopianGreen-6)"
          strokeWidth="4"
          strokeDasharray="8 8"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;16"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>

        {/* Code Symbols */}
        <g transform="translate(140, 100)">
          <rect
            x="0"
            y="0"
            width="40"
            height="40"
            rx="8"
            fill="var(--mantine-color-ethiopianGreen-2)"
          />
          <path
            d="M10 20L20 25L10 30M30 20L20 25L30 30"
            stroke="var(--mantine-color-ethiopianGreen-6)"
            strokeWidth="2"
          />
        </g>

        {/* Floating Tech Icons */}
        <g transform="translate(200, 80)">
          {/* Git Branch Symbol */}
          <circle cx="15" cy="15" r="5" fill="var(--mantine-color-ethiopianYellow-2)" />
          <path
            d="M15 20V30M15 25H25V15"
            stroke="var(--mantine-color-ethiopianYellow-2)"
            strokeWidth="2"
          />
          {/* Code Brackets */}
          <path
            d="M35 10L45 20L35 30M55 10L45 20L55 30"
            stroke="var(--mantine-color-ethiopianYellow-2)"
            strokeWidth="2"
          />
        </g>
      </g>

      {/* Decorative Tech Elements */}
      <circle
        cx="150"
        cy="150"
        r="10"
        fill="var(--mantine-color-ethiopianRed-2)"
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="650"
        cy="450"
        r="10"
        fill="var(--mantine-color-ethiopianYellow-2)"
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
      <path
        d="M700 150L720 150M710 140L710 160"
        stroke="var(--mantine-color-ethiopianGreen-2)"
        strokeWidth="2"
      />
      <path
        d="M100 450L120 470L100 490"
        stroke="var(--mantine-color-ethiopianGreen-2)"
        strokeWidth="2"
      />
    </svg>
  );
}; 