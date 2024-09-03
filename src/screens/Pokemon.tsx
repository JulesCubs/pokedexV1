import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getPokemonDetailsApi } from "../api/Pokemon";

interface pokemon {
  id: string;
  name: string;
}

export const PokemonScreen = ({ navigation, route: { params } }: props) => {
  console.log(params.id);
  const [pokemon, setPokemon] = useState<pokemon | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, []);

  if (!pokemon) return null;

  return (
    <View>
      <Text>Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
};
