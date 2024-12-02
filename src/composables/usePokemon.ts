import { useQuery } from "@tanstack/vue-query";
import { getPokemonById } from "../helpers/";

const usePokemon = (id: string) => {
    const { isLoading, data: pokemon, isError, error } = useQuery(
        {
            queryKey: ['pokemon', id],
            queryFn: () => getPokemonById(id),
        }
    );

    return {
        pokemon,
        isLoading,
        isError,
        errorMessage: error, 
    }
}

export default usePokemon;