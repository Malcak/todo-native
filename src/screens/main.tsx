import React, { useState, useCallback } from 'react'
import { Box, Center, VStack, useColorModeValue } from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import TaskItem from '../components/task-item'

export default function MainScreen() {
  const [checked, setChecked] = useState(false)
  const [subject, setSubject] = useState('Task Item')
  const [isEditing, setEditing] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
        <Box>
          <TaskItem
            isEditing={isEditing}
            isDone={checked}
            onToggleCheckbox={handlePressCheckbox}
            subject={subject}
            onPressLabel={() => setEditing(true)}
            onChangeSubject={setSubject}
            onFinishEditing={() => setEditing(false)}
          />
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
