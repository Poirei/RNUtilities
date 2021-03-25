/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import firebaseSetup from '../../firebase.config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const {auth} = firebaseSetup();

  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        setPending(false);
        console.log(user);
      }
      return subscriber;
    });
  }, []);

  /*   if (pending) {
    return (
      <View
        style={{
          height: Dimensions.get('window').height - 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } */

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};
