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
  constructor(props) {
    super(props)

    this.state = {
      gesture: {
        touch: false,
        move: false,
      },
    }

    //this.handleOnPress = this.handleOnPress.bind(this)
    //this.handleOnMove = this.handleOnMove.bind(this)
    //this.onResponderRelease = this.onResponderRelease.bind(this)
  }

  handleActionButton = () => {
    this.props.navigation.navigate('DeckForm')
  }

  handleOnPress = () => {
    console.log('onpress')
    this.setState({
      gesture: {
        touch: true,
        move: false,
      },
    })
  }

  handleOnMove = () => {
    console.log('move')
    // const { gesture } = this.state
    this.setState({
      gesture: {
        touch: false,
        move: true,
      },
    })
  }

  onResponderRelease = (url) => {
    const { gesture } = this.state
    const { navigation } = this.props

    console.log(gesture)

    if (gesture.touch) {
      navigation.navigate(url)
    }
  }

  render() {
    return (
      <Box pad='none' style={{ flex: 1 }}>
        <Box>
          <Deck title='test'
                noOfCards='0'
                onPress={this.handleOnPress}
                onMove={this.handleOnMove}
                onRelease={() => this.onResponderRelease('DeckDetail')} />
          <Deck title='test' noOfCards='0' />
        </Box>
        <ActionButton onPress={this.handleActionButton}
                      activeOpacity={0.4}>
          <Label>+</Label>
        </ActionButton>
      </Box>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(DeckList)
