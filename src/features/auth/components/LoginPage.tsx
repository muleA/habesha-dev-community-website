import {
  Container,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Stack,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../shared/context/AuthContext";
import { useState } from "react";

export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return (
    <Container size={420} py={80}>
      <Title ta="center" mb={30}>
        Welcome back!
      </Title>

      <Paper withBorder shadow="md" p={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" fullWidth mt="xl">
              Sign in
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};
