import React from 'react'
import { TouchableHighlight, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { CardContainer } from '../styled-components'

const Card = ({
                pad,
                style,
                children,
                onPress,
              }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
  >
    <CardContainer pad={pad} style={style}>
      {children}
    </CardContainer>
  </TouchableOpacity>
)

Card.defaultProps = {
  pad: 'medium',
  style: {},
  children: null,
  onPress: () => {
  },
}

Card.propTypes = {
  pad: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
  ]),
  onPress: PropTypes.func,
}

export default Card
