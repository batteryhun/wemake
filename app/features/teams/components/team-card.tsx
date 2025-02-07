import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { UserIcon } from "lucide-react";

interface TeamCardProps {
  id: string;
  username: string;
  avatarUrl: string;
  projectDescription: string;
  requiredSkills: string[];
}

export function TeamCard({
  id,
  username,
  avatarUrl,
  projectDescription,
  requiredSkills,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base">
            <Badge
              variant="secondary"
              className="inline-flex gap-1 items-center text-sm"
            >
              <span>@{username}</span>
              <Avatar className="size-5">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>
                  <UserIcon className="size-5" />
                </AvatarFallback>
              </Avatar>
            </Badge>
            <span> is looking for </span>
            {requiredSkills.map((skill) => (
              <Badge key={skill} className="text-xs">
                {skill}
              </Badge>
            ))}
            <span> to build {projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link" className="p-0 text-lg">
            Join team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
