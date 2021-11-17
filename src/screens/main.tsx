import * as React from 'react'
import { Box, Center, Text, VStack, useColorModeValue } from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import TaskItem from '../components/task-item'
import { useCallback } from 'react'

export default function MainScreen() {
  const [checked, setChecked] = React.useState(false)
  const handlePressCheckbox = React.useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box>
          <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
        </Box>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello World!</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
