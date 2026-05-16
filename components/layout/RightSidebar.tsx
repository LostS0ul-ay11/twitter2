import { Search } from "lucide-react";
import { Trend } from "@/types";

const mockTrends: Trend[] = [
  { category: "Technology · Trending", topic: "Next.js 16", postCount: "120K posts" },
  { category: "Sports · Trending", topic: "Champions League", postCount: "85.2K posts" },
  { category: "Entertainment · Trending", topic: "Dune", postCount: "45K posts" },
];

export default function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-[350px] ml-8 py-2 h-screen sticky top-0">
      {/* Search Bar */}
      <div className="sticky top-0 bg-black py-2 z-10">
        <div className="group flex items-center bg-[#202327] rounded-full px-4 py-2 border border-transparent focus-within:border-twitter-blue focus-within:bg-black transition-colors">
          <Search className="w-5 h-5 text-gray-500 group-focus-within:text-twitter-blue" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-white ml-4 w-full placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {/* Subscribe to Premium */}
        <div className="bg-[#16181c] rounded-2xl p-4 border border-twitter-border">
          <h2 className="font-bold text-xl mb-2">Subscribe to Premium</h2>
          <p className="text-[15px] mb-4 text-[#e7e9ea]">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
          <button className="bg-twitter-blue hover:bg-twitter-blue/90 text-white font-bold py-2 px-4 rounded-full transition-colors cursor-pointer w-fit">
            Subscribe
          </button>
        </div>

        {/* What's happening */}
        <div className="bg-[#16181c] rounded-2xl border border-twitter-border pt-4">
          <h2 className="font-bold text-xl px-4 mb-4">What's happening</h2>
          {mockTrends.map((trend, i) => (
            <div key={i} className="px-4 py-3 hover:bg-[#1d1f23] transition-colors cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="text-[13px] text-gray-500">{trend.category}</div>
                <div className="text-gray-500 hover:text-twitter-blue rounded-full p-1 hover:bg-twitter-blue/10 transition-colors">
                   <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
                     <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                   </svg>
                </div>
              </div>
              <div className="font-bold text-[15px] mt-0.5">{trend.topic}</div>
              <div className="text-[13px] text-gray-500 mt-0.5">{trend.postCount}</div>
            </div>
          ))}
          <div className="px-4 py-4 text-twitter-blue hover:bg-[#1d1f23] transition-colors cursor-pointer rounded-b-2xl">
            Show more
          </div>
        </div>
      </div>
    </aside>
  );
}
