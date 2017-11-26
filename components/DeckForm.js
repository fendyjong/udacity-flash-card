import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box, InputText } from '../styled-components'

import { addDeck } from '../utils/api'

/**
 * Deck Form for create new Deck
 */
class DeckForm extends Component {
  state = {
    title: '',
    invalidForm: null,
  }

  /**
   * Handle submit form
   */
  handleSubmit = () => {
    // Validate form
    if (this.state.title.trim() !== '') {
      addDeck(this.state)
      this.props.navigation.navigate('Home')
    } else {
      this.setState({
        invalidForm: 'Please fill in title!',
      })
    }
  }

  render() {
    const { title, invalidForm } = this.state

    return (
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <KeyboardAvoidingView behavior='padding'>
          <Card pad='medium'
                align='center'
                justify='flex-start'
                full={true}>
            <Heading align='center'>What is the title of your new deck?</Heading>
            <Box align='center'
                 justify='space-around'
                 style={{ marginTop: 50, height: 160, width: '100%' }}>
              <InputText placeholder='Title'
                         value={title}
                         onChangeText={text => this.setState({ title: text })} />
              {invalidForm && <Label colorIndex='critical'>{invalidForm}</Label>}
              <Button colorIndex='brand'
                      style={{ width: 160 }}
                      onPress={this.handleSubmit}>
                <Label colorIndex='light-1'>Submit</Label>
              </Button>
            </Box>
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

DeckForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect()(DeckForm)
