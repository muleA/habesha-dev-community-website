import { Footer } from "../../../shared/components/Layout/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Other components */}
      {children}
      <Footer />
    </>
  );
};
