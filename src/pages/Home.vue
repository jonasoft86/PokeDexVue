<script setup lang="ts">
    import PokemonCardList from '../components/PokemonCardList.vue';
    import { usePokemons } from '../composables/';
    const { count, pokemons, isLoading, isError, error } = usePokemons();
</script>

<template>
    <main>
        <h2 class="title" id="title">Lista Pokemones - {{ count }}</h2>
        <h1 v-if="isLoading">Cargando lista Pokemons...</h1>
        <div v-else-if="isError">{{ error }}</div>
          <div id="container" class="container">
            <PokemonCardList v-if="!isLoading" :key=0 class="container" :pokemons="pokemons ?? []"></PokemonCardList>
          </div>
    </main>
</template>

<style lang="scss">
    @use "../assets/scss/pages/home";
</style>

