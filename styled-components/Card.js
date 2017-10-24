import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer } from '../styled-components'

const Card = ({
                pad,
                style,
                children,
              }) => (
  <CardContainer pad={pad} align='center' style={style}>
    {children}
  </CardContainer>
)

Card.defaultProps = {
  pad: 'medium',
  style: {},
  children: null,
}

Card.propTypes = {
  pad: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.array,
}

export default Card
