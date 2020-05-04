import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { colors, utils } from '../../../design';

const Test = ({ color, style }) => (
  <View style={[{
    width: 50, height: 50, justifyContent: 'center', alignItems: 'center',
  }, style]}
  >
    <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <Path
        fill={utils.hslaToRgba(color)}
        fillRule="nonzero"
        d="M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50 0 38.807 0 25 11.193 0 25 0zm11.297 14L19.69 30.596l-5.987-5.982L11 27.316 19.69 36 39 16.702 36.297 14z"
      />
    </Svg>
  </View>
);

Test.defaultProps = {
  color: colors.brand,
  style: null,
};

export default React.memo(Test);
