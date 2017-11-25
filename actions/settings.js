import { SETTINGS_UPDATE } from './index'

export const settingsUpdate = settings => ({
  type: SETTINGS_UPDATE,
  settings,
})
