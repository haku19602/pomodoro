<template>
  <v-app>
    <!--
      https://vuetifyjs.com/en/styles/colors/#material-colors
      找 color="名稱"
    -->
    <v-app-bar color="red-darken-4">
      <v-container class="d-flex align-center">
        <v-app-bar-title class="text-h5 font-weight-black">番茄鐘</v-app-bar-title>
        <!--
          https://pictogrammers.com/library/mdi/
          找 icon 名字
        -->
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-list-status" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- Component = 目前該顯示的路由元件 -->
      <router-view v-slot="{ Component }">
        <!--
          keep-alive 保持被包住的元件不被銷毀
          使用 include 指定只有 HomeView 這個元件不被銷毀
        -->
        <!--
          component = 動態元件
          使用 is 綁定的原件
        -->
        <keep-alive include="HomeView">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>

    <v-footer class="bg-teal-darken-4 text-center d-flex flex-column" id="footer">
      <div class="pt-0">
        一寸光陰一寸金，寸金難買寸光陰
      </div>
      <v-divider></v-divider>
      <div>
        {{ new Date().getFullYear() }} — <strong>hakuPomodoro</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
#footer{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
