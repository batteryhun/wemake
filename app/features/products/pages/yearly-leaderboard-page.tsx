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
    { title: "Yearly Leaderboard | Your App Name" },
    { name: "description", content: "Yearly product leaderboard" },
  ];
};

export default function YearlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const { year } = useParams();
  const { leaderboard } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard {year}</h1>
      {/* Yearly leaderboard content */}
    </div>
  );
}
