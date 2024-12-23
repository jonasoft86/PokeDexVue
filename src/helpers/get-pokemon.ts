import pokemonApi from "../api/api";
import type { Pokemon, PokemonResponse } from "../interfaces"

const getPokemonById = async(id: string): Promise<Pokemon> => {
    const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${ id }`);
    
    return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
        types: data.types,
        sprites: data.sprites,
        stats: data.stats,
    }
}

export default getPokemonById;