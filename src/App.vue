<script setup lang="ts">
    import SideBar from './components/SideBar.vue';
    import {cart} from "./components/Cart"
    import Header from './components/Header.vue';
    import { computed } from 'vue'
    import { useRouter } from 'vue-router'
    import SideBarDetails from './components/SideBarDetails.vue';

    const router = useRouter()
    // computed
    const currentRoute = computed(() => {
        return router.currentRoute.value.name
    })
</script>

<template>
  <div class="wrapper">
      <Header />
      <SideBar
        v-show="currentRoute!='pokemon-id'"
        :isExpanded ="cart.isOpened"
        v-on:closeSideBar="cart.setIsOpened(false)"
      />
      <SideBarDetails
        v-show="currentRoute=='pokemon-id'"
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
