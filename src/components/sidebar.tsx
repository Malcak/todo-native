import React, { useCallback } from 'react'
import {
  Avatar,
  Center,
  Heading,
  IconButton,
  HStack,
  VStack,
  useColorModeValue
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from './animated-color-box'
import ThemeToggle from './theme-toggle'
import MenuButton from './menu-button'

const SideBar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'primary.800')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.500')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.100')
            }}
          />
        </HStack>
        <Avatar
          source={require('../assets/avatar-image.png')}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor={useColorModeValue('orange.300', 'amber.600')}
          borderWidth={3}
        />
        <Heading mb={4} size="xl">
          Malcak
        </Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Task
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          About
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
}

export default SideBar
