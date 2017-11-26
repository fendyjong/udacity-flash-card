import { SETTINGS_UPDATE } from './index'

/**
 * update redux settings data
 *
 * @param settings
 */
export const settingsUpdate = settings => ({
  type: SETTINGS_UPDATE,
  settings,
})
