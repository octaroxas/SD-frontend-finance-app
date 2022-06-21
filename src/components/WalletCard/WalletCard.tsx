import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {
    IWalletCard
} from "../../@interfaces/IWalletCard";
import { Svg, Path } from 'react-native-svg'
import { styles } from './styles'
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../api/api";

interface IRouteTransacrionDetailsProps {
    id: string
}


const WalletCard = ({ name, balance, id }: IWalletCard) => {

    const { navigate } = useNavigation()

    const [walletBalance, setWalletBalance] = useState(0)

    const getWallet = async () => {
        api.defaults.headers.common['Authorization'] = `Bearer 5|1YIVMgDth7RPGKjG42LlDeKpDrVwpGQAvF9DxSIO`
        const { data } = await api.get('/wallet')

        const wallet = data.map((wallet) => wallet.id === id)
        const { transactions } = wallet

        //setWallet(data)
    }

    const toWallet = () => {
        navigate('show_wallet', { id: id })
    }

    return (
        <TouchableOpacity style={styles.card} onPress={toWallet}>
            <Svg
                style={styles.walletIcon}
                width={40}
                height={40}
                viewBox='0 0 32 32'
            >
                <Path
                    d='M19.668 4.10799C19.6165 4.06673 19.5574 4.03606 19.4941 4.01775C19.4307 3.99943 19.3644 3.99383 19.2989 4.00127C19.2333 4.0087 19.1699 4.02903 19.1123 4.06108C19.0546 4.09312 19.0039 4.13625 18.963 4.18799L14.36 9.99999H11.809L17.396 2.94599C17.6005 2.68775 17.854 2.47246 18.1419 2.3125C18.4299 2.15255 18.7466 2.05106 19.0739 2.01389C19.4011 1.97672 19.7325 2.0046 20.049 2.09591C20.3655 2.18722 20.6608 2.34018 20.918 2.54599L26.065 6.66899C26.5517 7.05893 26.875 7.61669 26.9716 8.23279C27.0682 8.84888 26.931 9.47883 26.587 9.99899H23.973L24.88 8.94699C24.9239 8.8961 24.9571 8.83689 24.9776 8.77288C24.9981 8.70888 25.0055 8.64139 24.9994 8.57446C24.9932 8.50753 24.9736 8.44253 24.9418 8.38334C24.9099 8.32415 24.8665 8.272 24.814 8.22999L22.31 6.22399L19.342 9.99999H16.798L20.748 4.97399L19.668 4.10799V4.10799ZM6 6.99999C5.20435 6.99999 4.44129 7.31606 3.87868 7.87867C3.31607 8.44128 3 9.20434 3 9.99999V24.5C3 25.6935 3.47411 26.8381 4.31802 27.682C5.16193 28.5259 6.30653 29 7.5 29H24.5C25.6935 29 26.8381 28.5259 27.682 27.682C28.5259 26.8381 29 25.6935 29 24.5V15.5C29 14.3065 28.5259 13.1619 27.682 12.318C26.8381 11.4741 25.6935 11 24.5 11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 9.99999C5 9.73477 5.10536 9.48042 5.29289 9.29288C5.48043 9.10534 5.73478 8.99999 6 8.99999H10.58L12.176 6.99999H6ZM21 19H24C24.2652 19 24.5196 19.1053 24.7071 19.2929C24.8946 19.4804 25 19.7348 25 20C25 20.2652 24.8946 20.5196 24.7071 20.7071C24.5196 20.8946 24.2652 21 24 21H21C20.7348 21 20.4804 20.8946 20.2929 20.7071C20.1054 20.5196 20 20.2652 20 20C20 19.7348 20.1054 19.4804 20.2929 19.2929C20.4804 19.1053 20.7348 19 21 19Z'
                    fill='#fff'
                />
            </Svg>
            <View>
                <Text style={styles.walletName}>{name}</Text>
                <Text style={styles.walletBalance} >R$ {balance}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default WalletCard