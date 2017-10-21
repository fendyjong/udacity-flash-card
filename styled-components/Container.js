import { View } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
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
`

export default Container
