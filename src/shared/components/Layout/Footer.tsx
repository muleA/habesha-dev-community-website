import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandDiscord,
  IconBrandTelegram,
} from "@tabler/icons-react";
import { ActionIcon, Group, Text, Container, Center } from "@mantine/core";
import { Link } from "react-router-dom";
import { APP_CONFIG } from "../../config/constants";
import { Logo } from "../Logo/Logo";



const SOCIAL_LINKS = [
  { icon: IconBrandGithub, link: APP_CONFIG.social.github },
  { icon: IconBrandTwitter, link: APP_CONFIG.social.twitter },
  { icon: IconBrandLinkedin, link: APP_CONFIG.social.linkedin },
  { icon: IconBrandDiscord, link: APP_CONFIG.social.discord },
  { icon: IconBrandTelegram, link: APP_CONFIG.social.telegram },
];

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <Container size="lg" className="py-6">
        <Group justify="space-between" className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Menu Items - Center */}
          <Group className="hidden md:flex gap-6">
          <Center>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <Container size="lg" className="py-4 flex justify-center items-center">
          <Text
            size="sm"
            c="dimmed"
            className="text-center mx-auto"
          >
            © {currentYear} Ethiopian Developers Community. All rights reserved.
          </Text>
        </Container>
      </div>
      </Center>
          </Group>

          {/* Social Icons - Right */}
          <Group gap="xs">
            {SOCIAL_LINKS.map((social) => (
              <ActionIcon
                key={social.link}
                size="md"
                variant="subtle"
                color="ethiopianGreen"
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[var(--mantine-color-ethiopianGreen-1)] dark:hover:bg-[var(--mantine-color-ethiopianGreen-9)] transition-colors"
              >
                <social.icon size={18} stroke={1.5} />
              </ActionIcon>
            ))}
          </Group>
        </Group>
      </Container>

    
 
    </footer>
  );
};
