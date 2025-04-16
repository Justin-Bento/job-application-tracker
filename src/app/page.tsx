import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function page() {
  return (
    <main className="mx-auto container px-4 sm:px-6 mt-16">
      <section className="">
        <p className="text-sm text-muted-foreground">
          Simple. Organized. Stress-Free
        </p>
        <h1 className="text-4xl font-semibold text-pretty text-gray-900">
          Never Lose Track of Your Job Applications Again!
        </h1>
        <p className="mt-2 text-lg/8 text-muted-foreground">
          Looking for a job? Don&#39;t let applications slip through the cracks!
          Job Tracker is your easy-to-use tool.
        </p>
        <ul className="space-y-4 mt-8 text-muted-foreground list-disc ml-12">
          <li>Record every job you apply for (company, role, date).</li>
          <li>Track your progress (applied, interview, offer, rejected).</li>
          <li>Stay on top of deadlines (follow-ups, responses).</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-pretty text-gray-900 mb-8">
          Your Applications, Sorted by Year:
        </h2>
        <ul className="space-y-12">
          <li className="">
            <Card className="relative isolate overflow-hidden shadow-none">
              <CardContent>
                <Link href="/2025" className="text-foreground">
                  2025 Job Applications.
                  <span className=" inset-0 absolute hover:bg-teal-200/40" />
                </Link>
              </CardContent>
            </Card>
          </li>
          <li className="">
            <Card className="relative isolate overflow-hidden shadow-none">
              <CardContent>
                <Link href="/2024" className="text-foreground">
                  2024 Job Applications.
                  <span className=" inset-0 absolute hover:bg-teal-200/40" />
                </Link>
              </CardContent>
            </Card>
          </li>
        </ul>
      </section>
    </main>
  );
}
