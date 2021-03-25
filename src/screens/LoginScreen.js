/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebaseSetup from '../../firebase.config';
import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const {currentUser} = useContext(AuthContext);
  const {auth} = firebaseSetup();

  async function signInWithFacebook() {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process.';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something is wrong with the obtained token!';
    }
    const fbCreds = auth.FacebookAuthProvider.credential(data.accessToken);
    return await auth().signInWithCredential(fbCreds);
  }

  return (
    <View style={styles.container}>
      <Icon.Button
        size={22}
        style={styles.button}
        name="google"
        backgroundColor="#e95c5c">
        Login with Google
      </Icon.Button>
      <View style={{marginVertical: 14}} />
      <Icon.Button
        size={22}
        style={styles.button}
        name="facebook"
        backgroundColor="#3b5998"
        onPress={signInWithFacebook}>
        Login with Facebook
      </Icon.Button>
      <Text>{currentUser?.email && `Welcome ${currentUser.email}!`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: 'center',
    margin: 30,
  },
  button: {
    width: 220,
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingLeft: 35,
  },
});

export default LoginScreen;
