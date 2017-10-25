import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Container,
  Label,
  ActionButton,
} from '../styled-components'

import Deck from './Deck'

class DeckList extends Component {
  handleActionButton = () => {
    this.props.navigation.navigate('DeckForm')
  }

  render() {
    return (
      <Container pad='none' style={{ flex: 1 }}>
        <Container>
          <Deck title='test' noOfCards='0' onPress={this.handleActionButton} />
          <Deck title='test' noOfCards='0' />
        </Container>
        <ActionButton
          onPress={this.handleActionButton}
          activeOpacity={0.4}
        >
          <Label>Button</Label>
        </ActionButton>
      </Container>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(DeckList)
