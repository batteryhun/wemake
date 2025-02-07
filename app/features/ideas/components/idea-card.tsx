import { Link } from "react-router";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  viewCount: number;
  postedAt: string;
  likeCount: number;
  claimed: boolean;
}

export function IdeaCard({
  id,
  title,
  description,
  viewCount,
  postedAt,
  likeCount,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${id}`}>
          <CardTitle>
            <span className={cn(claimed ? "bg-foreground" : " text-xl")}>
              {title}
            </span>
            <p
              className={cn(
                claimed
                  ? "bg-foreground text-sm"
                  : " text-sm text-muted-foreground"
              )}
            >
              {description}
            </p>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 text-sm">
          <EyeIcon className="size-4" />
          <span className="text-xs font-semibold text-foreground">
            {viewCount}
          </span>
          <DotIcon className="size-4" />
          <span className="text-xs font-semibold text-foreground">
            {postedAt}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" className="p-2 text-sm">
          <HeartIcon className="size-4" />
          <span className="text-sm font-light">{likeCount}</span>
        </Button>

        {!claimed ? (
          <Button className="px-4 text-sm" asChild>
            <Link to={`/ideas/${id}/claim`}>Claim idea now</Link>
          </Button>
        ) : (
          <Button className="px-4 text-sm" variant="secondary" disabled>
            <LockIcon className="size-4" />
            Claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
