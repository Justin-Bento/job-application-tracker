import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import { Card } from "./ui/card";
import Wrapper from "./Wrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import AuthButton from "./header-auth";

export default function Header() {
  return (
    <header>
      <Card className="py-0 rounded-none border-x-0">
        <Wrapper className="p-2 flex items-center justify-between">
          <div className="flex gap-8 items-center">
            <NextLogo />
            <span className="border-l rotate-45 h-4" />
            <SupabaseLogo />
          </div>
          <AuthButton />
        </Wrapper>
      </Card>
    </header>
  );
}
