import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Skeleton,
  HStack,
  Badge,
} from '@chakra-ui/react';

export const BlogCard = (props) => {
	var postPublishedDate = new Date(props.publishedDate);
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const colorSchemes = ['red', 'teal', 'yellow', 'green', 'purple'];

	Array.prototype.random = function () {
		return this[Math.floor((Math.random()*this.length))];
	}

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
          h={'fit-content'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
		  overflow={'hidden'}>
          <Image
            src={props.imageUrl}
			alt={props.imageAlt}
			transform={'scale(1)'}
			draggable="false"
			fit={'cover'}
			fallback={<Skeleton />}
			transition="0.3s ease-in-out"
			  _hover={{
				  transform: 'scale(1.05)',
				}}
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
			rel="noreferrer"
			target={'_blank'}
			_hover={{
				textDecoration: 'underline',
			}}>
            {props.title}
          </Heading>
		  <Text
		  fontWeight={'medium'}
		  as='a'
		  href={props.categoryUrl}
		  rel="noreferrer"
		  target={'_blank'} 
		  color={useColorModeValue('gray.400', 'gray.600')}
		  _hover={{
			  textDecoration: 'underline',
		  }}>
			  Category: {props.categoryName}
		  </Text>
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
		<HStack wrap={'wrap'} justifyContent={'center'} mt={4}>
			  {props.tags.map((tag, index) => {
				  return (
					  <Badge key={index} my={1} colorScheme={colorSchemes.random()} as='a' href={tag.link} target={'_blank'} rel="noreferrer">
						  {tag.name}
					  </Badge>
				  );
			  })}
		  </HStack>
      </Box>
	);
}