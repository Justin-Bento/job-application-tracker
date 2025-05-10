import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Header />
        <Wrapper height="fullHeight" spacing="large">
          {children}
        </Wrapper>
        <Footer />
      </body>
    </html>
  );
}
