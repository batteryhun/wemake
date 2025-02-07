import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export function loader({ request }: Route.LoaderArgs) {
  return {
    leaderboard: [],
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboard | Your App Name" },
    { name: "description", content: "Product leaderboards" },
  ];
};

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { leaderboard } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      {/* Leaderboard content */}
    </div>
  );
}
