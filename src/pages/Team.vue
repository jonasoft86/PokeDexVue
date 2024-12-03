<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { usePokemonTeams } from '../store/pokemonTeam';
    import PokemonCardTeams from '../components/PokemonCardTeams.vue';

    const store = usePokemonTeams();
    const pokemonTeams = storeToRefs(store);

</script>

<template>
    <main>
          <h2 class="title" id="title">Teams</h2>
          <div id="container" class="container"> 
            <PokemonCardTeams  :key=0 class="container" :pokemons="pokemonTeams.pokemonTeams.value ?? []"></PokemonCardTeams>
        </div>
    </main>
</template>

<style lang="scss">
    @use "../assets/scss/pages/home";
</style>
