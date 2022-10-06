import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
