import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import { Card } from "./ui/card";
import Wrapper from "./Wrapper";
import { SubmitButton } from "./submit-button";

export default function Header() {
  return (
    <header>
      <Card className="py-0">
        <Wrapper className="p-2 flex items-center justify-between">
          <div className="flex gap-8 items-center">
            <NextLogo />
            <span className="border-l rotate-45 h-4" />
            <SupabaseLogo />
          </div>
          <SubmitButton variant="secondary">Login To Job Tracker</SubmitButton>
        </Wrapper>
      </Card>
    </header>
  );
}
