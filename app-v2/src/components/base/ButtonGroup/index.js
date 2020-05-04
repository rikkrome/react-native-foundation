import React from 'react';
import { View } from 'react-native';
import { spacer } from '../../../design';
import styles from './styles';

/**
 * BUTTON GROUP
 * Controls how a collection of buttons are rendered as a group
 * @param {string} direction Determines to show buttons 'vertical' (stacked) or 'horizontal' (side-by-side)
 * @param {number} separatorSize Separation size between buttons if more than one
 * @param {JSXElement} children Collection of `Button` elements to render inside `ButtonGroup`
 * @param {object} style Styles for the `ButtonGroup` component
 * @returns {JSXElement} Returns a JSX Element
 * @example
 *
 * <ButtonGroup separatorSize={25}>
 *  <Button label="one"></Button>
 *  <Button type="success" label="two"></Button>
 *  <Button type="danger" label="three"></Button>
 * </ButtonGroup>
 */
const ButtonGroup = ({
  direction, separatorSize, children, style,
}) => {
  const numButtons = React.Children.count(children);
  const isRow = direction !== 'vertical';
  const margin = isRow ? { marginRight: separatorSize } : { marginBottom: separatorSize };
  const flex = isRow ? styles.flex : null;

  const showButtons = React.Children.map(children, (child, index) => {
    if (numButtons > 0 && index !== numButtons - 1) {
      return <View style={[flex, margin]}>{child}</View>;
    }
    return <View style={[flex]}>{child}</View>;
  });

  return <View style={[{ flexDirection: isRow ? 'row' : 'column' }, style]}>{showButtons}</View>;
};

ButtonGroup.defaultProps = {
  direction: 'horizontal', // 'horizontal' | 'vertical'
  separatorSize: spacer.sm,
  children: null,
  style: null,
};

export default React.memo(ButtonGroup);
