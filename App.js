import React, {useContext} from 'react';
import AppStack from './src/routes/AppStack';
import AuthStack from './src/routes/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './src/context/AuthContext';
import {StatusBar} from 'react-native';

const App = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#5000ca" translucent={true} animated={true} />
      {currentUser ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
