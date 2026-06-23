import { User, Comment, MediaItem, Post, Story } from "@/types";

// Stories Mock Data
export const mockStories: Story[] = [
  {
    id: "1",
    name: "Alex",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    hasActiveStory: true,
  },
  {
    id: "2",
    name: "Jordan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    hasActiveStory: true,
  },
  {
    id: "3",
    name: "Taylor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    hasActiveStory: true,
  },
  {
    id: "4",
    name: "Jamie",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
    hasActiveStory: true,
  },
  {
    id: "5",
    name: "Jordan",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    hasActiveStory: true,
  },
  {
    id: "6",
    name: "EmersonJohn...",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150",
    hasActiveStory: true,
  },
  {
    id: "7",
    name: "Sydney",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    hasActiveStory: true,
  },
  {
    id: "8",
    name: "Quinn",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150",
    hasActiveStory: true,
  },
  {
    id: "9",
    name: "Parker",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    hasActiveStory: false,
  },
  {
    id: "10",
    name: "Hayden",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    hasActiveStory: false,
  },
];

// Posts Mock Data
const manualPosts: Post[] = [
  {
    id: "p1",
    user: {
      name: "Maurice U",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      role: "Individual",
    },
    category: "General",
    timestamp: "Just Now",
    content: "How is everyone holding up with the flooding in Lekki this week? Stay safe out there — and let me know if anyone needs a temporary place to crash 🙏",
    location: "Lekki Phase 1, Lagos",
    likes: 8,
    commentsCount: 8,
    bookmarkedCount: 2,
    likedByText: "Liked by miracle.h and 7 others",
    likedByAvatars: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50",
    ],
    topComment: {
      username: "tunde_b",
      text: "Roads around Admiralty are still bad. Thanks for checking in 🙏",
    },
  },
  {
    id: "p2",
    user: {
      name: "Stranger Dan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      role: "Agent",
      isVerified: true,
    },
    category: "General",
    timestamp: "12m",
    content: "Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    location: "Lekki Phase 1, Lagos",
    listingType: "For Sale",
    likes: 23,
    commentsCount: 3,
    bookmarkedCount: 2,
    likedByText: "Liked by miracle.h and 22 others",
    likedByAvatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=50",
    ],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600",
      },
    ],
    topComment: {
      username: "miracle.h",
      text: "Is the rent negotiable? Interested for my client.",
    },
  },
  {
    id: "p3",
    user: {
      name: "Felix Okon",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150",
      role: "Individual",
    },
    category: "Property",
    timestamp: "15h",
    content: "Newly looking for a 2-bedroom apartment in Yaba or Akoka. Must have constant water and parking for one car. Moving in by end of next month.rviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    location: "Lekki Phase 1, Lagos",
    listingType: "For Rent",
    likes: 1,
    commentsCount: 0,
    bookmarkedCount: 0,
    likedByText: "Liked by miracle.h",
    likedByAvatars: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
    ],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
      },
    ],
  },
  {
    id: "p4",
    user: {
      name: "Boyd From",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
      role: "Developer",
    },
    category: "Property",
    timestamp: "22m",
    content: "Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    location: "Lekki Phase 1, Lagos",
    listingType: "For Rent",
    likes: 23,
    commentsCount: 0,
    bookmarkedCount: 2,
    likedByText: "Liked by miracle.h and 22 others",
    likedByAvatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=50",
    ],
  },
  {
    id: "p5",
    user: {
      name: "Ima Nsen",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      role: "Owner",
    },
    category: "Property",
    timestamp: "15h",
    content: "Newly looking for a 2-bedroom apartment in Yaba or Akoka. Must have constant water and parking for one car. Moving in by end of next month.rviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    location: "Lekki Phase 1, Lagos",
    listingType: "For Rent",
    likes: 1,
    commentsCount: 0,
    bookmarkedCount: 0,
    likedByText: "Liked by miracle.h",
    likedByAvatars: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
    ],
    media: [
      {
        type: "video",
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600",
        duration: "0:20",
      },
    ],
  },
  {
    id: "p6",
    user: {
      name: "Daniel David",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      role: "Agent",
      isVerified: true,
    },
    category: "Property",
    timestamp: "21h",
    content: "Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    location: "Lekki Phase 1, Lagos",
    listingType: "For Sale",
    likes: 23,
    commentsCount: 0,
    bookmarkedCount: 2,
    likedByText: "Liked by miracle.h and 22 others",
    likedByAvatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=50",
    ],
    media: [
      {
        type: "video",
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600",
        duration: "0:29",
      },
    ],
  },
];

