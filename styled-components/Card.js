import React from 'react'
import PropTypes from 'prop-types'
import { CardBox } from '../styled-components'

const Card = ({
                pad,
                style,
                justify,
                align,
                full,
                children,
                onPress,
                onMove,
                onRelease,
              }) => (
  <CardBox pad={pad}
           style={style}
           justify={justify}
           align={align}
           full={full}
           onStartShouldSetResponderCapture={_ => true}
           onMoveShouldSetResponderCapture={_ => true}
           onResponderGrant={_ => onPress()}
           onResponderMove={_ => onMove()}
           onResponderRelease={_ => onRelease()}>
    {children}
  </CardBox>
)

// TODO https://facebook.github.io/react-native/docs/panresponder.html

Card.defaultProps = {
  pad: 'medium',
  style: {},
  justify: '',
  align: '',
  full: false,
  children: null,
  onPress: null,
  onMove: null,
  onRelease: null,
}

Card.propTypes = {
  pad: PropTypes.string,
  style: PropTypes.object,
  justify: PropTypes.string,
  align: PropTypes.string,
  full: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
  ]),
  onPress: PropTypes.func,
  onMove: PropTypes.func,
  onRelease: PropTypes.func,
}

export default Card
