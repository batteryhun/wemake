import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/leaderboard-page";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboard | Wemake" },
    { name: "description", content: "Product leaderboards" },
  ];
};

export default function LeaderboardPage() {
  return (
    <div>
      <Hero
        title="Product Leaderboard"
        description="See the products that are currently trending and popular"
      />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-md font-light text-foreground">
            The best product made by our community today
          </p>
        </div>
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={1254}
            upvotesCount={120}
          />
        ))}
        <Button variant="link" className="self-center text-lg" asChild>
          <Link to="/products/leaderboards/daily">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-md font-light text-foreground">
            The best product made by our community this week
          </p>
        </div>
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={1254}
            upvotesCount={120}
          />
        ))}
        <Button variant="link" className="self-center text-lg" asChild>
          <Link to="/products/leaderboards/weekly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-md font-light text-foreground">
            The best product made by our community this month
          </p>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={1254}
            upvotesCount={120}
          />
        ))}
        <Button variant="link" className="self-center text-lg" asChild>
          <Link to="/products/leaderboards/monthly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-md font-light text-foreground">
            The best product made by our community this year
          </p>
        </div>
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={1254}
            upvotesCount={120}
          />
        ))}
        <Button variant="link" className="self-center text-lg" asChild>
          <Link to="/products/leaderboards/yearly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}
