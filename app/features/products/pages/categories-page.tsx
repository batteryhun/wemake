import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: [],
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | Your App Name" },
    { name: "description", content: "Browse product categories" },
  ];
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  const { categories } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.id}>Category Card Here</div>
        ))}
      </div>
    </div>
  );
}
