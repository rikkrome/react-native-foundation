import React from 'react';
import { View } from 'react-native';
import {
  Svg, Path, G, Defs,
} from 'react-native-svg';
import { colors, utils } from '../../../design';

const statisticsSvg = ({ color, style }) => (
  <View style={[{
    width: 24, height: 24, justifyContent: 'center', alignItems: 'center',
  }, style]}
  >
    <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <Defs />
      <G id="Layer-156" data-name="Layer" fill={utils.hslaToRgba(color)}>
        <G id="Vrstva_251" data-name="Vrstva 251">
          <Path class="cls-1" d="M22.18,20.61,4.19,21a1,1,0,0,1-1-1L2.8,2a1,1,0,1,0-2,0l.37,18A3,3,0,0,0,4.23,23l18-.37a1,1,0,1,0,0-2Z" />
          <Path class="cls-1" d="M7.49,11.21A2.5,2.5,0,0,0,5,13.76l.06,3a2.5,2.5,0,0,0,5-.11l-.06-3A2.49,2.49,0,0,0,7.49,11.21Zm.12,6a.49.49,0,0,1-.51-.49l-.06-3a.49.49,0,0,1,.49-.51A.5.5,0,0,1,8,13.7l.06,3A.5.5,0,0,1,7.61,17.2Z" />
          <Path class="cls-1" d="M13.38,6.08a2.51,2.51,0,0,0-2.45,2.55l.07,3a2.5,2.5,0,0,0,5-.1l-.07-3A2.5,2.5,0,0,0,13.38,6.08Zm.13,6a.49.49,0,0,1-.51-.49l-.07-3a.52.52,0,0,1,.49-.51.5.5,0,0,1,.51.49l.07,3A.5.5,0,0,1,13.51,12.08Z" />
          <Path class="cls-1" d="M19.3,2a2.5,2.5,0,0,0-2.45,2.55l.06,3a2.5,2.5,0,0,0,5-.1l-.06-3A2.5,2.5,0,0,0,19.3,2Zm.12,6a.5.5,0,0,1-.51-.49l-.06-3A.51.51,0,0,1,19.34,4a.5.5,0,0,1,.51.49l.06,3A.49.49,0,0,1,19.42,8Z" />
        </G>
      </G>
    </Svg>
  </View>
);

statisticsSvg.defaultProps = {
  color: colors.grayLightest,
  style: null,
};

export default React.memo(statisticsSvg);
