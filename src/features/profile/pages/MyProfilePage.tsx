import { useState } from 'react';
import { Container, Stack, Title, TextInput, Textarea, Button, Notification, Avatar, FileInput } from '@mantine/core';

export const MyProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [notification, setNotification] = useState({ visible: false, message: '' });

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      setNotification({ visible: true, message: 'Please fill in all required fields.' });
      return;
    }

    // Here you would typically send the profile data to your API
    const profileData = {
      name,
      email,
      bio,
      profilePicture,
    };

    console.log('Profile Data:', profileData); // Replace with API call

    // Notify the user of successful submission
    setNotification({ visible: true, message: 'Profile updated successfully!' });
    // Reset fields if needed
  };

  return (
    <Container size="lg" py="xl">
      <Stack>
        <Title order={2}>My Profile</Title>

        {notification.visible && (
          <Notification
            title="Notification"
            onClose={() => setNotification({ ...notification, visible: false })}
            color="teal"
          >
            {notification.message}
          </Notification>
        )}

        <Avatar
          src={profilePicture ? URL.createObjectURL(profilePicture) : undefined}
          size={120}
          radius="xl"
          alt="Profile Picture"
        />

        <FileInput
          label="Profile Picture"
          placeholder="Upload your profile picture"
          onChange={setProfilePicture}
          accept="image/png,image/jpeg"
        />

        <TextInput
          label="Name"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <TextInput
          label="Email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <Textarea
          label="Bio"
          placeholder="Tell us about yourself..."
          value={bio}
          onChange={(e) => setBio(e.currentTarget.value)}
          minRows={4}
          maxRows={6}
        />

        <Button onClick={handleSubmit} color="ethiopianGreen">Update Profile</Button>
      </Stack>
    </Container>
  );
}; 