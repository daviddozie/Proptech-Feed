"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MapPin,
  MoreHorizontal,
  Tag,
  KeyRound,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Post } from "@/types";
import PostMedia from "./post-media";
import { profile, verifiedIcon } from "@/assets";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarksCount, setBookmarksCount] = useState(post.bookmarkedCount);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleBookmark = () => {
    if (bookmarked) {
      setBookmarked(false);
      setBookmarksCount((prev) => Math.max(0, prev - 1));
    } else {
      setBookmarked(true);
      setBookmarksCount((prev) => prev + 1);
    }
  };

  return (
    <article className="border border-card-border bg-card rounded-3xl p-5 flex flex-col gap-4">
      {/* Post Header */}
      <div className="flex items-center gap-3">
        <div className="h-[40px] w-[40px] rounded-full overflow-hidden shrink-0 relative bg-neutral-900">
          <Image src={post.user.avatar} alt={post.user.name} fill sizes="40px" className="object-cover" unoptimized />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-base font-medium text-text-primary truncate">{post.user.name}</span>
            {post.user.isVerified && (
              <Image src={verifiedIcon} alt="Verified" width={11} height={11}/>
            )}
            <span className="text-[10px] text-text-disabled/40 shrink-0">•</span>
            <span className="text-[13px] text-text-disabled truncate">{post.user.role}</span>
          </div>
          <span className="text-[13px] text-text-disabled">{post.category} • {post.timestamp}</span>
        </div>
        <button className="inline-flex cursor-pointer text-text-disabled hover:text-text-primary transition p-1">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Post Content */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-normal font-medium text-text-primary leading-relaxed whitespace-pre-line">
          {post.content}
        </p>

        {/* Location & Listing Tag Badge */}
        {(post.location || post.listingType) && (
          <div className="flex items-center gap-3 flex-wrap mt-0.5">
            {post.location && (
              <div className="flex items-center gap-1 text-[13px] text-text-disabled font-medium">
                <MapPin className="h-3.5 w-3.5 text-text-disabled" />
                <span>{post.location}</span>
              </div>
            )}
            {post.listingType && (
              <div
                className={cn(
                  "text-[13px] font-medium px-2.5 py-0.5 rounded-full inline-flex items-center gap-1",
                  post.listingType === "For Sale"
                    ? "bg-badge-blue-bg text-badge-blue-text"
                    : "bg-badge-green-bg text-badge-green-text"
                )}
              >
                {post.listingType === "For Sale" ? <Tag className="h-2.5 w-2.5" /> : <KeyRound className="h-2.5 w-2.5" /> }
                <span>{post.listingType}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Media Elements */}
      {post.media && post.media.length > 0 && <PostMedia media={post.media} />}

      {/* Post Actions Footer */}
      <div className="flex items-center justify-between border-t border-border/30 pt-3 text-text-disabled font-medium text-xs">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={cn(
              "flex items-center gap-1.5 cursor-pointer hover:text-red-500 text-text-secondary transition-colors",
              liked && "text-red-500"
            )}
          >
            <Heart className={cn("h-5 w-5 transition", liked && "fill-red-500 text-red-500")} />
            {likesCount > 0 && <span>{likesCount}</span>}
          </button>
          <button className="flex items-center gap-1.5 cursor-pointer hover:text-brand-green text-text-secondary transition-colors">
            <MessageCircle className="h-5 w-5" />
            {post.commentsCount > 0 && <span>{post.commentsCount}</span>}
          </button>
          <button className="cursor-pointer hover:text-text-primary text-text-secondary transition-colors">
            <Send className="h-5 w-5"/>
          </button>
        </div>
        <button
          onClick={handleBookmark}
          className={cn(
            "flex items-center gap-1.5 cursor-pointer hover:text-brand-green text-text-secondary transition-colors",
            bookmarked && "text-brand-green"
          )}
        >
          <Bookmark className={cn("h-5 w-5 transition", bookmarked && "fill-brand-green text-brand-green")} />
          {bookmarksCount > 0 && <span>{bookmarksCount}</span>}
        </button>
      </div>

      {/* Social Overlaps (Liked By details) */}
      {post.likedByAvatars && post.likedByAvatars.length > 0 && (
        <div className="flex items-center gap-2 mt-0.5">
          <div className="flex -space-x-1.5">
            {post.likedByAvatars.map((av, avIdx) => (
              <div key={avIdx} className="h-[24px] w-[24px] rounded-full border border-card overflow-hidden shrink-0 relative">
                <Image src={av} alt="Liked user avatar" fill sizes="24px" className="object-cover" unoptimized />
              </div>
            ))}
          </div>
          <span className="text-sm text-text-secondary">{post.likedByText}</span>
        </div>
      )}

      {/* Top Comment wrapper */}
      {post.topComment && (
        <div className="mt-1 flex flex-col gap-0.5">
          <div className="flex items-center gap-1 text-sm leading-relaxed">
            <span className="font-medium text-text-primary shrink-0">{post.topComment.username}</span>
            <span className="text-text-secondary">{post.topComment.text}</span>
          </div>
          {post.commentsCount > 1 && (
            <button className="text-[13px] text-text-disabled hover:text-text-primary text-left mt-0.5 cursor-pointer">
              View all {post.commentsCount} comments
            </button>
          )}
        </div>
      )}

      {/* Add a comment panel */}
      <div className="mt-2.5 flex items-center gap-2.5 pt-2 border-t border-border/25">
        <div className="h-6 w-6 rounded-full bg-neutral-800 overflow-hidden relative shrink-0">
          <Image
            src={profile}
            alt="Current User avatar"
            fill
            sizes="24px"
            className="object-cover"
          />
        </div>
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 bg-transparent text-xs text-text-primary outline-none placeholder:text-text-disabled/50"
        />
        <button className="text-[13px] font-medium text-text-disabled/80 hover:text-text-primary transition-colors cursor-pointer">
          Reply
        </button>
      </div>
    </article>
  );
}
