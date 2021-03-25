/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import WavyHeader from '../components/WavyHeader';
import LogoutButton from '../components/LogoutButton';

/* const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}; */
export default class GalleryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
  }

  chooseImage = () => {
    // options
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Options'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // call a function of ImagePicker
    ImagePicker.showImagePicker(options, response => {
      console.log('Response : ', response);

      if (response.didCancel) {
        console.log('user cancelled');
      } else if (response.error) {
        console.log('error -> ', response.error);
      } else if (response.customButton) {
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filepath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, response => {
      console.log('Response : ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  renderFileData() {
    if (this.state.fileData) {
      return (
        <Image
          source={{uri: 'data:image/jpeg;base64,' + this.state.fileData}}
        />
      );
    }
  }

  render() {
    return (
      <>
        <View style={styles.body}>
          <WavyHeader
            customStyles={styles.svgCurve}
            customHeight={160}
            customTop={130}
            customBgColor="#5000ca"
            customWavePattern="M0,128L30,144C60,160,120,192,180,218.7C240,245,300,267,360,261.3C420,256,480,224,540,224C600,224,660,256,720,272C780,288,840,288,900,256C960,224,1020,160,1080,149.3C1140,139,1200,181,1260,186.7C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          />
          <Text style={{textAlign: 'center', fontSize: 20, paddingBottom: 10}}>
            Pick Images from Camera & Gallery
          </Text>
          <View style={styles.ImageSections}>
            <View>
              {this.renderFileData()}
              <Text style={{textAlign: 'center'}}>Base 64 String</Text>
            </View>
            <View>
              {/* {this.renderFileUri()} */}
              <Text style={{textAlign: 'center'}}>File Uri</Text>
            </View>
          </View>

          <View style={styles.btnParentSection}>
            <TouchableOpacity
              onPress={this.chooseImage}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Choose Image</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.launchCamera}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Directly Launch Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.launchImageLibrary}
              style={styles.btnSection}>
              <Text style={styles.btnText}>Directly Launch Image Library</Text>
            </TouchableOpacity>
          </View>
          <LogoutButton />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width,
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#70c995',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14.4,
    fontWeight: 'bold',
  },
});
