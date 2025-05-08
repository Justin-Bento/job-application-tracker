import React from "react";
import { Card, CardDescription } from "./ui/card";
import Link from "next/link";

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
      <span className="flex flex-col-reverse">
        <h2 className="flex flex-col scroll-m-20 text-lg font-semibold">
          {title || "Job Title"},
          <span className="text-sm font-normal">
            {company || "Company Goes Here"}
          </span>
        </h2>
        <p className="text-xs text-muted-foreground">
          Application #{applications}
        </p>
      </span>
      <p className="text-xs text-muted-foreground">
        Applied: {dateApplied || "YYYY/MM/DD"},
      </p>

      <ul className="[&>li]:text-muted-foreground [&>li]:text-xs [&>li]:list-disc ml-6">
        <li>{location}</li>
        <li>{response}</li>
        <li>{updates}</li>
        <li>{offers || "No Offers"}</li>
        <li>
          {jobURL == null ? (
            <>No Link To Post</>
          ) : (
            <>
              <Link href={jobURL}>Link To Post</Link>
            </>
          )}
        </li>
      </ul>
    </Card>
  );
}
