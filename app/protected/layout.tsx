import AuthButton from "@/components/header-auth";
import { Card } from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <header>
          <Card>
            <Wrapper spacing="extraSmall">
              <AuthButton />
            </Wrapper>
          </Card>
        </header>
        {children}
      </body>
    </html>
  );
}
