import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from "../pages/Profile/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateWallet from "../pages/CreateWallet/CreateWallet";
import Statistics from "../pages/Statistics/Statistics";

const { Navigator, Screen } = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#3B405A'
                }
            }}
        >
            <Screen name="Estatísticas" component={Statistics} />
            <Screen name="Carteira" component={CreateWallet} />
            <Screen name="Perfil" component={Profile} />
            <Screen name="Dashboard" component={Dashboard} />
        </Navigator>
    )
}