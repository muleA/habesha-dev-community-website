import {
  Container,
  Title,
  Text,
  ThemeIcon,
  Grid,
  Card,
  Group,
  Stack,
  Button,
} from "@mantine/core";
import {
  IconCode,
  IconUsers,
  IconRocket,
  IconHeart,
  IconWorld,
  IconBuildingSkyscraper,
  IconBrain,
  IconDeviceLaptop,
  IconGitBranch,
  IconGlobe,
} from "@tabler/icons-react";
import { APP_CONFIG } from "../../../shared/config/constants";
import { AboutHero } from "./AboutHero";

const stats = [
  {
    value: "20K+",
    label: "Ethiopian Developers",
    description: "Active members across the country",
    icon: IconUsers,
    color: "ethiopianGreen",
  },
  {
    value: "50K+",
    label: "Projects",
    description: "Local solutions developed",
    icon: IconCode,
    color: "ethiopianYellow",
  },
  {
    value: "13+",
    label: "Tech Hubs",
    description: "Regional innovation centers",
    icon: IconBuildingSkyscraper,
    color: "ethiopianRed",
  },
];

const values = [
  {
    icon: IconHeart,
    title: "Community First",
    description:
      "Built by Ethiopian developers, for Ethiopian developers. Supporting each other in our tech journey.",
    color: "ethiopianGreen",
  },
  {
    icon: IconWorld,
    title: "Global Impact",
    description:
      "Connecting Ethiopian talent with global opportunities while celebrating our unique heritage.",
    color: "ethiopianYellow",
  },
  {
    icon: IconRocket,
    title: "Innovation Hub",
    description:
      "Leading Ethiopia's digital transformation through collaborative innovation and learning.",
    color: "ethiopianRed",
  },
];

const features = [
  {
    icon: IconCode,
    title: "Modern Tech Stack",
    description:
      "Build with cutting-edge technologies including React, Node.js, and cloud services.",
    color: "ethiopianGreen",
    bgGradient: "from-ethiopianGreen-50 to-white",
  },
  {
    icon: IconUsers,
    title: "Collaborative Learning",
    description:
      "Join study groups, mentorship programs, and peer programming sessions.",
    color: "ethiopianYellow",
    bgGradient: "from-ethiopianYellow-50 to-white",
  },
  {
    icon: IconGlobe,
    title: "Global Network",
    description:
      "Connect with Ethiopian developers worldwide and access international opportunities.",
    color: "ethiopianRed",
    bgGradient: "from-ethiopianRed-50 to-white",
  },
  {
    icon: IconBrain,
    title: "Skills Development",
    description:
      "Access curated learning paths and resources tailored for Ethiopian developers.",
    color: "ethiopianGreen",
    bgGradient: "from-ethiopianGreen-50 to-white",
  },
  {
    icon: IconGitBranch,
    title: "Open Source",
    description:
      "Contribute to Ethiopian open source projects and build your portfolio.",
    color: "ethiopianYellow",
    bgGradient: "from-ethiopianYellow-50 to-white",
  },
  {
    icon: IconDeviceLaptop,
    title: "Remote Work",
    description:
      "Find remote work opportunities and connect with tech companies.",
    color: "ethiopianRed",
    bgGradient: "from-ethiopianRed-50 to-white",
  },
];

const EthiopianPattern = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      zIndex: 0,
    }}
  >
    <pattern
      id="ethiopianPattern"
      x="0"
      y="0"
      width="40"
      height="40"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M20 0L40 10L40 30L20 40L0 30L0 10L20 0Z"
        fill="currentColor"
        className="text-ethiopian-green-600"
      />
      <path
        d="M20 10L30 15L30 25L20 30L10 25L10 15L20 10Z"
        fill="currentColor"
        className="text-ethiopian-red-600"
      />
    </pattern>
    <rect width="100%" height="100%" fill="url(#ethiopianPattern)" />
  </svg>
);

