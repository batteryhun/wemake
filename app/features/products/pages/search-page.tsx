import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export function loader({ request }: Route.LoaderArgs) {
  return {
    searchResults: [],
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | Your App Name" },
    { name: "description", content: "Search for products" },
  ];
};

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  const { searchResults } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Search Products</h1>
      <div className="mb-6">{/* Search form */}</div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((product) => (
          <div key={product.id}>Product Card Here</div>
        ))}
      </div>
    </div>
  );
}
