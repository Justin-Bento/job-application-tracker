import { cn } from "@/lib/utils";

function JobCard({ className, children }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-none",
        className
      )}
    >
      <div data-slot="card-content" className="p-10 space-y-4">
        {children}
      </div>
    </div>
  );
}

function JobCardApplications({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="job-card-title"
      className={cn(
        "flex items-center gap-4 divide-x-2 [&>li]:pr-4 [&>li]:text-xs [&>li]:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function JobCardRole({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h2
      data-slot="job-card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}
function JobCardStatus({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="job-card-title"
      className={cn(
        "flex items-center gap-4 divide-x-2 [&>li]:pr-4 [&>li]:text-xs [&>li]:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export { JobCard, JobCardApplications, JobCardRole, JobCardStatus };
