import ApplicationTracker from "@/components/ApplicationTracker";
import Wrapper from "@/components/Wrapper";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  let { data: jobApplications, error } = await supabase
    .from("jobApplications")
    .select("*");

  if (error) {
    console.error("Error fetching jobs:", error);
    return <div>Failed to load job applications.</div>;
  }
  console.log(jobApplications);
  return (
    <>
      <main className="">
        <Wrapper width="constrained" height="fullHeight" spacing="large">
          <h1 className="">Private Page</h1>
          <ul>
            {jobApplications?.map((job) => (
              <li key={job.id}>
                <ApplicationTracker
                  applications={job.length - job.id}
                  dateApplied={job.dates}
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
      </main>
    </>
  );
}
