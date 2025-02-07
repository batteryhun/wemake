import type { Route } from "~/types/routes";
import type { MetaFunction } from "@remix-run/react";
import { useParams } from "react-router";

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    category: null,
    products: [],
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Category | Your App Name" },
    { name: "description", content: "Products in this category" },
  ];
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { categoryId } = useParams();
  const { category, products } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Category: {category?.name}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id}>Product Card Here</div>
        ))}
      </div>
    </div>
  );
}
