import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const LoadingScreen = () => (
  <View style={[styles.screen]}>
    <View style={styles.container}>
      <Text style={styles.text}>
        Loading...
      </Text>
    </View>
  </View>
);
export default LoadingScreen;
