import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, seturi] = useState(DiceOne);

  const playButton = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1: {
        seturi(DiceOne);
        break;
      }
      case 2: {
        seturi(DiceTwo);
        break;
      }
      case 3: {
        seturi(DiceThree);
        break;
      }
      case 4: {
        seturi(DiceFour);
        break;
      }
      case 5: {
        seturi(DiceFive);
        break;
      }
      case 6: {
        seturi(DiceSix);
        break;
      }
      default:
        seturi(DiceOne);
        break;
    }
  };
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={playButton}>
      <Image style={styles.image} source={uri}></Image></TouchableOpacity>
      <TouchableOpacity onPress={playButton}>
        <Text style={styles.text}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E5E6F',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#6B728E',
    borderRadius: 5,
    fontSize: 25,
    color: 'white',
  },
});
export default App;
