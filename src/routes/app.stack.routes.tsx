import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TransactionDetails from "../pages/TransactionDetails/TransactionDetails";
import Tabs from "./tab.routes";
import EditProfile from "../pages/EditProfile/EditProfile";
import { EditTransaction } from "../pages/EditTransaction/EditTransaction";

const { Screen, Navigator } = createNativeStackNavigator()

export default function AppStack() {
    return (
        <Navigator
            initialRouteName="main"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5971FF',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff'
                },
            }}
        >
            <Screen
                options={{ headerShown: false }}
                component={Tabs}
                name="main"
            />
            <Screen options={{
                headerTitle: 'Detalhes da transação',
            }}
                name="transaction_details"
                component={TransactionDetails}
            />

            <Screen options={{
                headerTitle: 'Editar perfil',
            }}
                name="edit_profile"
                component={EditProfile}
            />

            <Screen options={{
                headerTitle: 'Editar transação',
            }}
                name="edit_transaction"
                component={EditTransaction}
            />

        </Navigator>
    )
}