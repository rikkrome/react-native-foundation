import React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import { colors, utils } from '../../../design';

const closeSvg = ({ color, style }) => (
  <View style={[{
    width: 50, height: 50, justifyContent: 'center', alignItems: 'center',
  }, style]}
  >
    <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <G id="Layer-11" data-name="Layer" fill={utils.hslaToRgba(color)}>
        <Path d="M4.93,19.07a1,1,0,0,1,0-1.41L17.66,4.93a1,1,0,1,1,1.41,1.41L6.34,19.07A1,1,0,0,1,4.93,19.07Z" />
        <Path d="M4.93,4.93a1,1,0,0,1,1.41,0L19.07,17.66a1,1,0,1,1-1.41,1.41L4.93,6.34A1,1,0,0,1,4.93,4.93Z" />
      </G>
    </Svg>
  </View>
);

closeSvg.defaultProps = {
  color: colors.black,
  style: null,
};

export default React.memo(closeSvg);
