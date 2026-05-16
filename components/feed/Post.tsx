import { MessageCircle, Repeat2, Heart, BarChart2, Share, MoreHorizontal } from "lucide-react";
import { Post as PostType } from "@/types";

export default function Post({ post }: { post: PostType }) {
  return (
    <article className="px-4 py-3 border-b border-twitter-border hover:bg-[#080808] transition-colors cursor-pointer flex gap-3">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0 mt-1"></div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[15px] truncate">
            <span className="font-bold text-[#e7e9ea] hover:underline truncate">{post.author.name}</span>
            {post.author.verified && (
              <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-[18px] h-[18px] fill-twitter-blue">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.79-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.68 2.76 1.71 3.51-.05.3-.08.6-.08.9 0 2.21 1.71 4 3.918 4 .47 0 .92-.086 1.336-.25.52 1.334 1.818 2.25 3.337 2.25s2.816-.916 3.337-2.25c.416.164.866.25 1.336.25 2.21 0 3.918-1.79 3.918-4 0-.3-.03-.6-.08-.9 1.03-.75 1.71-2.05 1.71-3.51zM10.395 18.06l-4.71-4.71 1.42-1.42 3.29 3.29 8.29-8.29 1.42 1.42-9.71 9.71z"></path>
              </svg>
            )}
            <span className="text-gray-500 truncate">@{post.author.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 hover:underline">{post.timestamp}</span>
          </div>
          <button className="text-gray-500 hover:text-twitter-blue hover:bg-twitter-blue/10 p-2 rounded-full transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Text body */}
        <p className="text-[15px] whitespace-pre-wrap mt-0.5">{post.content}</p>

        {/* Actions */}
        <div className="flex items-center justify-between text-gray-500 mt-3 max-w-[425px]">
          <button className="group flex items-center gap-1">
            <div className="group-hover:bg-twitter-blue/10 group-hover:text-twitter-blue p-2 rounded-full transition-colors -ml-2">
              <MessageCircle className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px] group-hover:text-twitter-blue">{post.replies}</span>
          </button>
          
          <button className="group flex items-center gap-1">
            <div className="group-hover:bg-[#00ba7c]/10 group-hover:text-[#00ba7c] p-2 rounded-full transition-colors">
              <Repeat2 className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px] group-hover:text-[#00ba7c]">{post.retweets}</span>
          </button>

          <button className="group flex items-center gap-1">
            <div className="group-hover:bg-[#f91880]/10 group-hover:text-[#f91880] p-2 rounded-full transition-colors">
              <Heart className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px] group-hover:text-[#f91880]">{post.likes}</span>
          </button>

          <button className="group flex items-center gap-1">
            <div className="group-hover:bg-twitter-blue/10 group-hover:text-twitter-blue p-2 rounded-full transition-colors">
              <BarChart2 className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px] group-hover:text-twitter-blue">{(post.views / 1000).toFixed(1)}K</span>
          </button>

          <button className="group flex items-center">
            <div className="group-hover:bg-twitter-blue/10 group-hover:text-twitter-blue p-2 rounded-full transition-colors">
              <Share className="w-[18px] h-[18px]" />
            </div>
          </button>
        </div>
      </div>
    </article>
  );
}
