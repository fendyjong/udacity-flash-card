import { View } from 'react-native'
import styled from 'styled-components/native'

/**
 * Box container styling
 */
const Box = styled.View`
  padding: 16px;
  
  ${props => props.colorIndex && `
    background-color: ${props.theme.colorIndex[props.colorIndex]}
  `}
  
  ${props => props.pad === 'none' && `
    padding: 0;
  `}
  ${props => props.pad === 'small' && `
    padding: 8px;
  `}
  ${props => props.pad === 'medium' && `
    padding: 16px;
  `}
  ${props => props.pad === 'large' && `
    padding: 32px;
  `}
  ${props => props.pad && props.pad.horizontal === 'medium' && `
    padding-left: 16px;
    padding-right: 16px;
  `}
  ${props => props.pad && props.pad.vertical === 'none' && `
    padding-top: 0;
    padding-bottom: 0;
  `}
  
  ${props => props.css && `
    ${Object.keys(props.css).map(key => `${key}: ${props.css[key]}`)}
  `}

  ${props => props.direction && `
    flex-direction: ${props.direction};
  `}

  ${props => props.align && `
    align-items: ${props.align};
  `}
  
  ${props => props.justify && `
    justify-content: ${props.justify};
  `}
  
  ${props => props.wrap && `
    flex-wrap: ${props.wrap};
  `}
  
  ${props => props.full && `
    width: 100%;
    height: 100%;
  `}
`

/**
 * Top header container styling
 */
const Header = Box.extend`
  flex-direction: row;
  padding: 8px;
  background-color: ${props => props.theme.colorIndex['light-1']};
  justify-content: space-between;
  align-items: center;
  
  ${props => props.colorIndex && `
    background-color: ${props.theme.colorIndex[props.colorIndex]};
  `}
`

/**
 * Default card container styling
 */
const CardBox = Box.extend`
  background-color: ${props => props.theme.colorIndex['light-1']};
  border-radius: 2px;
`

export {
  Box,
  CardBox,
  Header,
}
