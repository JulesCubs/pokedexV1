import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/Pokemon";
import { Header } from "../components/Pokemon/Header";
import { Type } from "../components/Pokemon/Type";
import { Stats } from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

interface pokemon {
  id: string;
  name: string;
  sprites: any;
  order: number;
  types: any[];
  stats: any[];
}

export const PokemonScreen = ({ navigation, route: { params } }: props) => {
  // console.log(params.id);
  const [pokemon, setPokemon] = useState<pokemon | null>(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20, marginTop: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

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
    <ScrollView>
      <Header
        name={pokemon.name}
        image={pokemon.sprites.other["official-artwork"].front_default}
        order={pokemon.order}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types.map((type) => type.type.name)} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};
