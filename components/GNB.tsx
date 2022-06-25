import React, { memo, useMemo } from 'react';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { useAuth } from '@/context/authUser.context';

const GNB = () => {
  const { loading, signInWithGoogle, authUser, signOut } = useAuth();
  const authInitialized = useMemo(() => loading || authUser === null, [loading, authUser]);
  return (
    <Box borderBottom={1} borderStyle="solid" borderColor="gray.200" backgroundColor="white">
      <Flex minHeight="60px" py={{ base: 2 }} px={{ base: 4 }} align="center" maxW="md" mx="auto">
        <Spacer />
        <Box flex={1}>
          <img src="/logo.svg" alt="로고" style={{ height: 40 }} />
        </Box>
        <Box justifyContent="flex-end">
          {authInitialized ? <LogIn onClick={signInWithGoogle} /> : <LogOutBtn onClick={signOut} />}
        </Box>
      </Flex>
    </Box>
  );
};

const LogIn = memo(({ onClick }: { onClick: () => void }) => (
  <Button
    width="80px"
    fontSize="md"
    fontWeight={600}
    color="#fff"
    bg="pink.400"
    _hover={{
      bg: 'pink.300',
    }}
    onClick={onClick}
  >
    로그인
  </Button>
));

const LogOutBtn = memo(({ onClick }: { onClick: () => void }) => (
  <Button
    width="80px"
    fontSize="md"
    fontWeight={600}
    color="gray.400"
    bg="white"
    _hover={{
      color: 'gray.500',
    }}
    onClick={onClick}
  >
    로그아웃
  </Button>
));

export default memo(GNB);
