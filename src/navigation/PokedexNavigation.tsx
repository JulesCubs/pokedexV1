import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokedexScreen } from "../screens/Pokedex";
import { PokemonScreen } from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export const PokedexNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
