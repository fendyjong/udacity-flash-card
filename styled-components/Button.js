import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Label } from './Text'

const Button = styled.TouchableOpacity`
  border-radius: 3px;
  padding: 8px;
  margin: 0;
  border: 2px solid ${props => props.theme.colorIndex['grey-2']};
  background-color: ${props => props.theme.colorIndex['light-1']};
  align-items: center;
  
  ${props => props.flat && props.colorIndex && `
    border: 2px solid ${props.theme.colorIndex[props.colorIndex]};
  `}
  ${props => !props.flat && props.colorIndex && `
    border: 2px solid ${props.theme.colorIndex[props.colorIndex]};
    background-color: ${props.theme.colorIndex[props.colorIndex]};
  `}
`

const Anchor = Label.extend`
  padding: 16px;

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
`

const ActionButton = Button.extend`
  position: absolute;
  borderRadius: 30px;
  bottom: 24px;
  right: 24px;
  
  ${props => props.position === 'bottom-center' && `
    bottom: 24px;
    align-self: center;
  `}
  ${props => props.position === 'bottom-right' && `
    bottom: 24px;
    right: 24px;
  `}
  ${props => props.position === 'bottom-left' && `
    bottom: 24px;
    left: 24px;
  `}
`

export {
  Button,
  Anchor,
  ActionButton,
}
