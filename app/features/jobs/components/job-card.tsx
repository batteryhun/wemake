import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  id: string;
  companyName: string;
  companyLogoUrl: string;
  title: string;
  postedAt: string;
  employmentType: string;
  locationType: string;
  salaryRange: string;
  location: string;
}

export function JobCard({
  id,
  companyName,
  companyLogoUrl,
  title,
  postedAt,
  employmentType,
  locationType,
  salaryRange,
  location,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader>
          <div className="flex items-center justify-start gap-2 mb-4">
            <img
              src={companyLogoUrl}
              alt={`${companyName} Logo`}
              className="size-8 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-sm font-medium">{companyName}</span>
              <span className="text-xs text-muted-foreground">{postedAt}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge variant="outline">{employmentType}</Badge>
          <Badge variant="outline">{locationType}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col items-start gap-2 text-muted-foreground">
            <span className="text-sm font-medium">{salaryRange}</span>
            <span className="text-sm font-medium">{location}</span>
          </div>
          <Button variant="secondary" size="sm">
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
