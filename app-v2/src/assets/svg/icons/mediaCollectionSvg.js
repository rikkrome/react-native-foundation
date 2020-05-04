import React from 'react';
import { View } from 'react-native';
import {
  Svg, Path, G,
} from 'react-native-svg';
import { colors, utils } from '../../../design';

const MediaCollectionSvg = ({ color, style }) => (
  <View style={[{
    width: 50, height: 50, justifyContent: 'center', alignItems: 'center',
  }, style]}
  >
    <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <G id="Layer-175" data-name="Layer">
        <G id="Vrstva_216" data-name="Vrstva 216" fill={utils.hslaToRgba(color)}>
          <Path d="M2.73,19.4l5.6,2.4A1.2,1.2,0,0,0,10,20.7V3.3A1.2,1.2,0,0,0,8.33,2.2L2.73,4.6A1.2,1.2,0,0,0,2,5.7V18.3A1.2,1.2,0,0,0,2.73,19.4ZM4,6.23,8,4.52v15L4,17.77Z" />
          <Path d="M13,20a1,1,0,0,0,1-1V5a1,1,0,0,0-2,0V19A1,1,0,0,0,13,20Z" />
          <Path d="M17,20a1,1,0,0,0,1-1V5a1,1,0,0,0-2,0V19A1,1,0,0,0,17,20Z" />
          <Path d="M21,20a1,1,0,0,0,1-1V5a1,1,0,0,0-2,0V19A1,1,0,0,0,21,20Z" />
        </G>
      </G>
    </Svg>
  </View>
);

MediaCollectionSvg.defaultProps = {
  color: colors.black,
  style: null,
};

export default React.memo(MediaCollectionSvg);
