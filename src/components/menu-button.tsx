import React from 'react'
import { Button, Icon, useColorModeValue, IButtonProps } from 'native-base'
import { Feather } from '@expo/vector-icons'

interface Props extends IButtonProps {
  active: boolean
  icon: string
  children: React.ReactNode
}

const MenuButton = ({ active, icon, children, ...props }: Props) => {
  const colorScheme = useColorModeValue('trueGray', 'dark')
  const inactiveTextColor = useColorModeValue('trueGray.500', undefined)
  const pressedBgColor = useColorModeValue('dark.600', 'dark.100')

  return (
    <Button
      size="lg"
      color={colorScheme}
      bg={active ? 'trueGray.600' : 'transparent'}
      _pressed={{
        bg: pressedBgColor
      }}
      _text={{
        color: active ? 'trueGray.50' : inactiveTextColor
      }}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={0.5} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton
