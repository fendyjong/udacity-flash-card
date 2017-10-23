import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CardContainer, Heading } from '../styled-components'

const Deck = ({
                pad,
                description,
                heading,
                marginTop,
              }) => (
  <CardContainer pad={pad} align='center' style={{ marginTop }}>
    <Heading>{heading}</Heading>
    <Heading tag='h4' colorIndex='grey-4-a'>{description}</Heading>
  </CardContainer>
)

Deck.defaultProps = {
  pad: 'medium',
  description: null,
  heading: null,
  marginTop: 0,
}

Deck.propTypes = {
  pad: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  marginTop: PropTypes.number,
}

export default connect()(Deck)
