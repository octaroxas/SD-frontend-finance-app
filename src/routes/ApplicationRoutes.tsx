import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from "./authStack.routes";
import Tabs from "./tab.routes";

export default function ApplicationRoutes() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}