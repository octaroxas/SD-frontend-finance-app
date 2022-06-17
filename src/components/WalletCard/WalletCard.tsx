import React from "react";
import {
    Text,
    View
} from "react-native";
import {
    IWalletCard
} from "../../@interfaces/IWalletCard";
import { Svg, Path } from 'react-native-svg'

const WalletCard = ({ name, balance }: IWalletCard) => {

    return (
        <View>
            <Text>{name}</Text>
            <Text>R$ {balance}</Text>
        </View>
    )
}

export default WalletCard