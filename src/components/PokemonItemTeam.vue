<script setup lang="ts">
    import { usePokemonTeams } from '../store/pokemonTeam';
    import { useRouter } from 'vue-router';
    import type { Pokemon } from '../interfaces';

    interface Props {
        pokemon: Pokemon
    }

    defineProps<Props>();

    const router = useRouter();
    const store = usePokemonTeams();

    const goTo = (idPage:number) => {
        router.push(
            {
                name: 'pokemon-id',
                params: {id: idPage}
            }
        );
    }

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
            <button 
                class="botonSelect" 
                @click="goTo(pokemon.id)" >
                    Seleccionar
            </button>
            <button 
                class="botonSelect" 
                @click="store.deletePokemon(pokemon)" >
                    Eliminar
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/pokemonTypes.scss";
@use "../assets/scss/components/pokemonCard.scss";
</style>