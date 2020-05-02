import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const LoadingScreen = () => {
  debugger;
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ padding: 10 }}>
        <Text style={styles.text}>
          Loading...
        </Text>
      </View>

    </View>
  );
};
export default LoadingScreen;
