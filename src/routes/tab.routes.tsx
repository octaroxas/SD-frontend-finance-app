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
            initialRouteName="Dashboard"
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: '#192043',
                tabBarStyle: {
                    height: 60,
                    backgroundColor: '#3B405A',
                },
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#647AFF',
                tabBarLabelStyle: {
                    marginBottom: 5,
                    fontWeight: 'bold'
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