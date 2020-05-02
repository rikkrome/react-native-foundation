import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  BUTTON, BUTTON_ID, BUTTON_TEXT_ID, BUTTON_CHILDREN_ID,
} from './mutations';
import { noop, isDefaultPropFunction } from '../../../utils/helpers';
import styles from './styles';

const tag = BUTTON;

/**
 * BUTTON
 * Renders a `<Button />` component
 * @param {string} label Text for the `Button` (Note: You can't have `label` & `children`)
 * @param {string} type Type of `Button` to render (default, info, success, warning, danger)
 * @param {JSXElement} children Markup to inject inside the `Button` body (Note: You can't have `children` & `label`)
 * @param {object} style Styles specifically for the `Button` wrapper
 * @param {object} fontStyle Styles specifically for the `Button` fonts (Note: Only works w/ `label` not `children`)
 * @param {function} onPress Event to fire on `Button` press
 * @returns {JSXElement} Returns a JSX Element
 * @example
 *
 * <Button label="Button" type="danger"></Button>
 *
 * // Buttons Side-by-Side
 * //
 * <View style={{ flexDirection: 'row' }}>
 *  <View style={{ flex: 1 }}>
 *   <Button label="Cancel"></Button>
 *  </View>
 *  <View style={{ width: 10 }}></View>
 *  <View style={{ flex: 1 }}>
 *   <Button label="Delete" type="danger"></Button>
 *  </View>
 * </View>
 *
 */
const Button = ({
  disabled, label, type, children, style, fontStyle, onPress,
}) => {
  const isDisabled = isDefaultPropFunction(onPress);
  const hasLabel = !!label;

  const buttonBody = hasLabel ? (
    <Text style={[styles.buttonText, fontStyle, disabled ? styles.disabledButtonText : null]} testID={BUTTON_TEXT_ID}>
      {label}
    </Text>
  ) : (
    <View style={styles.children} testID={BUTTON_CHILDREN_ID}>
      {children}
    </View>
  );

  return (
    <TouchableOpacity disabled={isDisabled || disabled} onPress={onPress}>
      <View style={[styles.button, styles[`${type}Bg`], disabled && styles.disabled, style]} testID={BUTTON_ID}>
        {buttonBody}
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  label: '',
  type: 'default', // default | info | success | warning | danger
  disabled: false,
  children: null,
  style: null,
  fontStyle: null,
  onPress: noop,
};

export default React.memo(Button);
