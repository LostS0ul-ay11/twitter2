import { Image as ImageIcon, Smile, Calendar, MapPin, ListTodo } from "lucide-react";

export default function CreatePost() {
  return (
    <div className="px-4 py-3 flex gap-3 border-b border-twitter-border">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0"></div>
      
      {/* Input Area */}
      <div className="flex-1">
        <textarea 
          placeholder="What is happening?!"
          className="w-full bg-transparent text-xl placeholder-gray-500 outline-none resize-none mt-2 h-12"
        />
        
        <div className="border-b border-twitter-border pb-3 mb-3">
          <button className="text-twitter-blue font-bold text-sm hover:bg-twitter-blue/10 rounded-full px-3 py-0.5 transition-colors flex items-center gap-2">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path></svg>
            Everyone can reply
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-twitter-blue -ml-2">
            <button className="p-2 rounded-full hover:bg-twitter-blue/10 transition-colors">
              <ImageIcon className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2 rounded-full hover:bg-twitter-blue/10 transition-colors">
               <div className="border-2 border-twitter-blue rounded-[4px] border-solid flex items-center justify-center text-[8px] font-extrabold h-[18px] w-[18px]">
                  GIF
               </div>
            </button>
            <button className="p-2 rounded-full hover:bg-twitter-blue/10 transition-colors">
              <ListTodo className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2 rounded-full hover:bg-twitter-blue/10 transition-colors">
              <Smile className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2 rounded-full hover:bg-twitter-blue/10 transition-colors hidden sm:block">
              <Calendar className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2 rounded-full hover:bg-twitter-blue/10 transition-colors">
              <MapPin className="w-[18px] h-[18px] opacity-50" />
            </button>
          </div>
          
          <button className="bg-twitter-blue hover:bg-twitter-blue/90 text-white font-bold py-1.5 px-4 rounded-full transition-colors disabled:opacity-50">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
