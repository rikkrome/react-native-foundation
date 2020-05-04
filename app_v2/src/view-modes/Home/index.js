import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/base/Button';
import NavigationService from '../../services/react_navigation/navigation_service';

const Home = ({ navigation }) => {
  const ph = '';
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>HOME</Text>
      <Button
        label="Settings"
        style={styles.button}
        onPress={() => {
          //
          // NavigationService.navigate('ProfileTopTabs', { screen: 'profileTab2' });
          navigation.navigate('ProfileTopTabs', { screen: 'profileTab2' });
        }}
      />
    </View>
  );
};

export default Home;
