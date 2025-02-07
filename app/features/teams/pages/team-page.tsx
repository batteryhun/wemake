import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types";

export function loader({ params }: Route.LoaderArgs) {
  return {
    team: {
      id: params.teamId,
      username: "Poco",
      avatarUrl: "https://github.com/apple.png",
      projectDescription: "a new social media platform",
      requiredSkills: [
        "React developer",
        "Node.js developer",
        "Typescript developer",
      ],
    },
  };
}

export default function TeamPage({ loaderData }: Route.ComponentProps) {
  const { team } = loaderData;

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Team {team.username}</h1>
          <p className="text-lg text-muted-foreground">
            {team.projectDescription}
          </p>
        </div>
        <div className="space-x-4">
          <Button variant="outline" asChild>
            <Link to={`/teams/${team.id}/edit`}>Edit Team</Link>
          </Button>
          <Button asChild>
            <Link to={`/teams/${team.id}/join`}>Join Team</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {team.requiredSkills.map((skill) => (
              <div key={skill} className="px-3 py-1 bg-secondary rounded-full">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
