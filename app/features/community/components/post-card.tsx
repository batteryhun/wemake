import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/common/components/ui/card";

interface PostCardProps {
  id: string;
  title: string;
  authorName: string;
  authorAvatarUrl?: string;
  category: string;
  postedAt: string;
}

export function PostCard({
  id,
  title,
  authorName,
  authorAvatarUrl,
  category,
  postedAt,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-10">
            <AvatarImage src={authorAvatarUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span>{authorName}</span>
              <span>|</span>
              <span>{category}</span>
              <span>|</span>
              <span>{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            <Link to={`/community/${id}`}>Reply &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
