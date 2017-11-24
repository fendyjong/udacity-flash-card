import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Box, InputText } from '../styled-components'
import Styles from '../styled-components/Styles'

import { cardAdd } from '../actions/decks'
import { addCard } from '../utils/api'

class CardForm extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleSubmit = async () => {
    const { deck: { key }, navigation } = this.props
    const { question, answer } = this.state

    await addCard({ deckKey: key, ...this.state })
    this.props.cardAdd({ deckKey: key, question, answer })

    navigation.navigate('DeckDetail')
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
                     onChangeText={text => this.setState({ question: text })} />
          <InputText placeholder='Answer'
                     value={answer}
                     onChangeText={text => this.setState({ answer: text })} />
        </Box>
        <Box align='baseline'
             justify='space-around'
             style={{ marginTop: 100, height: 140 }}>
          <Button colorIndex='brand'
                  style={{ width: 160 }}
                  onPress={this.handleSubmit}>
            <Label colorIndex='light-1'>Submit</Label>
          </Button>
        </Box>
      </Card>
    )
  }
}

CardForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  deck: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
  cardAdd: PropTypes.func.isRequired,
}

const mapStateToProps = ({ deck }) => ({
  deck,
})

export default connect(mapStateToProps, { cardAdd })(CardForm)
