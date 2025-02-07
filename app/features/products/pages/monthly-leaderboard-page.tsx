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
    { title: "Monthly Leaderboard | Your App Name" },
    { name: "description", content: "Monthly product leaderboard" },
  ];
};

export default function MonthlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const { year, month } = useParams();
  const { leaderboard } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">
        Leaderboard {month}/{year}
      </h1>
      {/* Monthly leaderboard content */}
    </div>
  );
}
