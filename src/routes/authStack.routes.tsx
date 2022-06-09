import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const { Screen, Navigator } = createNativeStackNavigator()

export default function AuthStack() {
    return (
        <Navigator
            initialRouteName="login"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="login" component={Login} />
            <Screen name="signup" component={SignUp} />
        </Navigator>
    )
}