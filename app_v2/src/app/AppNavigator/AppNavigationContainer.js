import 'react-native-gesture-handler';
import React, { useRef, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import LoadingScreen from '../../view-modes/LoadingScreen';
import LoginScreen from '../../view-modes/LoginScreen';
import AppStack from './AppStack';
import NavigationService from '../../services/react_navigation/navigation_service';
import { log } from '../../utils/helpers';
import { useCountRenders } from '../../utils/hooks';

const tag = 'AppNavigationContainer';

const Stack = createStackNavigator();
const AppNavigationContainer = () => {
  useCountRenders(tag);
  const ref = useRef(null);
  const core = useSelector((state) => state.core);
  const lifecycle = useSelector((state) => state.lifecycle);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (lifecycle === 'LIFECYCLE_READY') {
      setLoading(false);
    }
  }, [lifecycle]);

  let screen = (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        headerMode="none"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
  if (!loading && core.hasAuthSession) {
    screen = <AppStack />;
  } else if (!loading && !core.hasAuthSession) {
    screen = (
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} headerMode="none" />
      </Stack.Navigator>
    );
  }
  useEffect(() => {
    if (ref && ref.current) {
      log('! NavigationContainer ref updated');
      NavigationService.setNavigationContainer(ref.current);
    }
  }, [ref]);


  return (
    <NavigationContainer ref={ref} onStateChange={(state) => log('NavigationContainer New state is', state)}>
      {screen}
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
