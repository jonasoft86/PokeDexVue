<script setup lang="ts">
import type { Pokemon } from '../interfaces';
import PokemonCard from './PokemonCard.vue';

interface Props {
    pokemons: Pokemon[]
}

defineProps<Props>();

</script>


<template>
    
        <PokemonCard 
           v-for="pokemon of $props.pokemons" 
           :key="pokemon.id"
           :pokemon="pokemon" />

</template>

<style lang="scss" scoped>
.card-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>