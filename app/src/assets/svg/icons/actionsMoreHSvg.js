import React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import { colors, utils } from '../../../design';

const ActionsMoreHSvg = ({ color, style }) => (
  <View style={[{
    width: 50, height: 50, justifyContent: 'center', alignItems: 'center',
  }, style]}
  >
    <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <G id="Layer-22" data-name="Layer">
        <G id="Vrstva_99" data-name="Vrstva 99" fill={utils.hslaToRgba(color)}>
          <Path d="M4,9a3,3,0,1,0,3,3A3,3,0,0,0,4,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,4,13Z" />
          <Path d="M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z" />
          <Path d="M20,9a3,3,0,1,0,3,3A3,3,0,0,0,20,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,20,13Z" />
        </G>
      </G>
    </Svg>
  </View>
);

ActionsMoreHSvg.defaultProps = {
  color: colors.black,
  style: null,
};

export default React.memo(ActionsMoreHSvg);
