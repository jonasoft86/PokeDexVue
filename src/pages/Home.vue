<script setup lang="ts">
    import PokemonCardList from '../components/PokemonCardList.vue';
    import { usePokemons } from '../composables/';
    import Pagination from '../components/Pagination.vue';

    const { pokemons, isLoading, isError, error, currentPage, getPage } = usePokemons();

</script>

<template>
    <main>
        <h2 class="title" id="title">Lista Pokemones</h2>
        <h1 v-if="isLoading">Cargando lista Pokemons...</h1>
        <div v-else-if="isError">{{ error }}</div>
        <Pagination 
                :pokemonPage="25" 
                :pokemonsTotal="151"  
                :currentPage="currentPage"
                @changePage="getPage" 
        />   
        <div id="container" class="container"> 
            <PokemonCardList v-if="!isLoading" :key=0 class="container" :pokemons="pokemons ?? []"></PokemonCardList>
        </div>
    </main>
</template>

<style lang="scss">
    @use "../assets/scss/pages/home";
</style>

