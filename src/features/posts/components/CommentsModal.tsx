import { Modal, Stack, Group, Avatar, Text, Button, Textarea } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';

interface CommentsModalProps {
  opened: boolean;
  onClose: () => void;
}

export const CommentsModal = ({ opened, onClose }: CommentsModalProps) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Comments"
      size="lg"
    >
      <Stack>
        {/* Comments List */}
        <Stack gap="md">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <Group align="start">
                <Avatar 
                  src={`https://api.dicebear.com/7.x/avatars/svg?seed=${index}`} 
                  radius="xl" 
                />
                <div style={{ flex: 1 }}>
                  <Group justify="space-between">
                    <Text size="sm" fw={500}>
                      User Name {index + 1}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {index + 1} hour ago
                    </Text>
                  </Group>
                  <Text size="sm" mt="xs">
                    This is a sample comment. It can be quite long and will wrap to multiple lines if necessary.
                  </Text>
                  <Group mt="xs">
                    <Button variant="subtle" size="xs" color="gray">
                      Reply
                    </Button>
                    <Button variant="subtle" size="xs" color="gray">
                      Like
                    </Button>
                  </Group>
                </div>
              </Group>
            </div>
          ))}
        </Stack>

        {/* Comment Input */}
        <Group align="flex-start">
          <Avatar src="https://api.dicebear.com/7.x/avatars/svg?seed=current" radius="xl" />
          <Textarea
            placeholder="Write a comment..."
            style={{ flex: 1 }}
            rightSection={
              <IconSend 
                size={16} 
                className="cursor-pointer text-ethiopian-green-6" 
              />
            }
          />
        </Group>
      </Stack>
    </Modal>
  );
}; 