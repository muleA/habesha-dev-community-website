import {
  Container,
  Title,
  Text,
  Card,
  Avatar,
  Group,
  Stack,
  SimpleGrid,
} from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    name: "አበበ ከበደ",
    amharicQuote:
      "ሀበሻ Dev በኢትዮጵያ ዴቨሎፐሮች መካከል ያለውን ግንኙነት አጠናክሯል። የማህበረሰቡ ድጋፍ እጅግ አስደናቂ ነው።",
    englishQuote:
      "Habesha Dev has strengthened connections between Ethiopian developers. The community support is incredible.",
    role: "Senior Developer",
    company: "Ethiopian Tech Solutions",
    avatar: "https://i.pravatar.cc/150?img=1",
    color: "ethiopianGreen",
  },
  {
    name: "ሳራ ተስፋዬ",
    amharicQuote: "እዚህ ያሉት ሀብቶችና የሜንተርሺፕ እድሎች እንደ ዴቨሎፐር እድገቴን በጣም አግዘውኛል።",
    englishQuote:
      "The resources and mentorship opportunities here have significantly helped my growth as a developer.",
    role: "Frontend Developer",
    company: "Digital Ethiopia",
    avatar: "https://i.pravatar.cc/150?img=2",
    color: "ethiopianYellow",
  },
  {
    name: "ዳዊት አለሙ",
    amharicQuote: "በዚህ ማህበረሰብ አባል መሆን ለትብብርና እድገት በርካታ እድሎችን ፈጥሮልኛል።",
    englishQuote:
      "Being part of this community has created numerous opportunities for collaboration and growth.",
    role: "Tech Lead",
    company: "Addis Software",
    avatar: "https://i.pravatar.cc/150?img=3",
    color: "ethiopianRed",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <div className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Ethiopian Pattern Background */}
      <div className="absolute inset-0 ethiopian-pattern opacity-5" />

      <Container size="lg" className="relative">
        <Stack align="center" mb={50}>
          <Title order={2} className="text-4xl font-bold text-center">
            የማህበረሰባችን ድምፆች
          </Title>
          <Title order={2} className="text-3xl font-bold text-center mb-2">
            Voices of Our Community
          </Title>
          <Text size="xl" c="dimmed" maw={600} ta="center">
            Join thousands of Ethiopian developers who are already part of our
            growing tech ecosystem
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              withBorder
              padding="xl"
              radius="md"
              className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                         border-t-4`}
              style={{
                borderColor: `var(--mantine-color-${testimonial.color}-6)`,
              }}
            >
              <Stack>
                <Group>
                  <Avatar src={testimonial.avatar} size={60} radius="xl" />
                  <div className="flex-grow">
                    <Text fw={700} size="lg">
                      {testimonial.name}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {testimonial.role} at {testimonial.company}
                    </Text>
                  </div>
                </Group>

                <div className="relative">
                  <IconQuote
                    size={30}
                    className={`absolute -top-2 -left-2 opacity-10 text-${testimonial.color}-600`}
                  />
                  <Stack gap="xs">
                    <Text size="md" className="italic leading-relaxed pl-6">
                      {testimonial.amharicQuote}
                    </Text>
                    <Text
                      size="sm"
                      c="dimmed"
                      className="italic leading-relaxed pl-6"
                    >
                      {testimonial.englishQuote}
                    </Text>
                  </Stack>
                </div>

                <div
                  className={`h-1 w-20 mt-4 rounded-full bg-${testimonial.color}-600 opacity-50`}
                />
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-ethiopian-yellow-200 rounded-full opacity-20" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-ethiopian-green-300 rounded-full opacity-20" />
      </Container>
    </div>
  );
};
