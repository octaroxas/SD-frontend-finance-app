import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TransactionDetails from "../pages/TransactionDetails/TransactionDetails";
import Tabs from "./tab.routes";

const { Screen, Navigator } = createNativeStackNavigator()

export default function AppStack() {
    return (
        <Navigator
            initialRouteName="main"
            screenOptions={{
            }}
        >
            <Screen
                options={{ headerShown: false }}
                component={Tabs}
                name="main"
            />
            <Screen name="transaction_details" component={TransactionDetails} />

        </Navigator>
    )
}