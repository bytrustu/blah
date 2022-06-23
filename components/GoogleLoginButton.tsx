import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const GoogleLoginButton = () => (
  <Box>
    <Button
      size="lg"
      width="full"
      mx="6"
      maxW="md"
      borderRadius="full"
      bgColor="#3368bf"
      color="white"
      colorScheme="blue"
      leftIcon={<img src="google.svg" alt="구글 로고" style={{ padding: 8 }} />}
    >
      구글 계정으로 시작하기
    </Button>
  </Box>
);

export default GoogleLoginButton;
