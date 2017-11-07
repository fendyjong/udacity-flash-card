import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box } from '../styled-components'
import Styles from '../styled-components/Styles'

class DeckDetail extends Component {
  state = {
    title: '',
  }

  render() {
    const { title } = this.state

    return (
      <Card style={StyleSheet.flatten([Styles['shadow-1'], Styles.marginTopMedium])}
            full={true}
            align='center'
            justify='center'>
        <Box align='center'>
          <Heading>udacicards</Heading>
          <Heading tag='h4' colorIndex='grey-4-a'>3 Cards</Heading>
        </Box>
        <Box align='baseline'
             justify='space-around'
             style={{ marginTop: 100, height: 140 }}>
          <Button style={{ width: 160 }}
                  align='center'>
            <Label>Add Card</Label>
          </Button>
          <Button colorIndex='brand'
                  style={{ width: 160 }}>
            <Label colorIndex='light-1'>Start Quiz</Label>
          </Button>
        </Box>
      </Card>
    )
  }
}

export default connect()(DeckDetail)
