import {
  Container,
  Card,
  Text,
  Title,
  ThemeIcon,
  rem,
  Grid,
  Stack,
} from "@mantine/core";
import {
  IconUsers,
  IconBook,
  IconCode,
  IconRocket,
  IconBrandGithub,
  IconMessages,
} from "@tabler/icons-react";
import { APP_CONFIG } from "../../../shared/config/constants";

const features = [
  {
    icon: IconUsers,
    title: "Ethiopian Tech Community",
    description:
      "Connect with local developers across Ethiopia. Share experiences and grow together in our supportive Habesha tech environment.",
    color: "ethiopianGreen",
  },
  {
    icon: IconBook,
    title: "Local Resources",
    description:
      "Access tutorials and learning materials in both English and Amharic, created by Ethiopian developers for Ethiopian developers.",
    color: "ethiopianYellow",
  },
  {
    icon: IconCode,
    title: "Code Reviews",
    description:
      "Get feedback on your code from experienced Ethiopian developers. Learn industry best practices and improve your skills.",
    color: "ethiopianRed",
  },
  {
    icon: IconRocket,
    title: "Local Projects",
    description:
      "Collaborate on projects solving Ethiopian challenges. Build solutions that matter to our community.",
    color: "ethiopianGreen",
  },
  {
    icon: IconBrandGithub,
    title: "Open Source",
    description:
      "Contribute to Ethiopian open source projects. Help build the foundation of our local tech ecosystem.",
    color: "ethiopianYellow",
  },
  {
    icon: IconMessages,
    title: "Tech Meetups",
    description:
      "Join local tech events, coding sessions, and discussions with Ethiopian tech leaders and innovators.",
    color: "ethiopianRed",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden bg-gray-50 py-20">
      <div className="absolute inset-0 ethiopian-pattern opacity-5" />
      <Container size="lg" className="relative">
        <Stack align="center" mb={50}>
          <Title
            order={2}
            size="h1"
            ta="center"
            className="text-4xl md:text-5xl font-bold"
          >
            Everything you need to{" "}
            <Text
              span
              variant="gradient"
              gradient={{
                from: APP_CONFIG.brand.colors.primary,
                to: APP_CONFIG.brand.colors.secondary,
              }}
              inherit
            >
              grow as a developer
            </Text>
          </Title>
          <Text size="xl" c="dimmed" maw={600} ta="center">
            Join Ethiopia's largest developer community and access the resources
            you need to succeed
          </Text>
        </Stack>

        <Grid gutter={{ base: "md", sm: "xl" }}>
          {features.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                shadow="sm"
                padding="xl"
                radius="md"
                h="100%"
                className={`transform transition-all duration-300 hover:scale-105
                           border-t-4 hover:shadow-lg`}
                style={{
                  borderColor: `var(--mantine-color-${feature.color}-6)`,
                }}
              >
                <Stack>
                  <ThemeIcon
                    size={60}
                    radius="md"
                    variant="gradient"
                    gradient={{
                      from: `var(--mantine-color-${feature.color}-6)`,
                      to: `var(--mantine-color-${feature.color}-4)`,
                    }}
                  >
                    <feature.icon style={{ width: rem(30), height: rem(30) }} />
                  </ThemeIcon>
                  <Title order={3} fw={600} className="text-xl">
                    {feature.title}
                  </Title>
                  <Text size="md" c="dimmed" className="leading-relaxed">
                    {feature.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
