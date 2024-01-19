<template>
  <v-container>

    <v-row>
      <v-col cols="3">
        <v-col cols="12">
          <h1 class="text-center teal-darken-4">通知設定</h1>
        </v-col>

        <v-col cols="12">
          <v-radio-group inline v-model="notify">
            <v-radio label="開啟" :value="true"></v-radio>
            <v-radio label="關閉" :value="false"></v-radio>
          </v-radio-group>
        </v-col>
      </v-col>

      <v-col cols="9">
        <v-col cols="12">
          <h1 class="text-center teal-darken-4">鈴聲設定</h1>
        </v-col>

        <v-col cols="12">
          <v-table>
            <thead class="bg-deep-orange-lighten-5 text-h6">
              <tr>
                <th>名稱</th>
                <th>試聽</th>
                <th>選擇</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="alarm in alarms" :key="alarm.id">
                <td>{{ alarm.name }}</td>
                <td>
                  <audio :src="alarm.file" controls></audio>
                </td>
                <td>
                  <v-radio-group v-model="selectedAlarm">
                    <v-radio :value="alarm.id"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarm, notify } = storeToRefs(settings)
</script>

<style scoped>
:deep(.v-selection-control-group.v-selection-control-group--inline) {
  margin: auto
}
</style>
