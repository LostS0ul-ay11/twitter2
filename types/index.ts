export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified?: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
}

export interface Trend {
  category: string;
  topic: string;
  postCount: string;
}
