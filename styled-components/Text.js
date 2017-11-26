import { Text } from 'react-native'
import styled from 'styled-components/native'

/**
 * Default Text styling
 */
const DefaultText = styled.Text`
  color: ${props => props.theme.colorIndex['grey-2']};
  font-size: 16px;
  
  ${props => props.colorIndex && `
    color: ${props.theme.colorIndex[props.colorIndex]};
  `}
  
  ${props => props.align && `
    text-align: ${props.align};
  `}
`

/**
 * Label styling
 */
const Label = DefaultText.extend`
  ${props => props.size === 'small' && `
    font-size: 8px;
  `}
  ${props => props.size === 'medium' && `
    font-size: 16px;
  `}
  ${props => props.size === 'large' && `
    font-size: 32px;
  `}
`

/**
 * Heading styling
 */
const Heading = DefaultText.extend`
  font-size: 48px;
  
  ${props => props.tag === 'h1' && `
    font-size: 48px;
  `}
  ${props => props.tag === 'h2' && `
    font-size: 36px;
  `}
  ${props => props.tag === 'h3' && `
    font-size: 24px;
  `}
  ${props => props.tag === 'h4' && `
    font-size: 18px;
  `}
  ${props => props.tag === 'h5' && `
    font-size: 16px;
  `}
`

/**
 * Headline styling
 */
const Headline = DefaultText.extend`
  font-size: 64px;
  
  ${props => props.tag === 'small' && `
    font-size: 30px;
  `}
  ${props => props.tag === 'medium' && `
    font-size: 64px;
  `}
  ${props => props.tag === 'large' && `
    font-size: 96px;
  `}
`

/**
 * Paragraph styling
 */
const Paragraph = DefaultText.extend`
  font-size: 16px;
  
  ${props => props.tag === 'small' && `
    font-size: 14px;
  `}
  ${props => props.tag === 'medium' && `
    font-size: 16px;
  `}
  ${props => props.tag === 'large' && `
    font-size: 24px;
  `}
`


export {
  Label,
  Heading,
  Headline,
  Paragraph,
}
