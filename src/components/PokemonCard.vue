<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces';


interface Props {
    pokemon: Pokemon
}

const props=defineProps<Props>();

const router = useRouter();

/*
const goTo = () => {
    router.push(
        {
            name: 'pokemon-id',
            params: {id: props.pokemon.id}
        }
    );
}
*/

</script>


<template>
    <div :class="`${ `Info tipo ${pokemon.types[0].type.name}`}`">
        <div class="nombre">
            <h1>{{pokemon.name}}</h1>
        </div>
        <div class="tipos" v-for="(poke, index) in pokemon.types">
            <div :key="index" class="tipo">
                <span>{{poke.type.name}}</span>
            </div>
        </div>
        <div>
            <img
                :src="pokemon.sprites.other?.dream_world?.front_default"
                :alt="pokemon.name"
                class="imagen"
            />
        </div>
        <div class="select">
            <button class="botonSelect" >
                Seleccionar
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/pokemonTypes.scss";
@use "../assets/scss/components/pokemonCard.scss";
</style>