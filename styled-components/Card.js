import React from 'react'
import PropTypes from 'prop-types'
import { CardBox } from '../styled-components'

/**
 * Card styling
 *
 * @param pad
 * @param style
 * @param justify
 * @param align
 * @param full
 * @param children
 * @constructor
 */
const Card = ({
                pad,
                style,
                justify,
                align,
                full,
                children,
              }) => (
  <CardBox pad={pad}
           style={style}
           justify={justify}
           align={align}
           full={full}>
    {children}
  </CardBox>
)

Card.defaultProps = {
  pad: 'medium',
  style: {},
  justify: '',
  align: '',
  full: false,
  children: null,
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
}

export default Card
