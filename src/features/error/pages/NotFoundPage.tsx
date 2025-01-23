import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/providers/routing/routes';

export const NotFoundPage = () => {
  return (
    <Container className="py-32 text-center">
      <Title className="text-9xl font-black text-ethiopian-green-6">404</Title>
      <Text size="xl" fw={500} mt="xl">
        You have found a secret place.
      </Text>
      <Text size="lg" className="text-gray-500 max-w-md mx-auto mt-3">
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.
      </Text>
      <Group justify="center" mt="xl">
        <Button component={Link} to={ROUTES.HOME} size="lg" variant="gradient" gradient={{ from: 'ethiopianGreen', to: 'ethiopianYellow' }}>
          Take me back home
        </Button>
      </Group>
    </Container>
  );
}; 