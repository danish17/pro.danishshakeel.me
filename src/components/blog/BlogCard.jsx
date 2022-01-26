import {
  AspectRatio,
  Box,
  Button,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
  HStack,
  useColorModeValue,
  Grid,
  Badge,
} from '@chakra-ui/react'
import * as React from 'react'
import { LikeButton } from './LikeButton'

export const BlogCard = (props) => {
  const { product, rootProps } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { name, imageUrl, description, longDescription, tags } = product
  return (
    <>
    <Stack>
        <Stack my={4}>
        <Heading as={'h3'} size={'md'}> {name} </Heading>
        <HStack>
            {console.log(tags)}
            {tags.map(tag => {
                return (
                <Badge as={'a'} variant={'subtle'}>
                    {tag}
                </Badge>
                )	
            })}
        </HStack>
    </Stack>
    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
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
        <LikeButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Like ${name}`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')} noOfLines={6}>
            {longDescription}
          </Text>
        </Stack>
        </Stack>
    </Grid>
    <Button colorScheme="blue" w={'fit-content'}>
          Read full post
    </Button>
    </Stack>
    </>
  )
}
