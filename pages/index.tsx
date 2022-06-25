import { NextPage } from 'next';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import ServiceLayout from '@/components/ServiceLayout';
import GoogleLoginButton from '@/components/GoogleLoginButton';
import FirebaseClient from '@/models/firebase_client';

const provider = new GoogleAuthProvider();

const IndexPage: NextPage = () => (
  <ServiceLayout title="test">
    <Box maxW="md" mx="auto">
      <img src="/blah.svg" alt="메인로고" />
      <Flex justify="center">
        <Heading>#BlahBlah</Heading>
      </Flex>
    </Box>
    <Center my="3">
      <GoogleLoginButton
        onClick={() => {
          signInWithPopup(FirebaseClient.getInstance().Auth, provider)
            .then((result) => {
              console.info(result.user);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      />
    </Center>
  </ServiceLayout>
);

export default IndexPage;
