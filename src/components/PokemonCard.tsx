import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import getColorByType from "../utils/GetColorByType";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";

interface PokemonProps {
  id: string;
  name: string;
  type: string;
  order: string;
  image: string;
}

interface PokemonCardProps {
  pokemon: PokemonProps;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigation = useNavigation();

  const pokemonColor = getColorByType(pokemon.type);

  const goToPokemon = () => {
    // console.log(pokemon.name, pokemon);
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  const bgStyles = {
    backgroundColor: pokemonColor,
    ...styles.bgStyles,
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={[bgStyles, styles.bgStyles]}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, "0")}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Text>{pokemon.type}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    margin: 5,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "white",
    fontSize: 11,
  },
  type: {
    flex: 1,
  },
  image: {
    position: "absolute",
    bottom: 10,
    right: 2,
    width: 80,
    height: 80,
  },
});
