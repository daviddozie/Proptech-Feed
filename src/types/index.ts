export interface User {
  name: string;
  avatar: string;
  role: string;
  isVerified?: boolean;
}

export interface Comment {
  username: string;
  text: string;
  time?: string;
}

export interface MediaItem {
  type: "image" | "video";
  url: string;
  duration?: string;
}

export interface Post {
  id: string;
  user: User;
  category: "General" | "Property" | "Request";
  timestamp: string;
  content: string;
  location?: string;
  listingType?: "For Sale" | "For Rent";
  likes: number;
  commentsCount: number;
  bookmarkedCount: number;
  likedByText: string;
  likedByAvatars: string[];
  media?: MediaItem[];
  topComment?: Comment;
}

export interface Story {
  id: string;
  name: string;
  avatar: string;
  hasActiveStory: boolean;
}
