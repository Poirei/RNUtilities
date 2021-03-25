/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import firebaseSetup from '../../firebase.config';

const LogoutButton = () => {
  const {auth} = firebaseSetup();

  function signOut() {
    auth().signOut();
  }

  return (
    <Button
      mode="outlined"
      compact={true}
      style={styles.logoutBtn}
      icon="power"
      labelStyle={{fontSize: 20}}
      onPress={signOut}
    />
  );
};

const styles = StyleSheet.create({
  logoutBtn: {
    backgroundColor: '#b1dcff',
    borderRadius: 100,
    position: 'absolute',
    top: 70,
    right: 20,
    alignSelf: 'flex-end',
    elevation: 10,
  },
});

export default LogoutButton;
