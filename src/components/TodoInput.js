/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const TodoInput = props => {
  const [text, setText] = useState(null);

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TextInput
        style={{
          flex: 1,
          height: 40,
          borderColor: '#212121',
          borderWidth: 1,
          borderRadius: 8,
        }}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button
        style={{
          marginLeft: 8,
          padding: 8,
          backgroundColor: '#212121',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}
        onPress={() => {
          props.onPress(text);
          setText('');
        }}
        labelStyle={{color: '#fafafa'}}>
        Add
      </Button>
    </View>
  );
};

export default TodoInput;
