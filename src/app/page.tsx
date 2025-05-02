import React from "react";
import Wrapper from "@/components/Wrapper";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function page() {
  return (
    <Wrapper className="my-16 space-y-16">
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
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-pretty text-gray-900 mb-8">
          Your Applications, Sorted by Year:
        </h2>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <li className="col-span-2 sm:col-span-1">
            <Card className="shadow-none">
              <CardContent>
                <p className="">Hello World </p>
              </CardContent>
            </Card>
          </li>
          <li className="col-span-2 sm:col-span-1">
            <Card className="shadow-none">
              <CardContent>
                <p className="">Hello World </p>
              </CardContent>
            </Card>
          </li>
          <li className="col-span-2 sm:col-span-1">
            <Card className="shadow-none">
              <CardContent>
                <p className="">Hello World </p>
              </CardContent>
            </Card>
          </li>
          <li className="col-span-2 sm:col-span-1">
            <Card className="shadow-none">
              <CardContent>
                <p className="">Hello World </p>
              </CardContent>
            </Card>
          </li>
          <li className="col-span-2">
            <Card className="shadow-none">
              <CardContent>
                <p className="">Hello World </p>
              </CardContent>
            </Card>
          </li>
          <li className="col-span-2">
            <Card className="shadow-none">
              <CardContent>
                <p className="">Hello World </p>
              </CardContent>
            </Card>
          </li>
        </ul>
      </section>
    </Wrapper>
  );
}
