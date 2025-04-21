import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { Card, CardContent } from "./ui/card";

export default function NavigationTop() {
  return (
    <header className="sticky top-0">
      <Card className="rounded-none border-0 backdrop-blur-md bg-white/30">
        <CardContent className="px-0">
          <Wrapper className="py-2">
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
            <ul className="flex items-center gap-4 [&>li]:hover:underline [&>li]:text-muted-foreground">
              <li className="">
                <Link href="/2025">2025</Link>
              </li>
              <li className="">
                <Link href="/2024">2024</Link>
              </li>
            </ul>
          </Wrapper>
        </CardContent>
      </Card>
    </header>
  );
}
