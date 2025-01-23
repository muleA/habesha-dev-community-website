import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = (): JSX.Element => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <Footer/>
      </AppShell.Footer>
    </AppShell>
  );
};
