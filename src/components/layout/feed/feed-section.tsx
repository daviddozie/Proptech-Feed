"use client";

import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import PostCard from "./post-card";
import PostSkeleton from "./post-skeleton";

interface FeedSectionProps {
  category: string;
}

export default function FeedSection({ category }: FeedSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["posts", category],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await fetch(`/api/posts?page=${pageParam}&limit=3&category=${category}`);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      return res.json();
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center text-text-secondary">
        <p className="text-sm">Unable to load feed updates. Please refresh the page.</p>
      </div>
    );
  }

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  return (
    <div className="flex flex-col gap-6 w-full">
      {posts.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card p-12 text-center text-text-secondary">
          <p className="text-sm">No post feeds found in this section.</p>
        </div>
      ) : (
        <>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          {/* Scrolling Trigger Observer Node */}
          <div ref={ref} className="w-full flex items-center justify-center py-4">
            {isFetchingNextPage ? (
              <div className="flex flex-col gap-6 w-full">
                <PostSkeleton />
              </div>
            ) : hasNextPage ? (
              <span className="text-xs text-text-disabled">Scroll down to load more updates...</span>
            ) : (
              <span className="text-xs text-text-disabled">You've reached the end of the feed.</span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
