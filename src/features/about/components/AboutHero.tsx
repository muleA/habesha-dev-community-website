import { FC } from "react";

export const AboutHero: FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Pattern */}
      <path d="M0 0h800v600H0z" fill="url(#ethiopianPattern)" opacity="0.1" />

      {/* Laptop Base */}
      <path
        d="M250 350h300v20c0 11-9 20-20 20H270c-11 0-20-9-20-20v-20z"
        fill="#2C3E50"
      />
      <path d="M200 340h400v10H200z" fill="#34495E" />

      {/* Laptop Screen */}
      <path d="M250 150h300v200H250z" fill="#34495E" />
      <path d="M270 170h260v160H270z" fill="#009B3A" />

      {/* Code on Screen */}
      <g opacity="0.8">
        <path
          d="M290 190h100M290 210h160M290 230h140M290 250h120"
          stroke="#FEDD00"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M290 280h80M290 300h140M290 320h120"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Ethiopian Pattern on Screen */}
      <path
        d="M480 190l20 20-20 20M450 190l-20 20 20 20"
        stroke="#FEDD00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Coffee Cup - Ethiopian Symbol */}
      <path
        d="M520 280c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z"
        fill="#8B4513"
      />
      <path d="M485 280h30" stroke="#5D4037" strokeWidth="2" />
      <path d="M500 270v-10" stroke="#8B4513" strokeWidth="2" />

      {/* Floating Elements */}
      <g className="floating-elements">
        {/* Tech Icons */}
        <circle cx="150" cy="200" r="15" fill="#FEDD00" opacity="0.8" />
        <circle cx="650" cy="200" r="15" fill="#FEDD00" opacity="0.8" />
        <circle cx="180" cy="400" r="12" fill="#009B3A" opacity="0.8" />
        <circle cx="620" cy="400" r="12" fill="#009B3A" opacity="0.8" />

        {/* Connecting Lines */}
        <path
          d="M165 200h75M560 200h75M192 400h48M560 400h48"
          stroke="#FEDD00"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </g>

      {/* Ethiopian Cross Pattern */}
      <g opacity="0.2">
        <path
          d="M100 100h40v40h-40zM660 100h40v40h-40zM100 460h40v40h-40zM660 460h40v40h-40z"
          fill="#009B3A"
        />
      </g>

      {/* Gradients and Patterns */}
      <defs>
        <pattern
          id="ethiopianPattern"
          patternUnits="userSpaceOnUse"
          width="50"
          height="50"
        >
          <path
            d="M25 0L50 12.5v25L25 50 0 37.5v-25L25 0z"
            fill="#009B3A"
            fillOpacity="0.1"
          />
        </pattern>

        <linearGradient
          id="screenGlow"
          x1="270"
          y1="170"
          x2="530"
          y2="330"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#009B3A" />
          <stop offset="1" stopColor="#006B28" />
        </linearGradient>

        {/* Add subtle animation */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            .floating-elements {
              animation: float 3s ease-in-out infinite;
            }
          `}
        </style>
      </defs>
    </svg>
  );
};
