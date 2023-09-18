import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 30, color: "#201926"}}>SILVER'S GROCERY APP</Text>
      <View style={styles.buttonStyleContainer}>
        <Button
          title="Sign In"
          color="#616161"
          onClick={() => Alert.alert('Sign In Button Pressed')}
        />
        <View style={styles.space} />
        <Button
          title="Register"
          color="#616161"
          onClick={() => Alert.alert('Simple Button Pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3fcf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyleContainer: {
    flexDirection: 'row',
  },
  space: {
    width: 10, 
    height: 10,
  },
});
