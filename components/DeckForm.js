import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box, InputText } from '../styled-components'

import { deckAdd } from '../actions/decks'

class DeckForm extends Component {
  state = {
    title: '',
  }

  handleSubmit = () => {
    this.props.deckAdd(this.state)
    this.props.navigation.navigate('Home')
  }

  render() {
    const { title } = this.state

    return (
      <Card pad='medium'
            align='center'
            justify='flex-start'
            full={true}>
        <Heading align='center'>What is the title of your new deck?</Heading>
        <Box align='center'
             justify='space-around'
             style={{ marginTop: 20, height: 140, width: '100%' }}>
          <InputText placeholder='Title'
                     value={title}
                     onChangeText={text => this.setState({ title: text })} />
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

DeckForm.propTypes = {
  deckAdd: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(
  null,
  {
    deckAdd,
  },
)(DeckForm)
