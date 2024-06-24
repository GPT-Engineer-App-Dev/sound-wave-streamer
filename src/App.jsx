import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Flex, Image, HStack, Text } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Box>
        <Flex as="header" bg="gray.100" py={4} px={8} alignItems="center" justifyContent="space-between">
          <Image src="/images/logo.png" alt="MusicStream Logo" height="40px" />
          <HStack as="nav" spacing={4}>
            <Link to="/"><Text>Home</Text></Link>
            <Link to="/playlists"><Text>Playlists</Text></Link>
            <Link to="/search"><Text>Search</Text></Link>
          </HStack>
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;