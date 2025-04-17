import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

function JobCard({ className, children }: ComponentProps<"div">) {
  return (
    <Card data-slot="job-card" className={cn("shadow-none", className)}>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
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
