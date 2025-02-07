import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { TeamCard } from "../components/team-card";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Teams | wemake" },
    { name: "description", content: "Find your next team" },
  ];
};

export default function TeamsPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Teams</h1>
          <p className="text-lg text-muted-foreground">
            Find the perfect team for your next project
          </p>
        </div>
        <Button asChild>
          <Link to="/teams/create">Create Team</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <TeamCard
            key={index}
            id={`team-${index}`}
            username="Poco"
            avatarUrl="https://github.com/apple.png"
            projectDescription="a new social media platform"
            requiredSkills={[
              "React developer",
              "Node.js developer",
              "Typescript developer",
            ]}
          />
        ))}
      </div>
    </div>
  );
}
