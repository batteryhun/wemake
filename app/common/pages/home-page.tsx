import { Link, type MetaFunction } from "react-router";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import type { Route } from "./+types/home-page";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export const loader = () => {
  return {
    hello: "world",
    hello2: true,
  };
};

export default function HomePage({ loaderData }: Route.ComponentProps) {
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
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGpt
          </h2>
          <p className="text-xl font-light text-foreground">
            Find the best ideas for your next project
          </p>
          <Button variant="link" className="p-0 text-lg" asChild>
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            id="ideaId"
            title="Cheezone can be K-yelp?"
            description="Cheezone is a platform that allows you to find the best products and services in your area."
            viewCount={1234}
            postedAt="3 hours ago"
            likeCount={index % 3 === 0 ? 10 : 0}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Job
          </h2>
          <p className="text-xl font-light text-foreground">
            Find the best jobs for you
          </p>
          <Button variant="link" className="p-0 text-lg" asChild>
            <Link to="/community">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <JobCard
            id="jobId"
            companyName="Apple"
            companyLogoUrl="https://github.com/apple.png"
            title="Software Engineer"
            postedAt="12 hours ago"
            employmentType="Full-time"
            locationType="Remote"
            salaryRange="$100,000 - $120,000"
            location="San Francisco, CA"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a Team
          </h2>
          <p className="text-xl font-light text-foreground">
            Find the best team for your next project
          </p>
          <Button variant="link" className="p-0 text-lg" asChild>
            <Link to="/community">Explore all team &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <TeamCard
            id="teamId"
            username="Poco"
            avatarUrl="https://github.com/apple.png"
            projectDescription="a new social media platform"
            requiredSkills={[
              "React developer",
              "Node.js developer",
              "Typescript developer",
            ]}
          />
        ))}
      </div>
    </div>
  );
}
