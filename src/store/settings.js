import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    alarms: [
      {
        id: 1,
        name: '鬧鐘',
        // new URL，在 js 裡面要取用 assets 裡的檔案
        file: new URL('@/assets/alarm.mp3', import.meta.url).href
      },
      {
        id: 2,
        name: 'Yay',
        file: new URL('@/assets/yay.mp3', import.meta.url).href
      }
    ],
    selectedAlarm: 1,
    notify: true
  }),
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(
        (alarm) => alarm.id === this.selectedAlarm
      )
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: ['selectedAlarm', 'notify']
  }
})
