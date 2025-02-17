import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export function ProductPagination({ totalPages }: { totalPages: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  if (isNaN(page) || page < 1) {
    return null;
  }
  const onClick = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return (
    <Pagination className="mt-3">
      <PaginationContent>
        {page === 1 ? null : (
          <>
            <PaginationItem>
              <PaginationPrevious
                to={`?page=${page - 1}`}
                onClick={(event) => {
                  event.preventDefault();
                  onClick(page - 1);
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                to={`?page=${page - 1}`}
                onClick={(event) => {
                  event.preventDefault();
                  onClick(page - 1);
                }}
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink
            to={`?page=${page}`}
            onClick={(event) => {
              event.preventDefault();
              onClick(page);
            }}
            isActive
          >
            {page}
          </PaginationLink>
        </PaginationItem>
        {page === totalPages ? null : (
          <>
            <PaginationItem>
              <PaginationLink
                to={`?page=${page + 1}`}
                onClick={(event) => {
                  event.preventDefault();
                  onClick(page + 1);
                }}
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
            {page + 1 === totalPages ? null : (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                to={`?page=${page + 1}`}
                onClick={(event) => {
                  event.preventDefault();
                  onClick(page + 1);
                }}
              />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
