import React from 'react';

import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Text} from './text/text';

interface ButtonT {
  children: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress: () => void;
}
export function Button({children, style, onPress, disabled}: ButtonT) {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[styles.container, style]}>
      <Text t6 color={Color.textBase3}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    // height: 55,
    padding: 14.58,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
