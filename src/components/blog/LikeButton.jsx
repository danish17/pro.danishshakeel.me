import { Icon, IconButton, LightMode } from '@chakra-ui/react'
import * as React from 'react'
import { AiOutlineLike } from 'react-icons/ai'

export const LikeButton = (props) => (
  <LightMode>
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      _hover={{
        transform: 'scale(1.1)',
      }}
      sx={{
        ':hover > svg': {
          transform: 'scale(1.1)',
        },
      }}
      transition="all 0.15s ease"
      icon={<Icon as={AiOutlineLike} transition="all 0.15s ease" />}
      boxShadow="base"
      {...props}
    />
  </LightMode>
)