import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { Card, CardContent } from "./ui/card";

export default function NavigationTop() {
  return (
    <header className="sticky top-0">
      <Card className="rounded-none border-0 backdrop-blur-md bg-white/30">
        <CardContent className="container mx-auto px-0">
          <Wrapper className="pys-2">
            <Link href="/" className="hover:opacity-50">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={100}
                height={38}
                priority
              />
            </Link>
          </Wrapper>
        </CardContent>
      </Card>
    </header>
  );
}
