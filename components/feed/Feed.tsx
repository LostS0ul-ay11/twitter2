import CreatePost from "./CreatePost";
import Post from "./Post";
import { Post as PostType } from "@/types";

const mockPosts: PostType[] = [
  {
    id: "1",
    author: {
      id: "user1",
      name: "Lee",
      username: "leedev",
      avatar: "",
      verified: true,
    },
    content: "Just built an amazing Twitter clone using Next.js 16 and Tailwind CSS 4! The dark mode looks incredible. 🚀🔥 #webdev #react",
    timestamp: "2h",
    likes: 1240,
    retweets: 342,
    replies: 56,
    views: 45000,
  },
  {
    id: "2",
    author: {
      id: "user2",
      name: "Vercel",
      username: "vercel",
      avatar: "",
      verified: true,
    },
    content: "Next.js 16 introduces new features for caching and rendering that will make your applications faster than ever. Read our blog post to learn more.",
    timestamp: "5h",
    likes: 4500,
    retweets: 1200,
    replies: 230,
    views: 120000,
  },
  {
    id: "3",
    author: {
      id: "user3",
      name: "Design Updates",
      username: "designupdates",
      avatar: "",
      verified: false,
    },
    content: "Dark mode UI design tips:\n1. Never use pure black (#000) for text backgrounds if it's too harsh, though X uses it well.\n2. Ensure contrast ratios meet accessibility standards.\n3. Subtle borders make a huge difference.",
    timestamp: "10h",
    likes: 890,
    retweets: 120,
    replies: 12,
    views: 15000,
  }
];

export default function Feed() {
  return (
    <main className="flex-1 border-x border-twitter-border min-h-screen max-w-[600px] w-full">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 border-b border-twitter-border cursor-pointer">
        <div className="flex">
          <button className="flex-1 font-bold text-[15px] hover:bg-[#181818] transition-colors py-4 relative flex justify-center">
            <span>For you</span>
            <div className="absolute bottom-0 w-14 h-1 bg-twitter-blue rounded-full"></div>
          </button>
          <button className="flex-1 font-bold text-[15px] text-gray-500 hover:bg-[#181818] transition-colors py-4 flex justify-center">
            <span>Following</span>
          </button>
        </div>
      </div>

      <CreatePost />

      <div>
        {mockPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
