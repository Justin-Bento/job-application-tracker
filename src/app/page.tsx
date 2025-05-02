import React from "react";
import Wrapper from "@/components/Wrapper";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          Your Applications, Statistics Year Summary:
        </h2>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <li className="col-span-2 sm:col-span-1">
            <Card className="shadow-none">
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
          </li>
          <li className="col-span-2 sm:col-span-1">
            <Card className="shadow-none">
              <CardHeader className="relative">
                <CardDescription>
                  Rejected Applications: Q1 2025
                </CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  #147
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingDownIcon className="size-3" />
                    85%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  No offers this quater <TrendingDownIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Acquisition needs attention
                </div>
              </CardFooter>
            </Card>
          </li>
          <li className="col-span-2 sm:col-span-1">
            <Card className="shadow-none">
              <CardHeader className="relative">
                <CardDescription>Interview Rate</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums capitalize">
                  2/147 interviews
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    +0.013%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Resume improvements aided
                  <TrendingUpIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Engagement exceed targets from last year but it&#39;s still
                  below avarage.
                </div>
              </CardFooter>
            </Card>
          </li>
          <li className="col-span-2 sm:col-span-1">
            <Card className="shadow-none">
              <CardHeader className="relative">
                <CardDescription>Response Rate</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums capitalize">
                  23/147 applications
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    +0.15%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Steady performance <TrendingUpIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Meets growth projections with improvements needed.
                </div>
              </CardFooter>
            </Card>
          </li>
          <li className="col-span-2 text-xl font-semibold">Job Applications</li>
          <li className="col-span-2">
            <Card className="relative isolate shadow-none overflow-hidden">
              <CardContent>
                <Link href="/2025" className="hover:underline">
                  Applications for 2025
                  <span className="absolute inset-0 hover:bg-gray-400/10"></span>
                </Link>
              </CardContent>
            </Card>
          </li>
          <li className="col-span-2">
            <Card className="relative isolate shadow-none overflow-hidden">
              <CardContent>
                <Link href="/2024" className="hover:underline">
                  Applications for 2024
                  <span className="absolute inset-0 hover:bg-gray-400/10"></span>
                </Link>
              </CardContent>
            </Card>
          </li>
        </ul>
      </section>
    </Wrapper>
  );
}
