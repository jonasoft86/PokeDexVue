<script setup lang="ts">
    import { usePokemons } from '../composables/';
    const { count, pokemons, isLoading, isError, error } = usePokemons();
</script>

<template>
    <main>
          
          <div id="container" class="container">
            <h1 v-if="isLoading">Loading...</h1>
            <div v-else-if="isError">
            {{ error }}
            </div>
            <div v-else>
                <h2 class="title" id="title">Lista Pokemones - {{ count }}</h2>
                <h3 v-if="isLoading">Cargando lista Pokemons...</h3>
            </div>
          </div>
    </main>
</template>

<style lang="scss">
    @use "../assets/scss/pages/home";
</style>

