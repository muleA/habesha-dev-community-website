import { useState } from 'react';
import { Stack, Group, Avatar, Button, Textarea } from '@mantine/core';
import { Comment } from '../types';
import { CommentCard } from './CommentCard';

interface CommentSectionProps {
  comments: Comment[];
  postId: string;
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    setNewComment('');
  };

  return (
    <Stack>
      <Group justify='space-between'>
        <Avatar radius="md" size="md" />
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.currentTarget.value)}
          style={{ flex: 1 }}
         
        />
          <Button 
              variant="primary" 
              size="md" 
              onClick={handleAddComment}
            >
              Post
            </Button>
      </Group>

      <Stack gap="md">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </Stack>
    </Stack>
  );
}; 