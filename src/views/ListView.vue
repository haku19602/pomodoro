<template>
  <v-container>
    <v-row>

      <v-col cols="12">
        <h1 class="text-center teal-darken-4">事項</h1>
      </v-col>

      <!--
        :rules="[rules.required, rules.length]"
        驗證功能，輸入時執行 function
      -->
      <!--
        append-icon="mdi-plus"
        append 後面加一個 icon
      -->
      <!--
        @keydown.enter="addItem(newItem)"
        不能這樣寫，沒過驗證 enter 也會新增資料
      -->
      <v-col cols="12">

        <v-table>
          <thead class="bg-deep-orange-lighten-5 text-h6">
            <tr>
              <th>名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="item.id">
              <td>
                <span v-show="!item.edit">{{ item.name }}</span>
                <v-text-field
                  v-show="item.edit"
                  v-model="item.model"
                  :rules="[rules.required, rules.length]"
                  ref="editItemInput"
                  @keydown.enter="onEditInputSubmit(item.id, i)"
                  autofocus
                ></v-text-field>
              </td>
              <td>
                <template v-if="!item.edit">
                  <!--
                    <v-btn icon="mdi-pencil" variant="text" color="green" @click="item.edit = true"></v-btn>
                  -->
                  <v-btn
                    icon="mdi-pencil"
                    variant="text"
                    color="green"
                    @click="editItem(item.id)"
                  ></v-btn>
                  <v-btn
                    icon="mdi-delete"
                    variant="text"
                    color="red"
                    @click="delItem(item.id)"
                  ></v-btn>
                </template>
                <template v-else>
                  <v-btn
                    icon="mdi-check"
                    variant="text"
                    color="green"
                    @click="onEditInputSubmit(item.id, i)"
                  ></v-btn>
                  <v-btn
                    icon="mdi-undo"
                    variant="text"
                    color="red"
                    @click="cancelEditItem(item.id)"
                  ></v-btn>
                </template>
              </td>
            </tr>
            <tr v-if="items.length === 0">
              <td colspan="2">沒有事項</td>
            </tr>
          </tbody>
        </v-table>

        <v-text-field class="add-item"
          variant="solo-filled"
          label="新增事項"
          v-model="newItem"
          :rules="[rules.required, rules.length]"
          append-icon="mdi-plus"
          ref="newItemInput"
          @click:append="onInputSubmit"
          @keydown.enter="onInputSubmit"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <h1 class="text-center teal-darken-4">已完成事項</h1>
      </v-col>
      <v-col col="12">
        <v-table>
          <thead class="bg-deep-orange-lighten-5 text-h6">
            <tr>
              <th>名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in finishedItems" :key="item.id">
              <td>{{ item.name }}</td>
              <td>
                <v-btn
                  icon="mdi-delete"
                  variant="text"
                  color="red"
                  @click="delFinishedItem(item.id)"
                ></v-btn>
              </td>
            </tr>
            <tr v-if="finishedItems.length === 0">
              <td colspan="2">沒有已完成事項</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { items, finishedItems } = storeToRefs(list)
const { addItem, editItem, delItem, cancelEditItem, confirmEditItem, delFinishedItem } = list

const newItem = ref('')
const newItemInput = ref(null)
const editItemInput = ref([])

const onInputSubmit = async () => {
  const validate = await newItemInput.value.validate()
  console.log(validate)
  if (validate.length > 0) return
  addItem(newItem.value)
  newItemInput.value.reset()
}

const onEditInputSubmit = async (id, i) => {
  const validate = await editItemInput.value[i].validate()
  if (validate.length > 0) return
  confirmEditItem(id)
}

// 內建驗證，
const rules = {
  // value 是輸入的值
  required: (value) => {
    // '123' = string
    // !'123' = false
    // !!'123' = true
    // return !!value || 'asdasd'
    return Boolean(value) || '欄位必填'
  },
  length: (value) => {
    return value.length >= 3 || '必須三個字以上'
  }
}
</script>

<style>
.add-item{
  width: 30%;
  margin-left: auto;
}

.teal-darken-4{
  color: #004D40;
}
</style>
