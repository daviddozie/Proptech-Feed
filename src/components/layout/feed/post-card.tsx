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
    <article className={cn('flex', 'flex-col', 'gap-4', 'bg-card', 'p-5', 'border', 'border-card-border', 'rounded-3xl')}>
      {/* Post Header */}
      <div className={cn('flex', 'items-center', 'gap-3')}>
        <div className={cn('relative', 'bg-neutral-900', 'rounded-full', 'w-10', 'h-10', 'overflow-hidden', 'shrink-0')}>
          <Image src={post.user.avatar} alt={post.user.name} fill sizes="40px" className="object-cover" unoptimized />
        </div>
        <div className={cn('flex', 'flex-col', 'flex-1', 'min-w-0')}>
          <div className={cn('flex', 'flex-wrap', 'items-center', 'gap-1.5')}>
            <span className={cn('font-medium', 'text-text-primary', 'text-base', 'truncate')}>{post.user.name}</span>
            {post.user.isVerified && (
              <Image src={verifiedIcon} alt="Verified" width={11} height={11}/>
            )}
            <span className={cn('text-[10px]', 'text-text-disabled/40', 'shrink-0')}>•</span>
            <span className={cn('text-[13px]', 'text-text-disabled', 'truncate')}>{post.user.role}</span>
          </div>
          <span className={cn('text-[13px]', 'text-text-disabled')}>{post.category} • {post.timestamp}</span>
        </div>
        <button className={cn('inline-flex', 'p-1', 'text-text-disabled', 'hover:text-text-primary', 'transition', 'cursor-pointer')}>
          <MoreHorizontal className={cn('w-5', 'h-5')} />
        </button>
      </div>

      {/* Post Content */}
      <div className={cn('flex', 'flex-col', 'gap-2')}>
        <p className={cn('font-normal', 'font-medium', 'text-text-primary', 'text-sm', 'leading-relaxed', 'whitespace-pre-line')}>
          {post.content}
        </p>

        {/* Location & Listing Tag Badge */}
        {(post.location || post.listingType) && (
          <div className={cn('flex', 'flex-wrap', 'items-center', 'gap-3', 'mt-0.5')}>
            {post.location && (
              <div className={cn('flex', 'items-center', 'gap-1', 'font-medium', 'text-[13px]', 'text-text-disabled')}>
                <MapPin className={cn('w-3.5', 'h-3.5', 'text-text-disabled')} />
                <span>{post.location}</span>
              </div>
            )}
            {post.listingType && (
              <div
                className={cn(
                  "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-medium text-[13px]",
                  post.listingType === "For Sale"
                    ? "bg-badge-blue-bg text-badge-blue-text"
                    : "bg-badge-green-bg text-badge-green-text"
                )}
              >
                {post.listingType === "For Sale" ? <Tag className={cn('w-2.5', 'h-2.5')} /> : <KeyRound className={cn('w-2.5', 'h-2.5')} /> }
                <span>{post.listingType}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Media Elements */}
      {post.media && post.media.length > 0 && <PostMedia media={post.media} />}

      {/* Post Actions Footer */}
      <div className={cn('flex', 'justify-between', 'items-center', 'pt-3', 'border-border/30', 'border-t', 'font-medium', 'text-text-disabled', 'text-xs')}>
        <div className={cn('flex', 'items-center', 'gap-4')}>
          <button
            onClick={handleLike}
            className={cn(
              "flex items-center gap-1.5 text-text-secondary hover:text-red-500 transition-colors cursor-pointer",
              liked && "text-red-500"
            )}
          >
            <Heart className={cn("w-5 h-5 transition", liked && "fill-red-500 text-red-500")} />
            {likesCount > 0 && <span>{likesCount}</span>}
          </button>
          <button className={cn('flex', 'items-center', 'gap-1.5', 'text-text-secondary', 'hover:text-brand-green', 'transition-colors', 'cursor-pointer')}>
            <MessageCircle className={cn('w-5', 'h-5')} />
            {post.commentsCount > 0 && <span>{post.commentsCount}</span>}
          </button>
          <button className={cn('text-text-secondary', 'hover:text-text-primary', 'transition-colors', 'cursor-pointer')}>
            <Send className={cn('w-5', 'h-5')}/>
          </button>
        </div>
        <button
          onClick={handleBookmark}
          className={cn(
            "flex items-center gap-1.5 text-text-secondary hover:text-brand-green transition-colors cursor-pointer",
            bookmarked && "text-brand-green"
          )}
        >
          <Bookmark className={cn("w-5 h-5 transition", bookmarked && "fill-brand-green text-brand-green")} />
          {bookmarksCount > 0 && <span>{bookmarksCount}</span>}
        </button>
      </div>

      {/* Social Overlaps (Liked By details) */}
      {post.likedByAvatars && post.likedByAvatars.length > 0 && (
        <div className={cn('flex', 'items-center', 'gap-2', 'mt-0.5')}>
          <div className={cn('flex', '-space-x-1.5')}>
            {post.likedByAvatars.map((av, avIdx) => (
              <div key={avIdx} className={cn('relative', 'border', 'border-card', 'rounded-full', 'w-[24px]', 'h-[24px]', 'overflow-hidden', 'shrink-0')}>
                <Image src={av} alt="Liked user avatar" fill sizes="24px" className="object-cover" unoptimized />
              </div>
            ))}
          </div>
          <span className={cn('text-text-secondary', 'text-sm')}>{post.likedByText}</span>
        </div>
      )}

      {/* Top Comment wrapper */}
      {post.topComment && (
        <div className={cn('flex', 'flex-col', 'gap-0.5', 'mt-1')}>
          <div className={cn('flex', 'items-center', 'gap-1', 'text-sm', 'leading-relaxed')}>
            <span className={cn('font-medium', 'text-text-primary', 'shrink-0')}>{post.topComment.username}</span>
            <span className="text-text-secondary">{post.topComment.text}</span>
          </div>
          {post.commentsCount > 1 && (
            <button className={cn('mt-0.5', 'text-[13px]', 'text-text-disabled', 'hover:text-text-primary', 'text-left', 'cursor-pointer')}>
              View all {post.commentsCount} comments
            </button>
          )}
        </div>
      )}

      {/* Add a comment panel */}
      <div className={cn('flex', 'items-center', 'gap-2.5', 'mt-2.5', 'pt-2', 'border-border/25', 'border-t')}>
        <div className={cn('relative', 'bg-neutral-800', 'rounded-full', 'w-6', 'h-6', 'overflow-hidden', 'shrink-0')}>
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
          className={cn('flex-1', 'bg-transparent', 'outline-none', 'text-text-primary', 'placeholder:text-text-disabled/50', 'text-xs')}
        />
        <button className={cn('font-medium', 'text-[13px]', 'text-text-disabled/80', 'hover:text-text-primary', 'transition-colors', 'cursor-pointer')}>
          Reply
        </button>
      </div>
    </article>
  );
}
