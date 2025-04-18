import React from "react";
import {
  ApplicationTracker,
  ApplicationTrackerStatus,
  ApplicationTrackerRole,
  ApplicationTrackerApplications,
} from "@/components/ApplicationTracker";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface JobPost {
  index: number;
  title: string;
  company: string;
  location: string;
  response: string;
  updates: string;
  dates: string;
  offers: string;
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
        <p className="text-base/7 font-semibold text-teal-600">
          Applied to #{posts.length} Jobs.
        </p>
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-foreground">
          Job Search Metrics 2025: Application Tally.
        </h2>
        <p className="mb-8 mt-4 text-lg text-balance text-muted-foreground sm:text-xl/7">
          Includes relevant details such as job postings, required
          qualifications, and application methods used.
        </p>
      </section>
      <section className="mt-6">
        <ul className="space-y-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
          {posts
            .toReversed()
            .slice(0, 20)
            .map((post: JobPost, index: number) => (
              <li key={index}>
                <ApplicationTracker>
                  <ApplicationTrackerApplications>
                    <li>Application #{posts.length - index}</li>
                    <li>{post.dates || "DD/MM/YYY"}</li>
                  </ApplicationTrackerApplications>
                  <ApplicationTrackerRole>
                    {post.title}, {post.company}
                  </ApplicationTrackerRole>
                  <ApplicationTrackerStatus>
                    <li>{post.location}</li>
                    <li>{post.response}</li>
                    <li>{post.updates}</li>
                    <li>{post.offers || "No Offers"}</li>
                    {post.jobURL == "" ? (
                      <li>No Link To Post</li>
                    ) : (
                      <li className="flex items-center gap-1 hover:underline">
                        <ExternalLink className="size-3.5" />
                        <Link href={post.jobURL}>Link To Post</Link>
                      </li>
                    )}
                  </ApplicationTrackerStatus>
                </ApplicationTracker>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
