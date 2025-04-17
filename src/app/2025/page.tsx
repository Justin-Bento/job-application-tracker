import Link from "next/link";
import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface JobPost {
  index: number;
  Title: string;
  Company: string;
  Location: string;
  Response: string;
  Updates: string;
  Offers: string;
  jobURL: string;
}
export default async function Page() {
  const data = await fetch(
    "https://job-application-tracker-smoky-sigma.vercel.app/api"
  );
  const posts = await data.json();
  return (
    <main className="container mx-auto my-16">
      <section className="space-y-2">
        <h1 className="text-4xl font-semibold leading-snug capitalize">
          Jobs I&#39;ve Applied to in 2025.
        </h1>
        <p className="max-w-4xl text-xl text-balance">
          Sent out {posts.length} applications.
        </p>
      </section>
      <section className="mt-6">
        <ul className="space-y-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
          {posts.toReversed().map((post: JobPost, index: number) => (
            <li key={index}>
              <Card className="shadow-none">
                <CardContent className="space-y-4">
                  <ul className="flex items-center gap-4 divide-x-2 [&>li]:pr-4 [&>li]:text-xs [&>li]:text-muted-foreground">
                    <li className="">Application #{posts.length - index}</li>
                    <li className="">DD/MM/YYY</li>
                  </ul>
                  <p className="text-lg">
                    <strong>{post.Title}</strong>,&nbsp;
                    <span className="capitalize">{post.Company}</span>
                  </p>

                  <ul className="flex items-center gap-4 divide-x-2 [&>li]:pr-4 [&>li]:text-sm [&>li]:text-muted-foreground [&>li]:capitalize">
                    <li>{post.Location}</li>
                    <li>{post.Response}</li>
                    <li>{post.Updates}</li>
                    <li>{post.Offers || "No Offers"}</li>
                    {post.jobURL == "" ? (
                      <li>No Link To Post</li>
                    ) : (
                      <li className="flex items-center gap-1 hover:underline">
                        <ExternalLink className="size-3.5" />
                        <Link href={post.jobURL}>Link To Post</Link>
                      </li>
                    )}
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
