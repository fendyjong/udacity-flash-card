import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box, InputText } from '../styled-components'
import Styles from '../styled-components/Styles'

class CardForm extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleSubmit = () => {
    this.props.navigation.navigate('DeckDetail')
  }

  render() {
    const { question, answer } = this.state

    return (
      <Card style={StyleSheet.flatten([Styles['shadow-1'], Styles.marginTopMedium])}
            full={true}
            align='center'
            justify='center'>
        <Box align='center'
             style={{ width: '100%' }}>
          <InputText placeholder='Question'
                     value={question}
                     onChangeText={this.handleInputTitle} />
          <InputText placeholder='Answer'
                     value={answer}
                     onChangeText={this.handleInputTitle} />
        </Box>
        <Box align='baseline'
             justify='space-around'
             style={{ marginTop: 100, height: 140 }}>
          <Button colorIndex='brand'
                  style={{ width: 160 }}
                  onClick={this.handleSubmit}>
            <Label colorIndex='light-1'>Submit</Label>
          </Button>
        </Box>
      </Card>
    )
  }
}

export default connect()(CardForm)
