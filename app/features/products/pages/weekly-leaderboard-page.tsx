import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";
import { useParams } from "react-router";

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    leaderboard: [],
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Leaderboard | Your App Name" },
    { name: "description", content: "Weekly product leaderboard" },
  ];
};

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const { year, week } = useParams();
  const { leaderboard } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">
        Week {week}, {year}
      </h1>
      {/* Weekly leaderboard content */}
    </div>
  );
}
