import { Link, type MetaFunction } from "react-router";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-32">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best product made by our community today
          </p>
          <Button variant="link" className="p-0 text-lg" asChild>
            <Link to="/products/leaderboard">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={1254}
            upvotesCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions made by our community
          </p>
          <Button variant="link" className="p-0 text-lg" asChild>
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            id="postId"
            title="What is the best productivity tool?"
            authorName="Poco"
            authorAvatarUrl="https://github.com/apple.png"
            category="Category"
            postedAt="12 hours ago"
          />
        ))}
      </div>
    </div>
  );
}
