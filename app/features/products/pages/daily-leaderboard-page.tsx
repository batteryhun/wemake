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
    { title: "Daily Leaderboard | Your App Name" },
    { name: "description", content: "Daily product leaderboard" },
  ];
};

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const { year, month, day } = useParams();
  const { leaderboard } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">
        Leaderboard {month}/{day}/{year}
      </h1>
      {/* Daily leaderboard content */}
    </div>
  );
}
