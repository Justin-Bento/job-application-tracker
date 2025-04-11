import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function NavigationTop() {
  return (
    <footer>
      <Card className="rounded-none border-0">
        <CardContent className="w-screen container mx-auto px-0">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={38}
            priority
          />
        </CardContent>
      </Card>
    </footer>
  );
}
