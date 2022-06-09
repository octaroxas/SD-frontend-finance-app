import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from "./authStack.routes";

export default function ApplicationRoutes() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}