// Generate another 500 posts programmatically to support realistic infinite scrolling
const generateMockPosts = (): Post[] => {
  const posts = [...manualPosts];
  const locations = ["Lekki Phase 1, Lagos", "Ikeja, Lagos", "Ikoyi, Lagos", "Wuse, Abuja", "Victoria Island, Lagos"];
  const listingTypes = ["For Sale", "For Rent"] as const;
  const categories = ["General", "Property", "Request"] as const;
  const userRoles = ["Agent", "Individual", "Owner", "Developer"];
  const userNames = ["Alex", "Jordan", "Taylor", "Jamie", "Emerson", "Sydney", "Quinn", "Parker", "Hayden", "Tunde", "Miracle", "Felix", "Boyd", "Daniel"];
  const contentTemplates = [
    "Check out this beautiful cozy house in {location}. Perfect for families looking to settle down.",
    "We have a new luxury apartment available in {location}. Features include a swimming pool, gym, and 24/7 power supply.",
    "Looking for roommates to share a 3-bedroom flat in {location}. Contact me for details.",
    "Are you looking for commercial spaces? We have prime shop locations in {location}.",
    "A newly renovated serviced duplex is up for grabs in {location}. Inspection is open daily.",
    "Quick request: anyone has verified lands for sale in {location}? Budget is flexible.",
  ];
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
  ];

  for (let i = 1; i <= 500; i++) {
    const location = locations[i % locations.length];
    const role = userRoles[i % userRoles.length];
    const name = `${userNames[i % userNames.length]} ${String.fromCharCode(65 + (i % 26))}`;
    const category = categories[i % categories.length];
    const listingType = i % 3 === 0 ? undefined : listingTypes[i % listingTypes.length];
    const textTemplate = contentTemplates[i % contentTemplates.length];
    const content = textTemplate.replace("{location}", location);
    
    let media: MediaItem[] | undefined = undefined;
    if (i % 4 === 1) {
      media = [
        { type: "image", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" }
      ];
    } else if (i % 4 === 2) {
      media = [
        { type: "image", url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600" },
        { type: "image", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600" }
      ];
    } else if (i % 4 === 3) {
      media = [
        { type: "video", url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600", duration: "0:30" }
      ];
    }

    posts.push({
      id: `gen-p${i}`,
      user: {
        name,
        avatar: avatars[i % avatars.length],
        role,
        isVerified: i % 5 === 0,
      },
      category,
      timestamp: `${i}h ago`,
      content,
      location,
      listingType,
      likes: (i * 7) % 150,
      commentsCount: (i * 3) % 40,
      bookmarkedCount: (i * 2) % 15,
      likedByText: `Liked by miracle.h and ${(i * 7) % 150} others`,
      likedByAvatars: [
        avatars[(i + 1) % avatars.length],
        avatars[(i + 2) % avatars.length]
      ],
      media,
      topComment: i % 2 === 0 ? {
        username: `${userNames[(i + 3) % userNames.length].toLowerCase()}.${String.fromCharCode(97 + ((i + 3) % 26))}`,
        text: "Is this still available for inspection?",
      } : undefined
    });
  }
  return posts;
};

export const mockPosts: Post[] = generateMockPosts();
