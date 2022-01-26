import { SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'

export const BlogGrid = (props) => {
  const columns = React.useMemo(() => {
    const count = React.Children.toArray(props.children).filter(React.isValidElement).length
    return {
      base: Math.min(1, count),
      md: Math.min(1, count),
      lg: Math.min(2, count),
      xl: Math.min(2, count),
    }
  }, [props.children])
  return (
    <SimpleGrid
      columns={columns}
      columnGap={{
        base: '4',
        md: '6',
      }}
      rowGap={{
        base: '8',
        md: '10',
      }}
      {...props}
    />
  )
}
