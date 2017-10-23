import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container, Header, Label, ActionButton, Heading } from '../styled-components'

import Deck from './Deck'

class DeckList extends Component {
  render() {
    return (
      <Container pad='none' style={{ flex: 1 }}>
        <Container>
          <Deck heading='test' description='0 card' />
          <Deck heading='test' description='0 card' marginTop={16} />
        </Container>
        <ActionButton>
          <Label>Button</Label>
        </ActionButton>
      </Container>
    )
  }
}

export default connect()(DeckList)
