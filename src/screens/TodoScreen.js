/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import LogoutButton from '../components/LogoutButton';
import TodoInput from '../components/TodoInput';
import WavyHeader from '../components/WavyHeader';

const TodoScreen = props => {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(_text) {
    setTodoItems([...todoItems, _text]);
  }

  function deleteTodoItem(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }

  return (
    <>
      <StatusBar backgroundColor="#5000ca" />
      <ScrollView
        contentContainerStyle={{
          padding: 30,
          paddingTop: 160,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <WavyHeader
          customStyles={{
            position: 'absolute',
            top: 0,
            width: Dimensions.get('window').width,
          }}
          customHeight={280}
          customTop={230}
          customBgColor="#5000ca"
          customWavePattern="M0,128L30,144C60,160,120,192,180,218.7C240,245,300,267,360,261.3C420,256,480,224,540,224C600,224,660,256,720,272C780,288,840,288,900,256C960,224,1020,160,1080,149.3C1140,139,1200,181,1260,186.7C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        />
        <Text
          style={{
            fontSize: 36,
            color: '#fafa',
            fontWeight: 'bold',
            marginBottom: 30,
            marginTop: 20,
          }}>
          Todo
        </Text>
        <TodoInput onPress={addTodoItem} />
        <FlatList
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{paddingVertical: 8}}
                onPress={() => deleteTodoItem(index)}>
                <Text style={{fontSize: 18}}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <LogoutButton />
      </ScrollView>
    </>
  );
};

export default TodoScreen;
