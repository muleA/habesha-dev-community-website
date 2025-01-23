import { Stack } from "@mantine/core";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { CTASection } from "../components/CTASection";

export const HomePage = () => {
  return (
    <Stack gap={0}>
    <HeroSection />
    <FeaturesSection />
    <CTASection />
  </Stack>
  )
};  