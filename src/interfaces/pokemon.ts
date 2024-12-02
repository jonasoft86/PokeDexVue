import { Sprites, Type } from "./pokemonResponse";

export interface Pokemon
{
    id: number;
    name: string;
    frontSprite: string;
    types: Type[];
    sprites: Sprites;
}