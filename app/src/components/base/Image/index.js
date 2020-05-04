import React from 'react';
import {
  View, Image,
} from 'react-native';
import styles from './styles';

const BaseImage = ({ source, children, style }) => (
  <View style={[styles.container, style]}>
    <View style={styles.imageContainer}>
      <Image
        source={source}
        resizeMode="cover"
        style={styles.imageStyle}
      />
    </View>
    {children}
  </View>
);

BaseImage.defaultProps = {
  style: {},
};

export default BaseImage;
