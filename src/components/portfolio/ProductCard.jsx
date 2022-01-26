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
} from '@chakra-ui/react'
import * as React from 'react'

export const ProductCard = (props) => {
  const { product, rootProps } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { name, imageUrl, description, longDescription } = product
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
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
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
            <Box position="relative">
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
            {longDescription}
        </ModalBody>
        <ModalFooter>
            <Button onClick={onClose}>Close</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
    </>
  )
}
