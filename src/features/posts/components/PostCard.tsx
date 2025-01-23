import { useState } from 'react';
import { Card, Text, Group, Avatar, Badge, ActionIcon, Menu, Modal, Button } from '@mantine/core';
import { IconHeart, IconMessageCircle, IconShare, IconDots, IconBookmark, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Post } from '../types';
import { CommentSection } from './CommentSection';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    // API call to update like count
  };

  const handleCommentClick = () => {
    console.log("true")
    setShowComments(true);
  };


  return (
    <>
      <Card 
        withBorder 
        radius="md" 
        p="md" 
        className="hover:shadow-md transition-shadow cursor-pointer" 
      >
        <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
            <Group gap="xs">
              <Avatar src={post.author.avatar} size={40} radius="xl" />
              <div>
                <Text size="sm" fw={500} c="ethiopianGreen.7">{post.author.name}</Text>
                <Text size="xs" c="dimmed">
                  {new Date(post.createdAt).toLocaleDateString()}
                </Text>
              </div>
            </Group>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon 
                  variant="subtle" 
                  color="gray"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconDots size={16} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown onClick={(e) => e.stopPropagation()}>
                <Menu.Item leftSection={<IconBookmark size={14} />}>
                  Save post
                </Menu.Item>
                <Menu.Item leftSection={<IconShare size={14} />}>
                  Share
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>
        
        <div>
        
          <Text mt="md" mb="xs" size="xl" fw={500} c="ethiopianGreen.8">
            {post.title}
          </Text>
          <div className="relative">
            <Text 
              size="sm" 
              c="gray.7"
              lineClamp={isExpanded ? undefined : 3}
              className={!isExpanded ? 'mask-linear-gradient' : ''}
            >
              {post.content}
            </Text>
            {post.content.length > 200 && (
              <Button
                variant="subtle"
                size="xs"
                color="ethiopianGreen"
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
                rightSection={isExpanded ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
                className="mt-2"
              >
                Show {isExpanded ? 'less' : 'more'}
              </Button>
            )}
          </div>
        </div>

        <Card.Section inheritPadding mt="md" pb="md">
          <Group justify="space-between">
            <Group justify='space-between' >
              <ActionIcon 
                variant="light" 
                color={liked ? "ethiopianRed" : "gray"}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(e);
                }}
                className="transition-colors"
              >
                <IconHeart 
                  size={12}
                  className={liked ? "text-ethiopian-red-6" : ""} 
                  fill={liked ? "currentColor" : "none"}
                />
                              <Text size="sm" c="dimmed">{liked ? post.likes + 1 : post.likes}</Text>

              </ActionIcon>

              <Button 
        variant="light"
        size='sm'
        leftSection={<IconMessageCircle/>}
        color="ethiopianGreen" 
  className="flex flex-row items-center" 
  onClick={handleCommentClick} 
><Group className='flex flex-row'>
    <Text size="sm" c="dimmed">
      {post.comments.length} Comments
    </Text>
</Group>
   
</Button>

            </Group>
            <Group gap={8}>
              {post.tags?.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="light" 
                  color="ethiopianGreen"
                  className="hover:bg-ethiopian-green-100 cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </Group>
          </Group>
        </Card.Section>
      </Card>

      <Modal
        opened={showComments}
        
        onClose={() => setShowComments(false)}
        title={
          <Group>
            <Text fw={500} c="ethiopianGreen.8">Comments</Text>
          </Group>
        }
        size="xl"
      >
        <CommentSection 
          comments={post.comments} 
          postId={post.id} 
        />
      </Modal>
    </>
  );
};
