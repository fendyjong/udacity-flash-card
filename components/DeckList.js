import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Box,
  Label,
  ActionButton,
} from '../styled-components'

import Deck from './Deck'

class DeckList extends Component {
  handleActionButton = () => {
    this.props.navigation.navigate('DeckForm')
  }

  render() {
    const { navigation } = this.props

    return (
      <Box pad='none' style={{ flex: 1 }}>
        <Box>
          <Deck title='test' noOfCards='0' onPress={() => navigation.navigate('DeckDetail')} />
          <Deck title='test' noOfCards='0' />
        </Box>
        <ActionButton
          onPress={this.handleActionButton}
          activeOpacity={0.4}
        >
          <Label>+</Label>
        </ActionButton>
      </Box>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(DeckList)
