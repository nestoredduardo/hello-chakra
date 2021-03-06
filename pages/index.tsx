import type { NextPage } from 'next'

import { Container, Flex } from '@chakra-ui/layout'
import Details from '@components/Details'
import Cart from '@components/Cart'

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

export default Home
