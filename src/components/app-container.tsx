import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

type Props = {
  children: React.ReactNode
}

export default function AppContainer({ children }: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
