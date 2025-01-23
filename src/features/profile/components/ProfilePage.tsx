import {
  Container,
  Title,
  Text,
  Paper,
  Avatar,
  Stack,
  Button,
  Grid,
} from "@mantine/core";
import { useAuth } from "@/shared/context/AuthContext";

export const ProfilePage = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <Container size="lg" py={80}>
      <Paper shadow="md" radius="lg" p="xl">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="center" gap="md">
              <Avatar src={user?.avatar} size={200} radius={100} />
              <Title order={2}>{user?.name}</Title>
              <Text c="dimmed">{user?.email}</Text>
              <Button variant="light">Edit Profile</Button>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="xl">
              <Paper withBorder p="md" radius="md">
                <Title order={3} mb="md">
                  Activity
                </Title>
                <Text>Recent activity will be displayed here</Text>
              </Paper>

              <Paper withBorder p="md" radius="md">
                <Title order={3} mb="md">
                  Contributions
                </Title>
                <Text>Your contributions will be displayed here</Text>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};
