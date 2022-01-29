import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Skeleton,
} from '@chakra-ui/react';

export const BlogCard = (props) => {
	var postPublishedDate = new Date(props.publishedDate);
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	return (
		<Box
        maxW={'100%'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
		  overflow={'hidden'}>
          <Image
            src={props.imageUrl}
			alt={props.imageAlt}
			fit={'cover'}
			fallback={<Skeleton />}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {props.category}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
			as='a'
			href={props.postUrl}
			target={'_blank'}
			_hover={{
				textDecoration: 'underline',
			}}>
            {props.title}
          </Heading>
          <Text color={'gray.500'} noOfLines={3}>
            {props.excerpt.replace(/<[^>]*>?/gm, '')}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={props.authorAvatar}
            alt={props.authorName}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{props.author}</Text>
            <Text color={'gray.500'}>{postPublishedDate.toLocaleDateString("en-US", options)}</Text>
          </Stack>
        </Stack>
      </Box>
	);
}