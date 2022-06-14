import React, {
    createContext,
    useEffect,
    useState
} from "react";
import { Text, View, ActivityIndicator } from "react-native";
import api from "../api/api";
import Lottie from 'react-lottie'
import LottieLoading from '../assets/lotties/lottie-finance.json'
import AsyncStorage from '@react-native-async-storage/async-storage'


interface User {
    id: number;
    email: string;
    emailVerifiedAt: string;
    updatedAt: string;
    createdAt: string;
    //name: string;
}

interface IAuthContext {
    authenticated: boolean;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    user: User
    handleSignUp: (form: any) => Promise<void>;
    handleLogin: ({ credentials }: any) => Promise<void>;
    handleLogout?: () => void;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Loading = (message: string) => {

    const options = {
        loop: true,
        autoplay: true,
        animationData: LottieLoading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <View
        >
            {/* <Lottie
                options={options}
                height={200}
                width={200}
            /> */}

        </View>
    )
}

export const AuthContext = createContext({} as IAuthContext)

function AuthProvider({ children }: any) {

    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({} as User)
    const [loading, setLoading] = useState(false)

    const handleSignUp = async (form: any) => {
        setLoading(true)

        console.log(form)

        const credentialsForm = {
            name: form.name,
            email: form.email,
            password: form.password
        }

        try {

            const { data } = await api.post('https://finance.ianbrito.com.br/api/v1/register', credentialsForm)
            console.log(data)
            handleLogin({ name: form.name, email: form.email })
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    const handleLogin = async (credentials: any) => {
        setLoading(true)

        try {
            const { data } = await api.post('https://finance.ianbrito.com.br/api/v1/login', credentials)
            console.log(credentials)
            AsyncStorage.setItem('@Finance-app:user', JSON.stringify(data.user))
            AsyncStorage.setItem('@Finance-app:token', JSON.stringify(data.token))
            setAuthenticated(true)
            setLoading(false)
            console.log(authenticated)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () => {
        console.log('logout')
        AsyncStorage.removeItem('@Finance-app:user')
        AsyncStorage.removeItem('@Finance-app:token')
        setAuthenticated(false)
    }

    useEffect(() => {

        async function getLocalData() {
            setLoading(true)

            try {
                const user = await AsyncStorage.getItem('@Finance-app:user');
                const token = await AsyncStorage.getItem('@Finance-app:token');

                console.log(user, token)
                if (user && token) {
                    setUser(JSON.parse(user))
                    setAuthenticated(true)
                    setLoading(false)
                } else {
                    setAuthenticated(false)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
            }

        }

        getLocalData()

    }, [])

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                user,
                loading,
                setLoading,
                handleSignUp,
                handleLogin,
                handleLogout,
                setAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
