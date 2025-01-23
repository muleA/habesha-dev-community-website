export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  authorId: string;
  parentId: string | null;
  createdAt: string;
  likes: number;
  replies: Reply[];
}

export interface Post {
  coverImage: unknown;
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: string;
  likes: number;
  comments: Comment[];
  tags?: string[];
}

export interface Reply {
  id: string;
  content: string;
  authorId: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
}
