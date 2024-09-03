import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/Pokemon";
import { PokemonLists } from "../components/PokemonLists";

interface PokemonsProps {
  id: string;
  name: string;
  type: string;
  order: string;
  image: string;
}

export const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState<Array<PokemonsProps>>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      // setIsLoading(true);
      const response = await getPokemonApi(nextUrl);

      // setNextUrl(response.next);
      //   console.log("Response--->", response);

      const pokemonsArray = await Promise.all(
        response?.results?.map(async (pokemon: any) => {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
          };
        })
      );

      setPokemons([...pokemons, ...pokemonsArray]);
      setNextUrl(response.next);
    } catch (error) {
      console.log(error);
    }
    // finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <SafeAreaView>
      <View>
        <PokemonLists
          pokemons={pokemons}
          loadPokemons={loadPokemons}
          isNext={nextUrl}
          // isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
};
