import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default async function Page() {
  const data = await fetch("http://localhost:3000/api");
  const posts = await data.json();
  return (
    <main className="container mx-auto my-16">
      <section className="space-y-2">
        <h1 className="text-4xl font-semibold leading-snug capitalize">
          Jobs I've Applied to in 2025.
        </h1>
        <p className="max-w-4xl text-xl text-balance">
          Sent out {posts.length} applications.
        </p>
      </section>
      <section className="mt-6">
        <ul className="space-y-6">
          {posts.map((post: any, index: number) => (
            <li key={post.id}>
              <Card className="shadow-none">
                <CardContent className="space-y-4">
                  <p className="text-xs text-muted-foreground">
                    Application #{index + 1}
                  </p>
                  <p className="text-lg">
                    <strong>{post.Title}</strong>,&nbsp;
                    <span className="capitalize">{post.Company}</span>
                  </p>

                  <ul className="flex items-center gap-4 divide-x-2 [&>li]:pr-4 [&>li]:text-sm [&>li]:text-muted-foreground [&>li]:capitalize">
                    <li className="">item 1</li>
                    <li className="">item 1</li>
                    <li className="">item 1</li>
                    <li className="">item 1</li>
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
