import React from 'react'
import { StatusBar, View } from 'react-native'
import { Constants } from 'expo'

import { ThemeProvider } from 'styled-components/native'
import { THEME, Button, Text, Container } from './styled-components'


export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Container pad='none'>
          <Container
            style={{
              backgroundColor: THEME.primary_color,
              height: Constants.statusBarHeight,
            }}>
            <StatusBar translucent />
          </Container>
          <Container>
            <Button>
              <Text>Button</Text>
            </Button>

            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </Container>
        </Container>
      </ThemeProvider>
    )
  }
}
