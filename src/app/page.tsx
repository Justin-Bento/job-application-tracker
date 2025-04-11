import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface JobApplication {
  id: string;
  dateApplied: string;
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  jobPostingURL: string;
  applicationMethod: string;
  applicationStatus:
    | "Applied"
    | "Interviewing"
    | "Offer"
    | "Rejected"
    | "Ghosted";
  lastFollowUp: string;
  notes?: string;
}

const jobApplications: JobApplication[] = [
  {
    id: "1",
    dateApplied: "2025-01-15",
    jobTitle: "Frontend Developer",
    companyName: "Ingenious Management Consulting Ltd.",
    jobPostingURL: "https://company.com/job/123",
    applicationMethod: "Company Website",
    applicationStatus: "Rejected",
    companyLocation: "Toronto, ON",
    lastFollowUp: "2025-01-20",
    notes: "No response after initial application",
  },
  {
    id: "2",
    dateApplied: "2025-01-18",
    jobTitle: "Website Developer",
    companyName: "SuperMoney",
    jobPostingURL: "https://company.com/job/456",
    applicationMethod: "LinkedIn",
    applicationStatus: "Rejected",
    companyLocation: "Toronto, ON",
    lastFollowUp: "2025-01-25",
    notes: "Technical interview scheduled for Feb 1",
  },
  {
    id: "3",
    dateApplied: "2025-01-20",
    jobTitle: "Software Engineer",
    companyName: "TechCorp",
    jobPostingURL: "https://company.com/job/789",
    applicationMethod: "Referral",
    applicationStatus: "Rejected",
    companyLocation: "Toronto, ON",
    lastFollowUp: "2025-01-20",
    notes: "Waiting for response",
  },
  {
    id: "4",
    dateApplied: "2025-01-22",
    jobTitle: "Software Developer",
    companyName: "Genesys",
    jobPostingURL: "https://company.com/job/101",
    applicationMethod: "Indeed",
    applicationStatus: "Rejected",
    companyLocation: "Toronto, ON",
    lastFollowUp: "2025-01-25",
    notes: "No response after follow-up",
  },
];

export default function JobTracker() {
  return (
    <section className="container mx-auto mt-12">
      <Card className="shadow-none border-0">
        <CardContent className="px-0">
          <h1 className="text-3xl font-semibold">Job Applications 2025</h1>
        </CardContent>
      </Card>

      <Table>
        <TableCaption>A list of your current job applications.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date Applied</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Follow-Up</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobApplications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>{application.dateApplied}</TableCell>
              <TableCell className="font-medium">
                {application.jobTitle}
              </TableCell>
              <TableCell>{application.companyName}</TableCell>
              <TableCell>{application.companyLocation}</TableCell>
              <TableCell>
                <a
                  href={application.jobPostingURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Job
                </a>
              </TableCell>
              <TableCell>{application.applicationMethod}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-md ${
                    application.applicationStatus === "Applied"
                      ? "bg-blue-100 text-blue-800"
                      : application.applicationStatus === "Interviewing"
                      ? "bg-purple-100 text-purple-800"
                      : application.applicationStatus === "Offer"
                      ? "bg-green-100 text-green-800"
                      : application.applicationStatus === "Rejected"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {application.applicationStatus}
                </span>
              </TableCell>
              <TableCell>{application.lastFollowUp}</TableCell>
              <TableCell className="max-w-xs truncate">
                {application.notes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={8} className="text-center">
              Total Applications: {jobApplications.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
}
