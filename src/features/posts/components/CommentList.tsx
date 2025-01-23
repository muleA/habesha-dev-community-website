import { useState } from "react";
import {
  Paper,
  Text,
  Avatar,
  Group,
  Stack,
  ActionIcon,
  TextInput,
} from "@mantine/core";
import { IconHeart, IconMessageReply, IconSend } from "@tabler/icons-react";
import { Comment } from "../types";

interface CommentListProps {
  comments: Comment[];
  onUpdateComments: (comments: Comment[]) => void;
  parentId?: string;
  depth?: number;
}

export const CommentList = ({
  comments,
  onUpdateComments,
  parentId = undefined,
  depth = 0,
}: CommentListProps) => {
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const filteredComments = comments.filter(
    (comment) => comment.parentId === parentId,
  );

  const handleAddReply = (parentComment: Comment) => {
    if (!replyContent.trim()) return;

    const newReply: Comment = {
      id: Date.now().toString(),
      content: replyContent,
      author: {
        name: "Current User",
        avatar: "/avatars/default.png",
      },
      createdAt: new Date().toISOString(),
      parentId: parentComment.id,
      likes: 0,
      authorId: "",
      replies: []
    };

    onUpdateComments([newReply, ...comments]);
    setReplyTo(null);
    setReplyContent("");
  };

  const handleLike = (comment: Comment) => {
    const updatedComments = comments.map((c) =>
      c.id === comment.id ? { ...c, likes: c.likes + 1 } : c,
    );
    onUpdateComments(updatedComments);
  };

  return (
    <Stack gap="md" style={{ marginLeft: depth * 24 }}>
      {filteredComments.map((comment) => (
        <div key={comment.id}>
          <Paper shadow="xs" radius="md" p="sm" withBorder>
            <Stack gap="xs">
              <Group justify="space-between" align="center">
                <Group align="center">
                  <Avatar src={comment.author.avatar} size="sm" radius="xl" />
                  <div>
                    <Text size="sm" fw={500}>
                      {comment.author.name}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </Text>
                  </div>
                </Group>
                <Group gap="xs">
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    onClick={() => handleLike(comment)}
                  >
                    <IconHeart size={18} />
                  </ActionIcon>
                  <Text size="sm" c="dimmed">
                    {comment.likes}
                  </Text>
                  {depth < 3 && (
                    <ActionIcon
                      variant="subtle"
                      color="gray"
                      onClick={() => setReplyTo(comment.id)}
                    >
                      <IconMessageReply size={18} />
                    </ActionIcon>
                  )}
                </Group>
              </Group>

              <Text size="sm">{comment.content}</Text>

              {replyTo === comment.id && (
                <Group>
                  <TextInput
                    placeholder="Write a reply..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="flex-1"
                  />
                  <ActionIcon
                    color="ethiopianGreen"
                    variant="light"
                    onClick={() => handleAddReply(comment)}
                    disabled={!replyContent.trim()}
                  >
                    <IconSend size={20} />
                  </ActionIcon>
                </Group>
              )}
            </Stack>
          </Paper>

          {/* Render nested comments */}
          <CommentList
            comments={comments}
            onUpdateComments={onUpdateComments}
            parentId={comment.id}
            depth={depth + 1}
          />
        </div>
      ))}
    </Stack>
  );
};
