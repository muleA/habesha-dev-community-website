import { useState } from 'react';
import { Container, Stack, Title, Group, Button, TextInput, Modal } from '@mantine/core';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import { PostCard } from '../components/PostCard';
import { Post } from '../types';
import { NewPostForm } from '../components/NewPostForm';
import { MOCK_POSTS } from '@/shared/data/mockData';


export const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const handleAddPost = (newPostData: { title: string; description: string; tags: string[]; createdAt: string }) => {
    const newPost: Post = {
      id: new Date().toISOString(),
      title: newPostData.title,
      tags: newPostData.tags,
      createdAt: newPostData.createdAt,
      coverImage: '',
      content: '',
      author: {
        name: 'Abebe Kebede',
        avatar: '',
        id: ''
      },
      likes: 0,
      comments: []
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]); 
  };

  return (
    <Container size="lg" py="xl">
      <Stack>
        <Group justify="space-between">
        <Title order={2}>
            Community Posts{' '}
            <Title component="span" c="green" fw={500}>
              ({posts.length})
            </Title>
          </Title>          
          
          <Button 
            onClick={() => setModalOpened(true)}
            leftSection={<IconPlus size={16} />}
            variant="gradient"
            gradient={{ from: 'ethiopianGreen', to: 'ethiopianYellow' }}
          >
            Create Post
          </Button>
        </Group>

        <TextInput
          placeholder="Search posts..."
          leftSection={<IconSearch size={16} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />

        <Stack gap="md">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Stack>
      </Stack>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Create New Post"
        size="lg"
      >
        <NewPostForm onClose={() => setModalOpened(false)} onAddPost={handleAddPost} />
      </Modal>
    </Container>
  );
};
