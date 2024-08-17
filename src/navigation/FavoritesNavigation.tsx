import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FavoriteScreen } from "../screens/Favorites"

const Stack = createNativeStackNavigator()

export const FavoritesNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen name="Favorite" component={FavoriteScreen} options={{ title: 'Favoritos' }} />
        </Stack.Navigator >
    )
}