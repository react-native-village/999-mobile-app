import React from 'react';

import {ActivityIndicator, StyleSheet} from 'react-native';

import {useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Background} from './Background';
import {Text} from './text';

interface LoadingProps {
  text?: string;
}

export function Loading({text}: LoadingProps) {
  const {colors} = useTheme();
  return (
    <Background style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text t4 color={Color.textBase1}>
        {text}
      </Text>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
