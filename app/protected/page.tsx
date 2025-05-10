import ApplicationTracker from "@/components/ApplicationTracker";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { createClient } from "@/utils/supabase/server";
import { PlusIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }

  let { data: jobApplications, error } = await supabase
    .from("jobApplications")
    .select("*");

  if (error) {
    console.error("Error fetching jobs:", error);
    return await supabase.auth.signOut();
  }
  console.log(jobApplications);
  return (
    <>
      <Wrapper
        width="constrained"
        height="fullHeight"
        spacing="large"
        className="space-y-16"
      >
        <section className="mx-auto max-w-2xl lg:mx-0 space-y-4">
          <p className="text-sm/7 capitalize font-semibold text-teal-600">
            Get the help you need
          </p>
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Job Applications For 2025
          </h2>
          <p className="text-lg/relaxed tracking-wide text-muted-foreground">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </section>
        <form>
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
            </li> // Replace `title` with your field
          ))}
        </ul>
      </Wrapper>
    </>
  );
}
