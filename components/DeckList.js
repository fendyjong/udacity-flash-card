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
  render() {
    return (
      <Container pad='none' style={{ flex: 1 }}>
        <Container>
          <Deck title='test' noOfCards='0' />
          <Deck title='test' noOfCards='0' />
        </Container>
        <ActionButton>
          <Label>Button</Label>
        </ActionButton>
      </Container>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(DeckList)
