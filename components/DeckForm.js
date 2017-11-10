import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label, Heading, Box, InputText } from '../styled-components'
import Styles from '../styled-components/Styles'

class DeckForm extends Component {
  state = {
    title: '',
  }

  handleInputTitle = (title) => {
    this.setState(() => ({
      title,
    }))
  }

  render() {
    const { title } = this.state

    return (
      <Card pad='medium'
            align='center'
            justify='flex-start'
            full={true}>
        <Heading align='center'>What is the title of your new deck?</Heading>
        <Box align='center'
             justify='space-around'
             style={{ marginTop: 20, height: 140, width: '100%' }}>
          <InputText placeholder='Title'
                     value={title}
                     onChangeText={this.handleInputTitle} />
          <Button colorIndex='brand'
                  style={{ width: 160 }}>
            <Label colorIndex='light-1'>Submit</Label>
          </Button>
        </Box>
      </Card>
    )
  }
}

export default connect()(DeckForm)
