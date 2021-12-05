import { Text, VStack } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'

const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <Heading size="2xl">Your details</Heading>
    </VStack>
  )
}

export default Details
