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
              }) => (
  <Card
    style={StyleSheet.flatten([Styles['shadow-1'], Styles.marginTopMedium, Styles.alignCenter])}
    onPress={onPress}
  >
    <Heading>{title}</Heading>
    <Heading tag='h4' colorIndex='grey-4-a'>{noOfCards} Cards</Heading>
  </Card>
)

Deck.defaultProps = {
  title: '',
  noOfCards: '',
  onPress: () => {
  },
}

Deck.propTypes = {
  title: PropTypes.string,
  noOfCards: PropTypes.string,
  onPress: PropTypes.func,
}

export default connect()(Deck)
