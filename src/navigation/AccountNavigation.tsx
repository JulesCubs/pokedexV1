import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountScreen } from "../screens/Account"

const Stack = createNativeStackNavigator()

export const AccountNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen name="Account" component={AccountScreen} options={{ title: 'Mi cuenta' }} />
        </Stack.Navigator>
    )
}