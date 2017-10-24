import { View } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
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

const Header = Container.extend`
  flex-direction: row;
  padding: 8px;
  background-color: ${props => props.theme.colorIndex['light-1']};
  justify-content: space-between;
  align-items: center;
  
  ${props => props.colorIndex && `
    background-color: ${props.theme.colorIndex[props.colorIndex]};
  `}
`

const CardContainer = Container.extend`
  background-color: ${props => props.theme.colorIndex['light-1']};
  border-radius: 2px;
`

export {
  Container,
  CardContainer,
  Header,
}
