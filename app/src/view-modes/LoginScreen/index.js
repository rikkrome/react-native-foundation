import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useCountRenders } from '../../utils/hooks';
import Button from '../../components/base/Button';
import ButtonGroup from '../../components/base/ButtonGroup';
import NavigationService from '../../services/react_navigation/navigation_service';
import { colors, fontSize } from '../../design';
import { fetchUserLogin } from '../../modes/user/actions';
import { lifecycleAuthCheck } from '../../modes/lifecycle/actions';

const LoginScreen = () => {
  useCountRenders('LOGIN_SCREEN');
  const dispatch = useDispatch();

  const credentials = {
    email: 'ricky@romeroricky.com',
    password: 'test1234',
  };

  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.silver,
    }}
    >
      <Text style={{ color: 'white', fontSize: fontSize.xl }}>Login</Text>
      <ButtonGroup direction="vertical" style={{ width: '80%', marginVertical: 20 }}>
        <Button
          type="info"
          label="Login"
          onPress={async () => {
            await dispatch(fetchUserLogin(credentials));
            await dispatch(lifecycleAuthCheck());
          }}
        />
        <Button
          label="Back"
          onPress={() => {
            NavigationService.goBack();
          }}
        />
      </ButtonGroup>
      <TouchableOpacity
        onPress={() => {
          NavigationService.replace('RegistrationScreen');
        }}
      >
        <Text>Don&apos;t have an Account? Sign-Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
