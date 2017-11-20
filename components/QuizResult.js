import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box, Anchor } from '../styled-components'
import Styles from '../styled-components/Styles'

class QuizResult extends Component {
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
          <Heading>Result</Heading>
          <Heading tag='h4' colorIndex='grey-4-a'>{123} correct</Heading>
        </Box>
        <Box align='baseline'
             justify='space-around'
             style={{ marginTop: 100, height: 140 }}>
          <Button style={{ width: 160 }}
                  colorIndex='brand'
                  align='center'>
            <Label colorIndex='light-1'>Replay</Label>
          </Button>
          <Button style={{ width: 160 }}
                  onPress={() => navigation.navigate('Home')}>
            <Label>Back</Label>
          </Button>
        </Box>
      </Card>
    )
  }
}

export default connect()(QuizResult)
