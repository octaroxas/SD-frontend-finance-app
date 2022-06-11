import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from "./authStack.routes";
import Tabs from "./tab.routes";

import { AuthContext } from "../contexts/AuthContext";
import { ActivityIndicator, View, Text } from "react-native";
import Loading from "../components/Loading";
export default function ApplicationRoutes() {

    const { authenticated, loading } = useContext(AuthContext)

    if (loading) {
        return <Loading />
    }

    return authenticated ? <Tabs /> : <AuthStack />
    // return <Loading />

}