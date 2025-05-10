import ApplicationTracker from "@/components/ApplicationTracker";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Wrapper from "@/components/Wrapper";
import { createClient } from "@/utils/supabase/server";
import { PlusIcon } from "lucide-react";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams?: {
    page?: string;
  };
}

export default async function ProtectedPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }

  // Pagination setup
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 20;
  const from = (currentPage - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  // Fetch paginated data
  let {
    data: jobApplications,
    error,
    count,
  } = await supabase
    .from("jobApplications")
    .select("*", { count: "exact" })
    .range(from, to);

  if (error) {
    console.error("Error fetching jobs:", error);
    return await supabase.auth.signOut();
  }

  const totalPages = Math.ceil((count || 0) / itemsPerPage);

  return (
    <Wrapper className="space-y-8">
      <section className="mx-auto max-w-2xl lg:mx-0 space-y-4">
        <p className="text-sm/7 capitalize font-semibold text-teal-600">
          Get the help you need
        </p>
        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Job Applications For 2025
        </h2>
        <p className="text-lg/relaxed tracking-wide text-muted-foreground">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </section>

      <form className="mt-4 mb-12">
        <Button className="flex flex-row-reverse items-center gap-4">
          <PlusIcon className="size-5" />
          Create New Job
        </Button>
      </form>

      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {jobApplications?.map((job) => (
          <li key={job.id}>
            <ApplicationTracker
              applications={job.id}
              dateApplied={job.dateApplied}
              title={job.title}
              company={job.company}
              location={job.location}
              response={job.response}
              updates={job.updates}
              offers={job.offers}
              jobURL={job.jobURL}
            />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={currentPage > 1 ? `?page=${currentPage - 1}` : "#"}
                className={
                  currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              // Show limited page numbers (max 5)
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href={`?page=${pageNum}`}
                    isActive={currentPage === pageNum}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href={
                  currentPage < totalPages ? `?page=${currentPage + 1}` : "#"
                }
                className={
                  currentPage >= totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </Wrapper>
  );
}
