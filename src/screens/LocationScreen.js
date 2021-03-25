/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Dimensions, StatusBar, Text, View} from 'react-native';
import GetLocation from 'react-native-get-location';
import LogoutButton from '../components/LogoutButton';
import WavyHeader from '../components/WavyHeader';

const LocationScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);

  const _getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(currentLocation => {
        console.log(currentLocation);
        setLocation(currentLocation);
      })
      .catch(err => {
        const {code, message} = err;
        console.warn(code, message);
      });
  };
  return (
    <View
      style={{
        height: Dimensions.get('screen').height - 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <WavyHeader
        style={{
          position: 'absolute',
          top: 0,
          width: Dimensions.get('window').width,
        }}
        customHeight={160}
        customTop={130}
        customBgColor="#00ca97"
        customWavePattern="M0,128L30,144C60,160,120,192,180,218.7C240,245,300,267,360,261.3C420,256,480,224,540,224C600,224,660,256,720,272C780,288,840,288,900,256C960,224,1020,160,1080,149.3C1140,139,1200,181,1260,186.7C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#bba8bb',
          padding: 10,
          borderRadius: 7,
          backgroundColor: '#ffe1ff',
          marginBottom: '30%',
          shadowColor: '#fafa',
          shadowOffset: {
            height: 2,
            width: 3,
          },
          shadowRadius: 10,
          shadowOpacity: 1,
        }}>
        Location Finder
      </Text>
      <Button title="Get Location" onPress={_getLocation} />
      <Text
        style={{
          color: '#e061e0',
          fontSize: 24,
          marginVertical: 30,
        }}>
        Latitude:{'\n'}
        {location && location.latitude + '°'}
      </Text>
      <Text style={{color: '#f0d9', fontSize: 24, marginBottom: 30}}>
        Longitude:{'\n'}
        {location && location.longitude + '°'}
      </Text>
      <LogoutButton />
    </View>
  );
};

export default LocationScreen;
