import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from "../pages/Profile/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateWallet from "../pages/CreateWallet/CreateWallet";
import Statistics from "../pages/Statistics/Statistics";
import TransactionDetails from "../pages/TransactionDetails/TransactionDetails";
import AppStack from "./app.stack.routes";
import CreateTransaction from "../pages/CreateTransaction/CreateTransaction";
import { Feather, Ionicons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()


export default function Tabs() {

    return (
        <Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarInactiveTintColor: '#f1f1f1',
                headerStyle: {
                    backgroundColor: '#5971FF',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff'
                },
                tabBarStyle: {
                    height: 60,
                    backgroundColor: '#3B405A',
                },
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#647AFF',
                tabBarLabelStyle: {
                    marginBottom: 5,
                    fontWeight: 'bold'
                },
            }}
        >
            {/* <Screen
                options={{
                    tabBarIcon: () => (<Feather name="bar-chart-2" size={20} color='white' />),
                    headerShown: true
                }}
                name="Estatísticas" component={Statistics}
            /> */}
            <Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="wallet" color='white' size={20} />)
                }}
                name="Criar carteira" component={CreateWallet}
            />
            <Screen
                options={{
                    tabBarIcon: () => (<Ionicons name="home" size={20} color='white' />),
                    headerShown: false
                }}
                name="Dashboard"
                component={Dashboard}
            />
            <Screen
                options={{
                    tabBarIcon: () => (<Feather name="plus-circle" color='white' size={20} />)
                }}
                name="Nova transação"
                component={CreateTransaction}
            />
            <Screen
                options={{
                    headerShown: false,
                    tabBarIcon: () => (<Feather name="user" size={20} color='white' />)
                }}
                name="Perfil"
                component={Profile}
            />
        </Navigator>
    )
}