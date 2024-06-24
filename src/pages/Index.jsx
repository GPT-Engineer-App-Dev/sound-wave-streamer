import React, { useState } from "react";
import { Box, Container, VStack, HStack, Text, Input, Button, Image, IconButton, List, ListItem, Progress } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaSearch } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen" },
    { id: 2, title: "Stairway to Heaven", artist: "Led Zeppelin" },
    { id: 3, title: "Imagine", artist: "John Lennon" },
    { id: 4, title: "Smells Like Teen Spirit", artist: "Nirvana" },
    { id: 5, title: "Billie Jean", artist: "Michael Jackson" },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="3xl" fontWeight="bold">MusicStream</Text>
          <HStack>
            <Input placeholder="Search for songs..." />
            <IconButton icon={<FaSearch />} aria-label="Search" />
          </HStack>
        </HStack>

        <HStack spacing={8} align="flex-start">
          <Box width="70%">
            <Text fontSize="2xl" mb={4}>Top Songs</Text>
            <List spacing={3}>
              {songs.map((song) => (
                <ListItem key={song.id} p={2} bg="gray.100" borderRadius="md" cursor="pointer" onClick={() => handleSongSelect(song)}>
                  <HStack justify="space-between">
                    <VStack align="flex-start">
                      <Text fontWeight="bold">{song.title}</Text>
                      <Text fontSize="sm" color="gray.600">{song.artist}</Text>
                    </VStack>
                    <IconButton icon={<FaPlay />} aria-label="Play" size="sm" />
                  </HStack>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box width="30%">
            <Text fontSize="2xl" mb={4}>Now Playing</Text>
            <VStack spacing={4} p={4} bg="gray.100" borderRadius="md">
              <Image src="https://via.placeholder.com/200" alt="Album Cover" borderRadius="md" />
              <Text fontWeight="bold">{currentSong ? currentSong.title : "No song selected"}</Text>
              <Text>{currentSong ? currentSong.artist : "Select a song to play"}</Text>
              <Progress value={30} width="100%" />
              <HStack spacing={4}>
                <IconButton icon={<FaStepBackward />} aria-label="Previous" />
                <IconButton
                  icon={isPlaying ? <FaPause /> : <FaPlay />}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  onClick={handlePlayPause}
                />
                <IconButton icon={<FaStepForward />} aria-label="Next" />
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;