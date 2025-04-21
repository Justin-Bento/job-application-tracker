import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function page() {
  return (
    <Wrapper className="mt-16 space-y-16">
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
        <div className="grid grid-cols-2 gap-4">
          <Card className="@container/card">
            <CardHeader className="relative">
              <CardDescription>Total Applications 2025</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                #147
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  +12.5%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Trending up this month <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Resume applications sent out the start of 2025
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Wrapper>
  );
}
