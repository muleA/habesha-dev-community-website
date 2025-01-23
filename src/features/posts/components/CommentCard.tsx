import { useState } from 'react';
import { Paper, Group, Avatar, Text, Button, TextInput, Stack, ActionIcon } from '@mantine/core';
import { IconHeart, IconArrowForwardUp } from '@tabler/icons-react';
import { Comment, Reply } from '../types';

interface CommentCardProps {
  comment: Comment;
  onReply?: (commentId: string, content: string) => void;
  depth?: number;
}

export const CommentCard = ({ comment, onReply, depth = 0 }: CommentCardProps) => {
  const [replyContent, setReplyContent] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const handleReply = () => {
    if (!replyContent.trim()) return;
    onReply?.(comment.id, replyContent);
    setReplyContent('');
    setShowReplyInput(false);
  };

  const maxDepth = 3; // Maximum nesting level

  return (
    <Stack gap="xs">
      <Paper 
        withBorder 
        p="md" 
        radius="md"
        className={depth > 0 ? 'ml-8 border-l-4 border-ethiopian-green-2' : ''}
      >
        <Stack gap="sm">
          <Group>
            <Avatar src={comment.author.avatar} radius="xl" />
            <div style={{ flex: 1 }}>
              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={500}>{comment.author.name}</Text>
                  <Text size="xs" c="dimmed">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </Text>
                </div>
                <Group gap={8}>
                  <ActionIcon variant="subtle" color="gray">
                    <IconHeart size={16} className="text-ethiopian-red-6" />
                  </ActionIcon>
                  <Button 
            variant="default" 
            color="ethiopianGreen" 
            size="xs" 
            onClick={() => setShowReplyInput((prev) => !prev)}
          >
            {showReplyInput ? 'Cancel' : 'Reply'}
          </Button>
                </Group>
              </Group>
              <Text size="sm" mt="xs">{comment.content}</Text>
            </div>
          </Group>

         

          {showReplyInput && (
            <Group align="flex-start" style={{ justifyContent: 'flex-end' }}>
              <div style={{ flex: 1 }}>
                <TextInput
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.currentTarget.value)}
                />
              </div>
              <Button 
                variant="light" 
                color="ethiopianGreen"
                size="xs"
                onClick={handleReply}
                disabled={!replyContent.trim()}
              >
               Post Reply
              </Button>
            </Group>
          )}
        </Stack>
      </Paper>

      {comment.replies.length > 0 && (
        <Stack gap="xs" className="ml-4">
          <Group gap="xs" className="ml-4">
            <Button 
              variant="subtle" 
              size="xs"
              color="ethiopianGreen"
              leftSection={
                <IconArrowForwardUp 
                  size={14} 
                  style={{ 
                    transform: showReplies ? 'rotate(0deg)' : 'rotate(-90deg)',
                    transition: 'transform 0.2s ease'
                  }} 
                />
              }
              onClick={() => setShowReplies((prevShowReplies) => !prevShowReplies)}
            >
              {showReplies ? 'Hide' : 'Show'} {comment.replies.length} replies
            </Button>
          </Group>
          
          {showReplies && (
            <Stack gap="xs">
              {comment.replies.map((reply) => (
                <ReplyCard 
                  key={reply.id} 
                  reply={reply} 
                  depth={depth + 1}
                  maxDepth={maxDepth}
                  onReply={onReply}
                />
              ))}
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};

interface ReplyCardProps {
  reply: Reply;
  depth: number;
  maxDepth: number;
  onReply?: (commentId: string, content: string) => void;
}

const ReplyCard = ({ reply, onReply }: ReplyCardProps) => {
  const [replyContent, setReplyContent] = useState('');

  const handleReply = () => {
    if (!replyContent.trim()) return;
    onReply?.(reply.id, replyContent);
    setReplyContent('');
  };

  return (
    <Paper 
      withBorder 
      p="md" 
      radius="md"
      className="ml-8 border-l-4 border-ethiopian-green-2"
    >
      <Stack gap="sm">
        <Group>
          <Avatar src={reply.author.avatar} radius="xl" size="sm" />
          <div style={{ flex: 1 }}>
            <Group justify="space-between">
              <div>
                <Text size="sm" fw={500}>{reply.author.name}</Text>
                <Text size="xs" c="dimmed">
                  {new Date(reply.createdAt).toLocaleDateString()}
                </Text>
              </div>
            </Group>
            <Text size="sm" mt="xs">{reply.content}</Text>
          </div>
        </Group>

        {/* Reply input is always visible for replies as well */}
        <Group align="flex-start">
          <IconArrowForwardUp size={16} className="text-ethiopian-green-6 mt-2 ml-4" />
          <div style={{ flex: 1 }}>
            <TextInput
              placeholder="Write a reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.currentTarget.value)}
              rightSection={
                <Button 
                  variant="light" 
                  color="ethiopianGreen"
                  size="xs"
                  onClick={handleReply}
                  disabled={!replyContent.trim()}
                >
                  Reply
                </Button>
              }
            />
          </div>
        </Group>
      </Stack>
    </Paper>
  );
}; 