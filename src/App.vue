<script setup lang="ts">
    import SideBar from './components/SideBar.vue';
    import {cart} from "./components/Cart"
    import Header from './components/Header.vue';
  
</script>

<template>
  <div class="wrapper">
      <Header />
      <SideBar
        :isExpanded ="cart.isOpened"
        v-on:closeSideBar="cart.setIsOpened(false)"
      />
      <RouterView />
  </div>
</template>

<style lang="scss">
  @use "./assets/scss/pages/home";
  @use "./assets/scss/main.scss";
  @use "./assets/scss/global.scss";
</style>
