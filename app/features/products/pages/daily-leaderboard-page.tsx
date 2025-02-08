import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { date, z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        message: "Invalid params",
      },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject(parsedData);
  if (!date.isValid) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      {
        status: 400,
      }
    );
  }
  if (date > DateTime.now().startOf("day")) {
    throw data(
      {
        error_code: "future_date",
        message: "Future date",
      },
      {
        status: 400,
      }
    );
  }
  return { ...parsedData };
};

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });
  const previousDate = urlDate.minus({ day: 1 });
  const nextDate = urlDate.plus({ day: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("day"));
  return (
    <div>
      <Hero
        title={`The best productsof ${urlDate.toLocaleString(
          DateTime.DATE_MED
        )}`}
      />
      <div className="flex gap-4 justify-between">
        <Button variant="link" asChild>
          <Link
            to={`/products/leaderboards/daily/${previousDate.toFormat(
              "yyyy/MM/dd"
            )}`}
          >
            &larr; {previousDate.toLocaleString(DateTime.DATE_MED)}
          </Link>
        </Button>
        {isToday ? null : (
          <Button variant="link" asChild>
            <Link
              to={`/products/leaderboards/daily/${nextDate.toFormat(
                "yyyy/MM/dd"
              )}`}
            >
              {nextDate.toLocaleString(DateTime.DATE_MED)} &rarr;
            </Link>
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full max-w-screen-md mx-auto">
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
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.error_code} / {error.data.message}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error in leaderboard page</div>;
}
