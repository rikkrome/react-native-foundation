import React from 'react';
import { View } from 'react-native';
import {
  Svg, Path, G, Mask, Defs, Use, Rect,
} from 'react-native-svg';
import { colors, utils } from '../../../design';

const homeSvg = ({ color, style }) => (
  <View style={[{
    width: 24, height: 24, justifyContent: 'center', alignItems: 'center',
  }, style]}
  >
    <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Path d="M12.3676742,2.14769226 C12.148301,1.95076925 11.8514285,1.95076925 11.6320553,2.14769226 L2.25713212,10.5392307 C1.9783844,10.7884615 1.9165099,11.27 2.11963321,11.6130769 C2.32275653,11.956923 2.71275335,12.0315384 2.99275107,11.7830769 L4.22649095,10.6784615 L4.22649095,21.2307692 C4.22649095,21.6561539 4.50648867,22 4.8514858,22 L8.02875426,22 C8.37375138,22 8.6537491,21.6561539 8.6537491,21.2307692 L8.6537491,15.0053845 L15.3459804,15.0053845 L15.3459804,21.2307692 C15.3459804,21.6561539 15.6259781,22 15.9709752,22 L19.1482437,22 C19.4932408,22 19.7732385,21.6561539 19.7732385,21.2307692 L19.7732385,10.6792307 L21.0069784,11.7838461 C21.1182275,11.8830769 21.2469764,11.9307692 21.3738504,11.9307692 C21.5669738,11.9307692 21.7575972,11.8207692 21.8800962,11.6138462 C22.0838446,11.2707692 22.0213451,10.7892307 21.7425973,10.5392307 L12.3676742,2.14769226 Z" id="path-1" />
      </Defs>
      <G id="icon/home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Mask id="mask-2" fill="white">
          <Use xlinkHref="#path-1" />
        </Mask>
        <Use id="home" fill="#6665FF" fillRule="nonzero" opacity="0.900000036" xlinkHref="#path-1" />
        <G id="color/black" mask="url(#mask-2)" fill={utils.hslaToRgba(color)}>
          <Rect id="Change-Fill-Color" x="0" y="0" width="24" height="24" />
        </G>
      </G>
    </Svg>
  </View>
);

homeSvg.defaultProps = {
  color: colors.black,
  style: null,
};

export default React.memo(homeSvg);