export const AboutPage = (): JSX.Element => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-ethiopian-green-50 py-32 relative overflow-hidden">
        {/* Background Pattern */}

        <Container size="lg" className="relative">
          <Grid gutter={60} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <div>
                  <Text
                    className="text-ethiopian-green-600 font-bold mb-4"
                    size="xl"
                  >
                    About {APP_CONFIG.brand.name}
                  </Text>
                  <Title className="text-5xl font-bold mb-6" order={1}>
                    Ethiopia's Premier{" "}
                    <Text
                      span
                      variant="gradient"
                      gradient={{
                        from: APP_CONFIG.brand.colors.primary,
                        to: APP_CONFIG.brand.colors.secondary,
                      }}
                      inherit
                    >
                      Developer Community
                    </Text>
                  </Title>
                  <Text size="xl" className="text-gray-600 leading-relaxed">
                    We're building a vibrant community where Ethiopian
                    developers can learn, share knowledge, and create innovative
                    solutions for local and global challenges.
                  </Text>
                  <Group gap="md" mt="xl">
                    <Button
                      size="lg"
                      variant="gradient"
                      gradient={{
                        from: APP_CONFIG.brand.colors.primary,
                        to: APP_CONFIG.brand.colors.secondary,
                      }}
                    >
                      Join Our Community
                    </Button>
                    <Button size="lg" variant="light" color="ethiopianGreen">
                      Learn More
                    </Button>
                  </Group>
                </div>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} className="relative">
              <div className="w-full aspect-square max-w-[600px] mx-auto transform hover:scale-105 transition-transform duration-300">
                <AboutHero />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-ethiopian-yellow-200 rounded-full opacity-20" />
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-ethiopian-green-300 rounded-full opacity-20" />
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {/* Stats Section with Ethiopian Theme */}
      <Container size="lg" className="py-24">
        <Grid gutter={40}>
          {stats.map((stat, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Card
                padding="xl"
                radius="lg"
                className={`h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                           bg-gradient-to-br from-${stat.color}-50 to-white`}
              >
                <Group align="flex-start" className="mb-4">
                  <ThemeIcon
                    size={56}
                    radius="md"
                    variant="gradient"
                    gradient={{
                      from: `var(--mantine-color-${stat.color}-6)`,
                      to: `var(--mantine-color-${stat.color}-4)`,
                    }}
                  >
                    <stat.icon size={30} />
                  </ThemeIcon>
                  <div>
                    <Text
                      size="3rem"
                      fw={700}
                      className={`text-${stat.color}-600`}
                    >
                      {stat.value}
                    </Text>
                    <Text size="xl" fw={600} className="text-gray-800">
                      {stat.label}
                    </Text>
                  </div>
                </Group>
                <Text size="lg" className="text-gray-600">
                  {stat.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* Values Section with Ethiopian Pattern */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        <EthiopianPattern />
        <Container size="lg" className="relative">
          <Title order={2} className="text-4xl font-bold text-center mb-16">
            Our Values
          </Title>
          <Grid>
            {values.map((value, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <Card
                  padding="xl"
                  radius="lg"
                  className="h-full transform transition-all duration-300 hover:shadow-lg
                            bg-white border-t-4"
                  style={{
                    borderColor: `var(--mantine-color-${value.color}-6)`,
                  }}
                >
                  <Stack>
                    <ThemeIcon
                      size={60}
                      radius="md"
                      variant="gradient"
                      gradient={{
                        from: `var(--mantine-color-${value.color}-6)`,
                        to: `var(--mantine-color-${value.color}-4)`,
                      }}
                    >
                      <value.icon size={30} />
                    </ThemeIcon>
                    <Title order={3} className="text-2xl font-bold">
                      {value.title}
                    </Title>
                    <Text size="lg" className="text-gray-600 leading-relaxed">
                      {value.description}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>

      {/* Features Section */}
      <Container size="lg" className="py-24">
        <Title order={2} className="text-4xl font-bold text-center mb-4">
          Platform Features
        </Title>
        <Text
          size="lg"
          c="dimmed"
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          Discover the tools and resources designed to help Ethiopian developers
          thrive in the global tech ecosystem
        </Text>

        <Grid gutter="xl">
          {features.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                padding="xl"
                radius="md"
                className={`h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br ${feature.bgGradient}`}
              >
                <div className="relative">
                  {/* Decorative Background Circle */}
                  <div
                    className={`absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 bg-${feature.color}-200`}
                    style={{ transform: "rotate(15deg)" }}
                  />

                  <ThemeIcon
                    size={60}
                    radius="md"
                    variant="gradient"
                    gradient={{
                      from: `var(--mantine-color-${feature.color}-6)`,
                      to: `var(--mantine-color-${feature.color}-4)`,
                    }}
                    className="mb-4"
                  >
                    <feature.icon size={30} />
                  </ThemeIcon>

                  <Title order={3} className="text-xl font-bold mb-3">
                    {feature.title}
                  </Title>

                  <Text size="md" c="dimmed" className="leading-relaxed">
                    {feature.description}
                  </Text>

                  {/* Interactive Element */}
                  <Button
                    variant="light"
                    color={feature.color}
                    fullWidth
                    mt="xl"
                    className={`hover:bg-${feature.color}-100 transition-colors duration-200`}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Feature Summary */}
        <div className="mt-16 text-center">
          <Button
            size="xl"
            variant="gradient"
            gradient={{
              from: "ethiopianGreen",
              to: "ethiopianRed",
            }}
            className="hover:scale-105 transform transition-all duration-200"
          >
            Explore All Features
          </Button>
        </div>
      </Container>

    
    
    </div>
  );
};
