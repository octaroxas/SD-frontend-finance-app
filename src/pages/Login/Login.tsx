import React, { Fragment, useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import { useForm, Controller, FieldValues } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import { yupResolver } from '@hookform/resolvers/yup'
import Feather from '@expo/vector-icons/Feather';
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import { Loading } from '../../contexts/AuthContext';


const HeaderLogin = () => {
  return (
    <View>
      <Text style={styles.title}>
        Login
      </Text>
      <Text style={styles.subTitle}>
        Acesse suas movimentações e organize suas finanças
      </Text>
    </View>
  )
}

const schemaValidation = yup.object({
  email: yup.string().email('E-mail inválido!').required('Informe um endereço de e-mail!'),
  password: yup.string().min(6, 'A senha deve contar com no mínimo 6 dígitos!').required('Informe a senha'),
})

// async function handleLogin(credentials: any) {
//   try {
//     const { data } = await axios.post('https://finance.ianbrito.com.br/api/v1/login', credentials)
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }


const Login = () => {

  const { handleLogin, setLoading } = useContext(AuthContext)

  // const [fontsLoaded] = useFonts({
  //   Nunito_400Regular,
  //   Nunito_700Bold
  // })

  const { control, handleSubmit, getValues, formState: { errors } } = useForm({
    defaultValues: {
      email: undefined,
      password: undefined,
    },
    resolver: yupResolver(schemaValidation)
  })

  const EyeOpened = require('../../assets/opened-eye.png')
  const EyeClosed = require('../../assets/closed-eye.png')
  const [showPassword, setShowPassword] = useState(true)
  const navigation = useNavigation()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {

  }, [])

  const toSignUp = () => {
    navigation.navigate('signup')
  }

  // if (!fontsLoaded) {
  //   return (
  //     <Fragment></Fragment>
  //   )
  // } else {

  return (
    <SafeAreaView style={styles.login}>

      <LinearGradient
        colors={['#647AFF', '#8355E6']}
        style={styles.headerDetail}>
      </LinearGradient>

      <HeaderLogin />

      <View style={styles.formContainer}>
        <Text style={styles.label}>
          E-mail
        </Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.inputText}
              onChangeText={onChange}
              value={value}
              placeholder='joaodasilva@gmail.com'
            />
          )}
        />

        <Text style={styles.label}>
          Senha
        </Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputPasswordContainer}>
              <TextInput
                style={styles.inputPassword}
                onChangeText={onChange}
                value={value}
                secureTextEntry={showPassword}
                placeholder='***************'
              />
              <TouchableOpacity onPress={toggleShowPassword}>
                <Image
                  style={styles.iconPasswordInput}
                  source={showPassword ? EyeOpened : EyeClosed}
                />
              </TouchableOpacity>
            </View>
          )}
        />

        <View style={styles.messagesContainer}>
          {errors.email && <Text style={styles.errorMessage}><Feather style={styles.iconMessage} name='x-circle' /> {errors.email?.['message']}</Text>}
          {errors.password && <Text style={styles.errorMessage}><Feather style={styles.iconMessage} name='x-circle' /> {errors.password?.['message']}</Text>}
        </View>

        <TouchableOpacity onPress={handleSubmit(handleLogin)}>
          <LinearGradient
            colors={['#5971FF', '#8355E5']}
            style={styles.button}
            start={{ x: 0.7, y: 0 }}

          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Entrar
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>

      <View style={styles.containerLinks}>
        <Text style={styles.textRedirectSignUp}>
          Não possuo cadastro?
        </Text>
        <TouchableOpacity onPress={toSignUp}>
          <Text style={styles.redirectSignUp}>
            Criar conta!
          </Text>
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={['#8355E5', '#5971FF', '#5971FF']}
        style={styles.elementBL}
      />


      {/* <View>
          <TextInput placeholder='user@example.com' style={styles.input} />
          <TextInput placeholder='******************' style={styles.input} />
        </View> */}
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    padding: 40,
    // flexDirection: 'column',
    backgroundColor: '#32364D',
  },
  title: {
    // fontFamily: 'Nunito_400Regular',
    fontSize: 38,
    marginTop: 20,
    color: '#ffff',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 10,
    color: '#ffff',
    width: 200,
    marginTop: 5
  },
  text: {
    // fontFamily: 'Nunito_400Regular',
    color: 'white',
  },

  header: {
    paddingBottom: 33,
    paddingTop: 60,
    paddingRight: 112,

    marginLeft: 37,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 36,

    color: 'white',
  },

  headerSubText: {
    fontSize: 8,

    color: 'white',

    lineHeight: 10.9,
  },

  headerDetail: {
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#ffff",
    borderBottomLeftRadius: 200,
    marginTop: 0,
    width: 130,
    height: 130

    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderBottomLeftRadius: 125.5,
    // borderColor: 'transparent',

    // width: 138,
    // height: 129,

    // alignSelf: 'flex-end',
  },
  formContainer: {
    marginTop: 20,
    display: "flex"
  },
  label: {
    color: '#ffff',
    marginTop: 6,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  iconMessage: {
    marginRight: 1
  },
  errorMessage: {
    color: "#F4393B",
    fontWeight: 'bold'
  },
  input: {
    display: 'flex',

    marginHorizontal: 37,
    backgroundColor: '#434965',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    borderColor: 'transparent',

    paddingLeft: 31,
    paddingTop: 19,
    paddingBottom: 14,
    marginBottom: 30,

    color: 'white',
  },
  inputPasswordContainer: {
    backgroundColor: '#434965',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
  },
  inputPassword: {
    width: '90%',
    height: 50,
    color: "white",
    backgroundColor: '#434965',
    borderRadius: 15,
    paddingLeft: 20
  },
  inputText: {
    width: '100%',
    height: 50,
    color: "white",
    backgroundColor: '#434965',
    borderRadius: 15,
    paddingLeft: 20,
  },
  iconPasswordInput: {
    backgroundColor: '#434965',
  },
  messagesContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#647AFF',
    width: '40%',
    height: 60,
    borderRadius: 20,
    marginVertical: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    // alignItems: 'center',

    // width: 146,
    // height: 54,

    // borderRadius: 15,

    // paddingVertical: 19,

    // marginLeft: 26,
    // marginTop: -13,
  },
  buttonText: {
    fontFamily: 'Nunito_700Bold',

    color: 'white',
  },
  containerLinks: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50
  },
  textRedirectSignUp: {
    color: '#ffff',
    marginRight: 20
  },
  redirectSignUp: {
    textDecorationStyle: "solid",
    textDecorationColor: "#ffff",
    textDecorationLine: "underline",
    display: "flex",
    //backgroundColor: '#ffff',
    color: '#647AFF',
    fontWeight: 'bold'
  },
  elementBL: {
    display: "flex",
    shadowColor: "#5971FF",
    shadowOpacity: 100,
    shadowRadius: 40,
    alignSelf: "flex-start",
    marginTop: Dimensions.get('screen').height - 124,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#ffff",
    borderTopRightRadius: 200,
    width: 100,
    height: 100,
  }
});

export default Login;