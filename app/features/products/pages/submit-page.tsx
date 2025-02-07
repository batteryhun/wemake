import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | Your App Name" },
    { name: "description", content: "Submit your product" },
  ];
};

export default function SubmitPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { categories } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Your Product</h1>
      <form method="post" className="max-w-2xl">
        {/* Submit form fields */}
      </form>
    </div>
  );
}
