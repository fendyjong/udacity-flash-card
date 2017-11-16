import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Heading } from '../styled-components'
import Styles from '../styled-components/Styles'

const Deck = ({
                title,
                noOfCards,
                onPress,
                onMove,
                onRelease,
              }) => (
  <Card style={StyleSheet.flatten([Styles['shadow-1'], Styles.marginTopMedium, Styles.alignCenter])}
        onPress={onPress}
        onMove={onMove}
        onRelease={onRelease}>
    <Heading>{title}</Heading>
    <Heading tag='h4' colorIndex='grey-4-a'>{noOfCards} Cards</Heading>
  </Card>
)

Deck.defaultProps = {
  title: '',
  noOfCards: '',
  onPress: () => {
  },
  onMove: () => {
  },
  onRelease: () => {
  },
}

Deck.propTypes = {
  title: PropTypes.string,
  noOfCards: PropTypes.string,
  onPress: PropTypes.func,
  onMove: PropTypes.func,
  onRelease: PropTypes.func,
}

export default connect()(Deck)
