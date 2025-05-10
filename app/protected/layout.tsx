import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
