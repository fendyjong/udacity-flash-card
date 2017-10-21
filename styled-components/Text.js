import { Text } from 'react-native'
import styled from 'styled-components/native'

const StyledText = styled.Text`
  color: ${props => props.theme.primary_color};

  ${props => props.primary && `
    color: ${props.theme.primary_color};
  `}
`

export default StyledText
