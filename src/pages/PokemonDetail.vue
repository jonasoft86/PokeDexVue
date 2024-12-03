<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { usePokemon } from '../composables';

    const route = useRoute();

    const routeId = route.params.id
    const { pokemon, isLoading, isError, errorMessage } = usePokemon(routeId.toString());
</script>

<template>
    <main>
          <h2 class="title" id="title">Pokemon Detail</h2>
            <div id="container" class="container">
                <div :class="`${ `Info tipo ${pokemon?.types[0].type.name}`}`">
            <div class="nombre">
                <h1>{{pokemon?.name}}</h1>
            </div>

            <div class="tipos" v-for="(poke, index) in pokemon?.types">
                <div :key="index" class="tipo">
                    <span>{{poke.type.name}}</span>
                </div>
            </div>
            <div>
                <img
                    :src="pokemon?.sprites.other?.dream_world?.front_default"
                    :alt="pokemon?.name"
                    class="imagen"
                />
            </div>

            <div class="pokemon-stats">
                <div class="stat-row" v-for="(stat, index) in pokemon?.stats" :key="index">
                        <div>{{ stat.stat.name }}</div>
                        <div class="stat-bar">
                            <div class="stat-bar-bg" :style="{width: `${stat.base_stat-30}%`}">{{ stat.base_stat }}</div>
                        </div>
                </div>
            </div>

            </div>
          </div>
    </main>
</template>

<style lang="scss">
    @use "../assets/scss/pokemonTypes.scss";
    @use "../assets/scss/components/pokemonCard.scss";
    @use "../assets/scss/components/pokemonItemTeam.scss";

    .Info {
        display: flex;
        flex-direction: column;
        width: 250px;
    }
</style>