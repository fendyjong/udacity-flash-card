import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Heading } from '../styled-components'
import Styles from '../styled-components/Styles'

const Deck = ({
                title,
                noOfCards,
                onPress,
              }) => (
  <TouchableOpacity style={StyleSheet.flatten([Styles.marginTopMedium])}
                    onPress={onPress}
                    activeOpacity={0.8}>
    <Card style={StyleSheet.flatten([Styles['shadow-1'], Styles.alignCenter])}>
      <Heading>{title}</Heading>
      <Heading tag='h4' colorIndex='grey-4-a'>{noOfCards} Cards</Heading>
    </Card>
  </TouchableOpacity>
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
