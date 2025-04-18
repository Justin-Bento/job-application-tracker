import React from "react";
import ApplicationTracker from "@/components/ApplicationTracker";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
                <ApplicationTracker
                  applications={posts.length - index}
                  dateApplied={post.dates}
                  title={post.title}
                  company={post.company}
                  location={post.location}
                  response={post.response}
                  updates={post.updates}
                  offers={post.offers}
                  jobURL={post.jobURL}
                />
              </li>
            ))}
        </ul>
      </section>
      <Pagination className="mt-16">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
