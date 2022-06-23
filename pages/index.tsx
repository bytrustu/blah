import { NextPage } from 'next';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ServiceLayout from '@/components/ServiceLayout';
import GoogleLoginButton from '@/components/GoogleLoginButton';

const IndexPage: NextPage = () => (
  <ServiceLayout title="test">
    <Box maxW="md" mx="auto">
      <img src="/blah.svg" alt="메인로고" />
      <Flex justify="center">
        <Heading>#BlahBlah</Heading>
      </Flex>
    </Box>
    <Center my="3">
      <GoogleLoginButton />
    </Center>
  </ServiceLayout>
);

export default IndexPage;
