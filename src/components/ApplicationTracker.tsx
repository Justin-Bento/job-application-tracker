import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface JobPost {
  title: string;
  company: string;
  location: string;
  response: string;
  updates: string;
  offers: string;
  jobURL: string;
  applications: number;
  dateApplied: string;
}

export default function ApplicationTracker({
  applications,
  dateApplied,
  title,
  company,
  location,
  response,
  updates,
  offers,
  jobURL,
}: JobPost) {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 border-foreground/20">
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
        <ul className="flex items-center gap-4 divide-x-2 [&>li]:pr-4 [&>li]:text-xs [&>li]:text-muted-foreground">
          <li>{applications}</li>
          <li>{dateApplied}</li>
        </ul>
        <h2 className="text-lg font-medium tracking-tight text-foreground">
          {title}, <span className="font-normal">{company}</span>
        </h2>
        <ul className="flex items-center gap-4 divide-x-2 [&>li]:pr-4 [&>li]:text-xs [&>li]:text-muted-foreground">
          <li>{location}</li>
          <li>{response}</li>
          <li>{updates}</li>
          <li>{offers || "No Offers"}</li>
          {jobURL == "" ? (
            <li>No Link To Post</li>
          ) : (
            <li className="flex items-center gap-1 hover:underline">
              <ExternalLink className="size-3.5" />
              <Link href={jobURL}>Link To Post</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
