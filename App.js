import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as React from 'react'
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {
  const [dialog, setDialog] = useState('')


  const puhu = () => {
    Speech.speak(dialog)
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Kirjoita jotain'
        onChangeText={text => setDialog(text)}
        value={dialog}
      />

      <Button title='puhu' onPress={puhu}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    width: '70%',
    height: 50,
    margin: 10
  }
});
