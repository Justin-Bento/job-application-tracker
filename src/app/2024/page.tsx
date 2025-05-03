import Wrapper from "@/components/Wrapper";
import React from "react";

export default function page() {
  return (
    <Wrapper className="my-16">
      <div className="flex flex-col gap-4">
        <h1 className="order-2 mt-2 text-5xl font-semibold tracking-tight text-foreground">
          Job Search Metrics 2024: Application Tally.
        </h1>
        <p className="order-3 mb-8 mt-4 text-lg text-balance text-muted-foreground sm:text-xl/7">
          Includes relevant details such as job postings, required
          qualifications, and application methods used..
        </p>
        <p className="order-1 text-base/7 font-semibold text-teal-600">
          Applied to # of Jobs.
        </p>
      </div>
    </Wrapper>
  );
}
