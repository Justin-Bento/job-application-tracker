import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Wrapper height="fullHeight" spacing="large">
        {children}
      </Wrapper>
      <Footer />
    </>
  );
}
