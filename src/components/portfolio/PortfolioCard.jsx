import {
	AspectRatio,
	Box,
	Button,
	Heading,
	Image,
	Skeleton,
	Stack,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	useDisclosure,
	useBreakpointValue,
	useColorModeValue,
	HStack,
	IconButton,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaGithub, FaLink } from 'react-icons/fa'
  
  export const PortfolioCard = (props) => {
	const { project, rootProps } = props
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { name, imageUrl, description, longDescription, sourceCode, projectURL } = project
	return (
	  <>
	  <Stack
		spacing={useBreakpointValue({
		  base: '4',
		  md: '5',
		})}
		{...rootProps}
	  >
		<Box position="relative" overflow={"hidden"} borderRadius={"lg"}>
		  <AspectRatio ratio={4 / 3}>
			<Image
			  src={imageUrl}
			  transform={'scale(1)'}
			  alt={name}
			  draggable="false"
			  fallback={<Skeleton />}
			  objectFit={"cover"}
			  transition="0.3s ease-in-out"
			  _hover={{
				  transform: 'scale(1.05)',
				}}
			/>
		  </AspectRatio>
		</Box>
		<Stack>
		  <Stack spacing="1">
		  <Heading as={'h3'} size={'md'}> {name} </Heading>
			<Text color={'gray.500'} noOfLines={'3'}>
			  {description}
			</Text>
		  </Stack>
		</Stack>
		<Stack align="center">
		  <Button colorScheme="blue" onClick={onOpen} isFullWidth>
			Read more
		  </Button>
		</Stack>
	  </Stack>
  
	  <Modal onClose={onClose} isOpen={isOpen} isCentered>
		  <ModalOverlay />
		  <ModalContent>
		  <ModalHeader>{name}</ModalHeader>
		  <ModalCloseButton />
		  <ModalBody>
			  <Box position="relative" mb={4}>
				  <AspectRatio ratio={4 / 3}>
				  <Image
					  src={imageUrl}
					  alt={name}
					  draggable="false"
					  fallback={<Skeleton />}
					  borderRadius={useBreakpointValue({
					  base: 'md',
					  md: 'xl',
					  })}
				  />
				  </AspectRatio>
			  </Box>
			  <Text textAlign={'justify'}>
			  	{longDescription}
			  </Text>
			  <HStack mt={4}>
				  {
					  sourceCode && <IconButton
					  colorScheme={'green'}
					  as='a'
					  href={sourceCode}
					  rel="noreferrer"
					  target={'_blank'}
					  icon={<FaGithub />}
					  />
				  }
				{
					  projectURL && <IconButton
					  colorScheme={'blue'}
					  as='a'
					  href={projectURL}
					  rel="noreferrer"
					  target={'_blank'}
					  icon={<FaLink />}
					  />
				  }
			  </HStack>
		  </ModalBody>
		  <ModalFooter>
			  <Button onClick={onClose}>Close</Button>
		  </ModalFooter>
		  </ModalContent>
	  </Modal>
	  </>
	)
  }