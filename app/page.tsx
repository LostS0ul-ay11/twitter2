import Sidebar from "@/components/layout/Sidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import Feed from "@/components/feed/Feed";

export default function Home() {
  return (
    <div className="max-w-[1265px] mx-auto flex justify-center w-full relative">
      <Sidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}
