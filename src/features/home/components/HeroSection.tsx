import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Grid,
  Tooltip,
  Code,
} from "@mantine/core";
import { Link } from "react-router-dom";
import {
  IconRocket,
  IconBrandDiscord,
  IconCode,
  IconUsers,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { APP_CONFIG } from "../../../shared/config/constants";
import { CollaborationIllustration } from "../../../assets/illustrations/Collaboration";

const STATS = [
  {
    value: "20K+",
    label: "Community Members",
    description: "Active developers across Ethiopia",
    icon: IconUsers,
  },
  {
    value: "500+",
    label: "Projects Built",
    description: "Open source contributions",
    icon: IconCode,
  },
  {
    value: "50+",
    label: "Monthly Meetups",
    description: "Both virtual and in-person",
    icon: IconCalendarEvent,
  },
];

const CODE_SNIPPET = `
// Join Ethiopian Developers Community
import { Community } from 'ethiopian-devs';

const developer = new Developer();
Community.join(developer);
`.trim();

const RECOMMENDED_LINKS = [
  { label: "Getting Started", link: "/docs/getting-started" },
  { label: "Latest Projects", link: "/projects" },
  { label: "Tech Events", link: "/events" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-ethiopian-green-50 dark:from-dark-800 dark:to-dark-900 mt-16">
      <Container size="lg" className="relative pt-32 pb-20">
        <Grid align="center" gutter={48}>
          {/* Left Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack>
              {/* Community Badge */}
              <div className="relative">
                <Text
                  className="inline-block px-6 py-2.5 rounded-full border border-ethiopian-green-2 shadow-md"
                  fw={500}
                  style={{
                    color: "var(--mantine-color-ethiopianGreen-7)",
                    backgroundColor: "var(--mantine-color-ethiopianGreen-1)",
                  }}
                >
                  የኢትዮጵያ ዴቨሎፐሮች ማህበረሰብ
                </Text>
                <div
                  className="absolute inset-0 blur-xl opacity-20 bg-gradient-to-r from-ethiopian-green-3 via-ethiopian-yellow-3 to-ethiopian-red-3 rounded-full"
                  style={{ transform: "scale(0.95)" }}
                />
              </div>

              {/* Main Title */}
              <Title className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Build with{" "}
                <Text
                  span
                  variant="gradient"
                  gradient={{
                    from: "var(--mantine-color-ethiopianGreen-6)",
                    to: "var(--mantine-color-ethiopianRed-6)",
                  }}
                  inherit
                >
                  Ethiopian
                </Text>{" "}
                Developers
              </Title>

              {/* Description */}
              <Text size="xl" c="dimmed" className="max-w-xl">
                Join our vibrant community of Ethiopian developers. Learn,
                collaborate, and build innovative solutions together.
              </Text>

              {/* Code Snippet */}
              <Code block className="bg-dark-900 text-gray-100 p-4 rounded-lg max-w-md my-4">
                {CODE_SNIPPET}
              </Code>

              {/* CTA Buttons */}
              <Group justify="start" className="mt-6 space-y-4 sm:space-y-0 sm:flex-row">
                <Button
                  component={Link}
                  to="/posts"
                  size="xl"
                  variant="gradient"
                  gradient={{
                    from: "var(--mantine-color-ethiopianGreen-6)",
                    to: "var(--mantine-color-ethiopianRed-6)",
                  }}
                  leftSection={<IconRocket size={20} />}
                  className="hover:scale-105 transform transition-transform duration-200 shadow-lg"
                >
                  Join Our Community
                </Button>
                <Button
                  component="a"
                  href={APP_CONFIG.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="outline"
                  leftSection={<IconBrandDiscord size={20} />}
                  className="hover:bg-ethiopian-green-50 transition-colors duration-200"
                  style={{
                    borderColor: "var(--mantine-color-ethiopianGreen-6)",
                    color: "var(--mantine-color-ethiopianGreen-7)",
                  }}
                >
                  Join Discord
                </Button>
              </Group>

              {/* Stats Section */}
              <Group
                className="mt-8 flex-row space-x-0 space-y-4 sm:space-y-0 sm:space-x-4"
                style={{ overflowX: "auto" }}
              >
                {STATS.map((stat) => (
                  <Tooltip
                    key={stat.label}
                    label={stat.description}
                    position="top"
                    withArrow
                  >
                    <div className="flex items-center gap-2 transition-transform hover:scale-105">
                      <stat.icon size={24} className="text-ethiopian-green-6" />
                      <div>
                        <Text
                          className="text-2xl font-bold"
                          variant="gradient"
                          gradient={{
                            from: "var(--mantine-color-ethiopianGreen-6)",
                            to: "var(--mantine-color-ethiopianRed-6)",
                          }}
                        >
                          {stat.value}
                        </Text>
                        <Text size="sm" c="dimmed">
                          {stat.label}
                        </Text>
                      </div>
                    </div>
                  </Tooltip>
                ))}
              </Group>

              {/* Recommended Links */}
              <div className="mt-12 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-ethiopian-green-200">
                <Text size="sm" fw={500} c="ethiopianGreen.7" className="mb-3">
                  Recommended for You
                </Text>
                <Group gap="sm">
                  {RECOMMENDED_LINKS.map((item) => (
                    <Button
                      key={item.link}
                      component={Link}
                      to={item.link}
                      variant="light"
                      size="sm"
                      color="ethiopianGreen"
                      className="hover:bg-ethiopian-green-100 transition-all duration-200 hover:scale-105"
                    >
                      {item.label}
                    </Button>
                  ))}
                </Group>
              </div>
            </Stack>
          </Grid.Col>

          {/* Right Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className="relative">
              <CollaborationIllustration className="w-full h-auto max-w-2xl mx-auto" />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
