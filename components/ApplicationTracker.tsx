import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface JobPost {
  applications?: number;
  dateApplied?: string;
  title?: string;
  company?: string;
  location?: string;
  response?: string;
  updates?: number;
  offers?: number;
  jobURL?: string;
}

export default function ApplicationTracker({
  applications = 0,
  dateApplied = "Not specified",
  title = "Untitled position",
  company = "Unknown company",
  location = "Remote",
  response = "No response",
  updates = 0,
  offers = 0,
  jobURL = "",
}: JobPost) {
  // Safely format numbers (handle NaN/undefined)
  const formatNumber = (value: number | undefined): number => {
    if (typeof value !== "number" || isNaN(value)) {
      return 0;
    }
    return value;
  };

  // Format date if provided
  const formatDate = (dateString?: string): string => {
    if (!dateString) return "Not specified";
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 border-foreground/20">
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
        <ul className="flex items-center gap-4 divide-x-2 [&>li]:pr-4 [&>li]:text-xs [&>li]:text-muted-foreground">
          <li>
            {formatNumber(applications)} application
            {applications !== 1 ? "s" : ""}
          </li>
          <li>{formatDate(dateApplied)}</li>
        </ul>

        <h2 className="text-lg font-medium tracking-tight text-foreground">
          {title}, <span className="font-normal">{company}</span>
        </h2>

        <ul className="flex flex-col lg:flex-row lg:items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-200 [&>li]:px-4 [&>li]:py-2 [&>li]:text-xs [&>li]:text-muted-foreground">
          <li>{location}</li>
          <li>{response}</li>
          <li>
            {formatNumber(updates)} update{updates !== 1 ? "s" : ""}
          </li>
          <li>
            {offers ? `${offers} offer${offers !== 1 ? "s" : ""}` : "No offers"}
          </li>

          {jobURL ? (
            <li className="flex items-center gap-1 hover:underline">
              <ExternalLink className="size-3.5" />
              <Link href={jobURL} target="_blank" rel="noopener noreferrer">
                Link To Post
              </Link>
            </li>
          ) : (
            <li>No Link To Post</li>
          )}
        </ul>
      </div>
    </div>
  );
}
