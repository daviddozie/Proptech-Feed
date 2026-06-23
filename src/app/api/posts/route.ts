import { NextRequest, NextResponse } from "next/server";
import { mockPosts } from "@/lib/mock-data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "3", 10);
  const category = searchParams.get("category") || "Feed";

  // Simulate network latency (800ms) for visual state checks (loading skeleton)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Filter posts by category / listing type
  let filteredPosts = [...mockPosts];
  
  if (category === "Rent") {
    filteredPosts = mockPosts.filter((post) => post.listingType === "For Rent");
  } else if (category === "Buy") {
    filteredPosts = mockPosts.filter((post) => post.listingType === "For Sale");
  } else if (category === "Snagging") {
    filteredPosts = mockPosts.filter((post) => post.category === "Property");
  } else if (category === "Shortlets") {
    // Return none or general posts since shortlets are empty
    filteredPosts = mockPosts.filter((post) => post.listingType === "For Rent");
  } else if (category !== "Feed") {
    // Catch-all
    filteredPosts = mockPosts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }

  const total = filteredPosts.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  
  const posts = filteredPosts.slice(start, end);
  const hasMore = end < total;

  return NextResponse.json({
    posts,
    nextPage: hasMore ? page + 1 : null,
    total,
  });
}
