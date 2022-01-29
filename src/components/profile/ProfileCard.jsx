import {Center, Heading, Container, useColorModeValue, Text, Image, Flex, Badge, HStack } from "@chakra-ui/react"
import { SocialMediaLinks } from "../SocialMediaLinks";

export const ProfileCard = () => {
	return (
		<Container
		bgColor={useColorModeValue('rgba(237, 242, 247, 0.9)', 'rgba(23, 25, 35, 0.8)')}
		maxW={'380px'}
		borderRadius={'lg'}
		zIndex={'2'}
		p={4}
		boxShadow={'2xl'}>
			<Center>
			<Image src={'/profile-picture.jpg'} filter={'grayscale(80%)'} boxSize={'150px'} borderRadius={'full'} fit={'cover'} mb={4}/>
			</Center>
			<Heading as={'h3'} size={'lg'} textAlign={'center'}>
					Danish Shakeel
			</Heading>
			<Center>
			<Flex direction={'row'} wrap={'wrap'} justifyContent={'center'} mt={2}>
				<Badge colorScheme={'red'} m={1}>
					Digital Craftsman
				</Badge>
				<Badge colorScheme={'teal'} m={1}>
					Full Stack Developer
				</Badge>
				<Badge colorScheme={'yellow'} m={1}>
					Researcher
				</Badge>
			</Flex>
			</Center>
			<HStack my={4} justifyContent={'center'} alignItems={'center'}>
				<Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.300')}>📍 Budgam, Kashmir | 💼 Systems Eng. @ rtCamp</Text>
			</HStack>
			<Center>
				<SocialMediaLinks />
			</Center>
		</Container>
	);
}