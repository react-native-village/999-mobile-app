import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Text} from '../ui';

export type QrTopViewProps = {
  onClose: () => void;
};

export function QrTopView({onClose}: QrTopViewProps) {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <View style={{paddingTop: insets.top}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onClose}>
          <Icon size={24} name="arrow-back" color={colors.graphicBase3} />
        </TouchableOpacity>
        <Text t8 center color={Color.textBase3}>
          Scan QR Code
        </Text>
        <View style={styles.headerSpacer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height: 56,
    flexDirection: 'row',
  },
  headerSpacer: {
    width: 24,
    height: 24,
  },
});
