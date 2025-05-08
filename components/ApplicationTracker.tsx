import React from "react";
import { Card, CardDescription } from "./ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
    <Card className="p-6 shadow-none space-y-2">
      <ul className="flex items-center gap-2 [&>li]:text-xs [&>li]:text-muted-foreground">
        <li>{dateApplied || "YYYY/MM/DD"},</li>
        <li>Application #{applications}</li>
      </ul>

      <h2 className="scroll-m-20 text-xl font-semibold">
        {title || "Job Title"},
      </h2>
      <span className="text-md">{company || "Company Goes Here"}</span>
      <ul className="[&>li]:text-muted-foreground [&>li]:text-xs [&>li]:list-disc ml-6">
        <li>{location}</li>
        <li>{response}</li>
        <li>{updates}</li>
        <li>{offers || "No Offers"}</li>
        {jobURL == null ? (
          <li>No Link To Post</li>
        ) : (
          <li className="flex items-center gap-1.5 hover:underline">
            <Link href={jobURL}>Link To Post</Link>
            <ExternalLink className="size-2.5" />
          </li>
        )}
      </ul>
    </Card>
  );
}
