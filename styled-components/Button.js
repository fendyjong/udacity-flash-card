import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Button = styled.TouchableOpacity`
  border-radius: 3px;
  padding: 8px;
  margin: 0 8px;
  border: 2px solid ${props => props.theme.primary_color};

  ${props => props.primary && `
    background: ${props.theme.primary_color};
  `}
`

export default Button
