import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, Switch } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Label, Box, THEME } from '../styled-components'

import { updateSettings, fetchSettings } from '../utils/api'
import { settingsUpdate } from '../actions/settings'

class Settings extends Component {
  async componentWillMount() {
    const settings = await fetchSettings()

    if (settings) {
      this.props.settingsUpdate(settings)
    }
  }

  handleDailyNotificationChange = async () => {
    const { dailyNotification } = this.props

    await updateSettings({ dailyNotification: !dailyNotification })
    this.props.settingsUpdate({ dailyNotification: !dailyNotification })
  }

  render() {
    const { dailyNotification } = this.props

    return (
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <KeyboardAvoidingView behavior='padding'>
          <Card pad='none'
                align='center'
                justify='flex-start'
                full={true}>
            <Box align='center'
                 justify='space-between'
                 direction='row'
                 style={{ width: '100%', borderBottomWidth: 1, borderColor: THEME.colorIndex.border }}>
              <Label>Daily Notification</Label>
              <Switch value={dailyNotification}
                      onValueChange={this.handleDailyNotificationChange} />
            </Box>
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

Settings.defaultProps = {
  dailyNotification: false,
}

Settings.propTypes = {
  settingsUpdate: PropTypes.func.isRequired,
  dailyNotification: PropTypes.bool,
}

const mapStateToProps = ({ settings }) => ({
  ...settings,
})

export default connect(mapStateToProps, { settingsUpdate })(Settings)
