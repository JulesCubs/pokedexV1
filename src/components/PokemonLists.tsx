import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
} from "react-native";
import { PokemonCard } from "./PokemonCard";

interface PokemonProps {
  id: string;
  name: string;
  type: string;
  order: string;
  image: string;
}

interface PokemonListsProps {
  pokemons: PokemonProps[];
  loadPokemons: () => void;
  isNext: string | null;
  // isLoading: boolean;
}

export const PokemonLists = ({
  pokemons,
  loadPokemons,
  isNext,
}: // isLoading,
PokemonListsProps) => {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => pokemon.id}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color={"#AEAEAE"}
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinnerContainer: {
    marginTop: 20,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
