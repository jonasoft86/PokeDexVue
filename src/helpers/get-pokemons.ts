import pokemonApi from "../api/api"
import type { PokemonListResponse, Pokemon, PokemonResponse } from "../interfaces"

const getPokemons = async(): Promise<Pokemon[]> => {
    const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=25');
    const pokemonPromises: Promise<Pokemon>[] = [];
    for (const { url } of data.results) {
        const pokemonPromise: Promise<Pokemon> = pokemonApi.get<PokemonResponse> (url).then (( {data}) => {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default,
                types: data.types,
                sprites: data.sprites
            }
        });
        pokemonPromises.push(pokemonPromise);
    }
    const pokemonList = await Promise.all (pokemonPromises);

    return pokemonList;
}

export default getPokemons;