import { useState } from 'react';
import { Container, Stack, Button, TextInput, Notification, MultiSelect, Textarea } from '@mantine/core';


interface NewPostFormProps {
  onClose: () => void; 
  onAddPost: (newPost: { title: string; description: string; tags: string[]; createdAt: string }) => void;
}

export const NewPostForm = ({ onClose, onAddPost }: NewPostFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [notification, setNotification] = useState({ visible: false, message: '' });

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || tags.length === 0) {
      setNotification({ visible: true, message: 'Please fill in all fields.' });
      return;
    }

    const newPost = {
      title,
      description,
      tags,
      createdAt: new Date().toISOString(),
    };

    onAddPost(newPost);

    // Notify the user of successful submission
    setNotification({ visible: true, message: 'Post created successfully!' });
    setTitle('');
    setDescription('');
    setTags([]);
    onClose(); // Close the modal after submission
  };

  return (
    <Container size="lg" py="xl">
      <Stack>
        {notification.visible && (
          <Notification
            title="Notification"
            onClose={() => setNotification({ ...notification, visible: false })}
            color="teal"
          >
            {notification.message}
          </Notification>
        )}

        <TextInput
          label="Title"
          placeholder="Post title"
          required
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />

        <Textarea
          label="Description"
          placeholder="Write your description here..."
          required
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          minRows={8}
          maxRows={10}
        />

        <MultiSelect
          label="Tags"
          placeholder="Select tags"
          data={['React', 'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Node.js']} // Example tags
          value={tags}
          onChange={setTags}
          searchable
        />

        <Button onClick={handleSubmit} color="ethiopianGreen">Submit Post</Button>
      </Stack>
    </Container>
  );
};