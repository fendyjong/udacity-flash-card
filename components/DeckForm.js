import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button, Label } from '../styled-components'
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
      <Card style={StyleSheet.flatten([Styles['shadow-1'], Styles.marginTopMedium])}>
        <TextInput
          style={{ width: '100%', paddingTop: 8, paddingBottom: 8 }}
          placeholder='Title'
          value={title}
          onChangeText={this.handleInputTitle}
        />
        <Button>
          <Label>Submit</Label>
        </Button>
      </Card>
    )
  }
}

export default connect()(DeckForm)
