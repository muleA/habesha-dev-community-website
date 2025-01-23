import { Group, Text } from "@mantine/core";

export const Logo = (): JSX.Element => {
  return (
    <Group gap="xs">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle - Ethiopian Flag Colors */}
        <circle cx="20" cy="20" r="20" fill="url(#ethiopian_gradient)" />

        {/* Stylized HD (ሀበሻ Dev) */}
        <path
          d="M12 12L12 28M12 20H18M18 12V28"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Code Symbol */}
        <path
          d="M24 16L28 20L24 24"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ethiopian Pattern Element */}
        <circle
          cx="20"
          cy="20"
          r="8"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />

        {/* Gradients */}
        <defs>
          <linearGradient
            id="ethiopian_gradient"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#009B3A" /> {/* Green */}
            <stop offset="50%" stopColor="#FEDD00" /> {/* Yellow */}
            <stop offset="100%" stopColor="#EF2118" /> {/* Red */}
          </linearGradient>
        </defs>
      </svg>

      <Text
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: "#009B3A", to: "#FEDD00", deg: 45 }}
      >
        ሀበሻ Dev
      </Text>
    </Group>
  );
};
