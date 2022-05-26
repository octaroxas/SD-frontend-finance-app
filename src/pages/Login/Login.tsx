import { View, Text, TextInput, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

const Login = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })


  return (
    <SafeAreaView style={styles.login}>
      <View style={styles.header}>
        <Text>Login</Text>
        <Text>Acesse suas movimentações e organize suas finanças</Text>
      </View>
      <View style={styles.headerDetail}></View>
      <View>
        <TextInput placeholder='user@example.com' style={styles.input} />
        <TextInput placeholder='******************' style={styles.input} />
        <Pressable style={styles.button} onPress={() => {console.log('Login efetuado com sucesso.')}}>
          <LinearGradient
            // Background Linear Gradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            //style={styles.background}
          />
          <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.button}>
            <Text>ENTRAR</Text>
          </LinearGradient> 
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#32364D',
  },

  header: {
    paddingBottom: 33,
    paddingTop: 60,
    paddingRight: 112,
  },

  headerDetail: {
    borderRadius: 125.5,
  },

  input: {
    display: 'flex',
    backgroundColor: '#434965',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,

    paddingLeft: 31,
    paddingTop: 19,
    paddingBottom: 14,
    marginBottom: 30,

    color: 'white',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#647AFF',

    borderRadius: 15,

    paddingVertical: 19,
    marginTop: -13,
  }
});

export default Login;