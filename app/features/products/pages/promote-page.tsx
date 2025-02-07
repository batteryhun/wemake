import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export function loader({ request }: Route.LoaderArgs) {
  return {
    promotionPlans: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Your Product | Your App Name" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { promotionPlans } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Promote Your Product</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {promotionPlans.map((plan) => (
          <div key={plan.id}>{/* Promotion plan card */}</div>
        ))}
      </div>
    </div>
  );
}
