import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box } from '../styled-components'
import Styles from '../styled-components/Styles'

class Quiz extends Component {
  state = {
    title: '',
  }

  render() {
    const { title } = this.state
    const { navigation } = this.props

    return (
      <Card full={true}
            align='center'
            justify='center'>
        <Box align='center'>
          <Heading>Question</Heading>
          <Heading tag='h4' colorIndex='grey-4-a'>Answer Anchor</Heading>
        </Box>
        <Box align='baseline'
             justify='space-around'
             style={{ marginTop: 100, height: 140 }}>
          <Button style={{ width: 160 }}
                  colorIndex='ok'
                  align='center'
                  onPress={() => navigation.navigate('CardForm')}>
            <Label colorIndex='light-1'>Correct</Label>
          </Button>
          <Button colorIndex='critical'
                  style={{ width: 160 }}>
            <Label colorIndex='light-1'>Incorrect</Label>
          </Button>
        </Box>
      </Card>
    )
  }
}

export default connect()(Quiz)
