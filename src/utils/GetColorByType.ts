import { POKEMON_TYPE_COLORS } from "./Constants";

interface PokemonTypeColors {
  [key: string]: string;
}

const getColorByType = (type: any): PokemonTypeColors =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByType;
