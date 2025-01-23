import { Post } from "../../features/posts/types";

export const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "Getting Started with React",
    content: "React is a powerful library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page.",
    author: {
      id: "user1",
      name: "Abebe Kebede",
      avatar: "/avatars/user1.png",
    },
    createdAt: "2024-03-15",
    likes: 42,
    tags: ["react", "javascript", "frontend"],
    comments: [
      {
        id: "c1",
        content: "This is exactly what I needed! Thanks for sharing.",
        author: {
          name: "Sara Tesfaye",
          avatar: "/avatars/user2.png",
        },
        authorId: "user2",
        parentId: null,
        createdAt: "2024-03-15",
        likes: 5,
        replies: [
          {
            id: "r1",
            content: "Glad you found it helpful! Let me know if you have questions.",
            author: {
              name: "Abebe Kebede",
              avatar: "/avatars/user1.png",
            },
            authorId: "user1",
            createdAt: "2024-03-15",
          },
          {
            id: "r2",
            content: "Could you explain more about hooks?",
            author: {
              name: "Sara Tesfaye",
              avatar: "/avatars/user2.png",
            },
            authorId: "user2",
            createdAt: "2024-03-15",
          }
        ]
      },
      {
        id: "c2",
        content: "Great explanation of React concepts!",
        author: {
          name: "Dawit Haile",
          avatar: "/avatars/user3.png",
        },
        authorId: "user3",
        parentId: null,
        createdAt: "2024-03-15",
        likes: 3,
        replies: [
          {
            id: "r3",
            content: "Thanks! I tried to make it as clear as possible.",
            author: {
              name: "Abebe Kebede",
              avatar: "/avatars/user1.png",
            },
            authorId: "user1",
            createdAt: "2024-03-15",
          },
          {
            id: "r4",
            content: "The examples really helped me understand.",
            author: {
              name: "Meron Tadesse",
              avatar: "/avatars/user4.png",
            },
            authorId: "user4",
            createdAt: "2024-03-15",
          }
        ]
      },
      {
        id: "c3",
        content: "Looking forward to more posts like this!",
        author: {
          name: "Meron Tadesse",
          avatar: "/avatars/user4.png",
        },
        authorId: "user4",
        parentId: null,
        createdAt: "2024-03-15",
        likes: 7,
        replies: []
      }
    ],
    coverImage: undefined
  },
  {
    id: "2",
    title: "Understanding JavaScript Closures",
    content: "Closures are a fundamental concept in JavaScript that allow functions to have access to their outer scope even after the outer function has returned.",
    author: {
      id: "user2",
      name: "Sara Tesfaye",
      avatar: "/avatars/user2.png",
    },
    createdAt: "2024-03-16",
    likes: 30,
    tags: ["javascript", "closures", "programming"],
    comments: [
      {
        id: "c4",
        content: "This is a great explanation! I had trouble understanding closures before.",
        author: {
          name: "Dawit Haile",
          avatar: "/avatars/user3.png",
        },
        authorId: "user3",
        parentId: null,
        createdAt: "2024-03-16",
        likes: 2,
        replies: [
          {
            id: "r5",
            content: "Glad to hear that! Closures can be tricky at first.",
            author: {
              name: "Sara Tesfaye",
              avatar: "/avatars/user2.png",
            },
            authorId: "user2",
            createdAt: "2024-03-16",
          }
        ]
      }
    ],
    coverImage: undefined
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox",
    content: "CSS Grid and Flexbox are two powerful layout systems in CSS. While they can be used together, each has its own strengths and weaknesses.",
    author: {
      id: "user3",
      name: "Dawit Haile",
      avatar: "/avatars/user3.png",
    },
    createdAt: "2024-03-17",
    likes: 25,
    tags: ["css", "grid", "flexbox"],
    comments: [
      {
        id: "c5",
        content: "I prefer CSS Grid for complex layouts, but Flexbox is great for one-dimensional layouts.",
        author: {
          name: "Meron Tadesse",
          avatar: "/avatars/user4.png",
        },
        authorId: "user4",
        parentId: null,
        createdAt: "2024-03-17",
        likes: 4,
        replies: []
      }
    ],
    coverImage: undefined
  },
  {
    id: "4",
    title: "Introduction to TypeScript",
    content: "TypeScript is a superset of JavaScript that adds static types. It helps catch errors early and improves code quality.",
    author: {
      id: "user4",
      name: "Meron Tadesse",
      avatar: "/avatars/user4.png",
    },
    createdAt: "2024-03-18",
    likes: 18,
    tags: ["typescript", "javascript", "programming"],
    comments: [
      {
        id: "c6",
        content: "TypeScript has really improved my development workflow. Highly recommend it!",
        author: {
          name: "Abebe Kebede",
          avatar: "/avatars/user1.png",
        },
        authorId: "user1",
        parentId: null,
        createdAt: "2024-03-18",
        likes: 5,
        replies: [
          {
            id: "r6",
            content: "I agree! The type safety is a game changer.",
            author: {
              name: "Dawit Haile",
              avatar: "/avatars/user3.png",
            },
            authorId: "user3",
            createdAt: "2024-03-18",
          }
        ]
      }
    ],
    coverImage: undefined
  },
  {
    id: "5",
    title: "Exploring React Hooks",
    content: "React Hooks allow you to use state and other React features without writing a class. They are a powerful addition to React.",
    author: {
      id: "user1",
      name: "Abebe Kebede",
      avatar: "/avatars/user1.png",
    },
    createdAt: "2024-03-19",
    likes: 22,
    tags: ["react", "hooks", "frontend"],
    comments: [
      {
        id: "c7",
        content: "Hooks have made my code so much cleaner and easier to understand!",
        author: {
          name: "Sara Tesfaye",
          avatar: "/avatars/user2.png",
        },
        authorId: "user2",
        parentId: null,
        createdAt: "2024-03-19",
        likes: 3,
        replies: [
          {
            id: "r7",
            content: "Absolutely! They simplify state management.",
            author: {
              name: "Meron Tadesse",
              avatar: "/avatars/user4.png",
            },
            authorId: "user4",
            createdAt: "2024-03-19",
          }
        ]
      }
    ],
    coverImage: undefined
  }
];
