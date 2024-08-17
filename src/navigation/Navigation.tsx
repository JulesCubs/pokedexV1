import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import { FavoritesNavigation } from "./FavoritesNavigation";
import { PokedexNavigation } from "./PokedexNavigation";
import { AccountNavigation } from "./AccountNavigation";

const Tab = createBottomTabNavigator();


export const Navigation = () => {
    const renderIcon = () => {
        return (
            <Image
                source={require('../assets/pokeball.png')}
                style={{ width: 50, height: 50, top: -15 }}
            />
        )
    }
    return (
        <Tab.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: "",
                headerShadowVisible: false,
            }} >
            <Tab.Screen
                name="Account"
                component={AccountNavigation}
                options={{
                    tabBarLabel: "Mi cuenta",
                    tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="Pokedex"
                component={PokedexNavigation}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderIcon()
                }} />
            <Tab.Screen
                name="Favorite"
                component={FavoritesNavigation}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}
