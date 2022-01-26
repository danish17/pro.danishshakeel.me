import { Heading, Text, useColorModeValue, Container, SimpleGrid, Stack, StackDivider, Flex, Image, Button, Center } from '@chakra-ui/react';

export const ProfileContainer = () => {
    return (
    <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>Who am I?</Heading>
            <Text color={useColorModeValue('gray.500', 'gray.500')} fontSize={'lg'}>
              I am a <strong className={useColorModeValue('text--blue','text--yellow')}>21-year-old developer from Kashmir</strong>, India. I have been <strong className={useColorModeValue('text--blue','text--yellow')}>developing for the web for more than 4 years</strong>, and I am currently working as a <strong className={useColorModeValue('text--blue','text--yellow')}>Systems Engineer at rtCamp</strong>. I have a passion for learning new technologies and solving problems, and I am always looking to learn more. I also contribute to science and have published <strong className={useColorModeValue('text--blue','text--yellow')}>13 papers in international conferences and journals</strong>.
            </Text>
		    <Button mt="8" as="a" href="#" size="lg" colorScheme="teal" w={'fit-content'} fontWeight="bold">View Profile</Button>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
            </Stack>
          </Stack>
          <Flex justifyContent={'center'}>
              <Image
              src="/profile-picture.jpeg"
              height={{
                base: '250',  
                md: '300'}}
              width={{
                base: '250',  
                md: '350'}}
              borderRadius={'full'}
              objectFit='cover'
              alt="Danish Shakeel - Profile Picture"
              />
          </Flex>
        </SimpleGrid>
      </Container>
    );
}
