import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { FaUserCircle, FaLock, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  // Assuming a simple state to manage user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  // Dummy function to handle login, in a real app this would be more complex
  const handleLogin = () => {
    toast({
      title: "Login Attempt",
      description: "This is just a placeholder function.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mt={10}>
        <Stack spacing={4}>
          <Heading size="lg" textAlign="center">
            Welcome to the Quiz App
          </Heading>
          <FormControl id="username">
            <FormLabel>User Name</FormLabel>
            <Input placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} value={username} icon={<FaUserCircle />} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} type="password" icon={<FaLock />} />
          </FormControl>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid" onClick={handleLogin}>
            Sign In
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
