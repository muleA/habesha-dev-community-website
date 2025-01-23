export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  parentId: string | null;
  postId: string;
  replies: Comment[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  comments: Comment[];
  likes: number;
}
