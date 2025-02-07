import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";

export function loader({ request }: Route.LoaderArgs) {
  return {
    products: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Products | Your App Name" },
    { name: "description", content: "Discover amazing products" },
  ];
};

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id}>Product Card Here</div>
        ))}
      </div>
    </div>
  );
}
