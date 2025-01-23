import {
  Container,
  Title,
  Text,
  Stack,
} from "@mantine/core";



export const CTASection = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden py-20">
 
      {/* Pattern Divider */}
      <div className="relative h-24 overflow-hidden">
      <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z"
            fill="var(--mantine-color-ethiopianGreen-5)"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <Container size="lg" className="py-24 text-center">
        <Stack align="center" gap="xl">
          <Title order={2} className="text-4xl font-bold max-w-2xl">
            Join Ethiopia's Most Exciting Tech Community
          </Title>
          <Text size="xl" className="text-gray-600 max-w-2xl">
            Connect with fellow Ethiopian developers, share your knowledge, and
            be part of our growing tech ecosystem.
          </Text>
         
        </Stack>
      </Container>
    </div>
  );
};
