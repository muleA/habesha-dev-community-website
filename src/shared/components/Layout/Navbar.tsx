import {
  Group,
  Button,
  Box,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Container,
  Menu,
  Avatar,
  Burger,
  Drawer,
} from "@mantine/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IconSun, IconMoon, IconUser, IconLogout } from "@tabler/icons-react";
import { useAuth } from "@/shared/context/AuthContext";
import { Logo } from "@/shared/components/Logo/Logo";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Posts", path: "/posts" },
];

export const Navbar = (): JSX.Element => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActiveRoute = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Box
      py="md"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white border-b border-gray-200"
    >
      <Container size="lg">
        <Group justify="space-between" align="center">
          {/* Logo */}
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          <Group>
            

          {/* Desktop Navigation Links */}
          <Group className="hidden md:flex space-x-4">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                variant={isActiveRoute(item.path) ? "filled" : "subtle"}
                color="ethiopianGreen"
                className={`transition-all duration-200 ${
                  isActiveRoute(item.path)
                    ? "bg-ethiopian-green-6 text-white"
                    : "hover:bg-ethiopian-green-1"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </Group>

          {/* Theme Toggle */}
          <ActionIcon
            variant="subtle"
            onClick={() => toggleColorScheme()}
            size="lg"
            color="ethiopianGreen"
            aria-label="Toggle color scheme"
            className="hover:bg-ethiopian-green-1 transition-colors"
          >
            {colorScheme === "dark" ? (
              <IconSun size={20} />
            ) : (
              <IconMoon size={20} />
            )}
          </ActionIcon>

          {/* Authentication Section */}
          {isAuthenticated ? (
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Group
                  gap="xs"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Avatar src={user?.avatar} radius="xl" size="md" />
                  <Text size="sm" fw={500}>
                    {user?.name}
                  </Text>
                </Group>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  leftSection={<IconUser size={14} />}
                  component={Link}
                  to="/profile"
                  className={isActiveRoute("/profile") ? "bg-ethiopian-green-1" : ""}
                >
                  Profile
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconLogout size={14} />}
                  onClick={handleLogout}
                  color="red"
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button
              component={Link}
              to="/login"
              variant="gradient"
              gradient={{
                from: "var(--mantine-color-ethiopianGreen-6)",
                to: "var(--mantine-color-ethiopianYellow-6)",
              }}
              className="hover:scale-105 transition-transform"
            >
              Log in
            </Button>
          )}

  {/* Mobile Navigation Toggle */}
  <Burger
  hiddenFrom="md"
    opened={mobileMenuOpened}
    onClick={() => setMobileMenuOpened((prev) => !prev)}
  />

        </Group>
        </Group>

      </Container>

      {/* Mobile Drawer Menu */}
    {/* Mobile Drawer Menu */}
{/* Mobile Drawer Menu */}
<Drawer
  opened={mobileMenuOpened}
  onClose={() => setMobileMenuOpened(false)}
  padding="md"
  size="xs"
  className="md:hidden"
>
  <Group flex="column" gap="md" className="w-full">
    {/* Navigation Items */}
    {NAV_ITEMS.map((item) => (
      <Button
        key={item.path}
        component={Link}
        to={item.path}
        variant={isActiveRoute(item.path) ? "filled" : "subtle"}
        color="ethiopianGreen"
        fullWidth
        onClick={() => setMobileMenuOpened(false)}
        className="text-left"
      >
        {item.label}
      </Button>
    ))}

  
  </Group>
</Drawer>


    </Box>
  );
};
