import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, Image } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Box>
        <Box as="header" bg="gray.100" py={4} px={8}>
          <Image src="/images/logo.png" alt="MusicStream Logo" height="40px" />
        </Box>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;