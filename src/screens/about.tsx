import React from 'react'
import {
  Box,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

export default function AboutScreen() {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.png')}
      >
        <NavBar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/malcak.jpg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'teal')}
            size="lg"
            borderRadius="full"
            href="https://www.malcak.works"
            leftIcon={<Icon as={Feather} name="home" size="sm" opacity={0.5} />}
          >
            Homepage
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('light', 'blueGray')}
            size="lg"
            borderRadius="full"
            href="https://github.com/malcak"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Github
          </LinkButton>
          <Text fontSize="md" w="full">
            This application was made following a tutorial from a youtube
            channel called devaslife.
          </Text>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.youtube.com/devaslife"
            leftIcon={
              <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
            }
          >
            Go to YouTube channel
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}
