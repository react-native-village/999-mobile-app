import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';

import Logo from '../../../assets/images/logo.svg';
import {Spacer, Text} from '../ui';

interface HomeMarketHeaderProps {
  onPressSettings?: () => void;
  onPressProfile?: () => void;
  onPressSearch?: () => void;
}

export function HomeMarketHeader({
  onPressSettings,
  onPressProfile,
  onPressSearch,
}: HomeMarketHeaderProps) {
  const {colors} = useTheme();
  const {top} = useSafeAreaInsets();

  return (
    <>
      <Spacer height={top} />
      <View style={styles.rowContainer}>
        <View style={styles.logoContainer}>
          <Logo width={38} height={38} />
          <Spacer width={12} />
          <Text t3 color={Color.textBase1}>
            DAO 999 NFT
          </Text>
        </View>
        <View style={styles.rightButtons}>
          <TouchableOpacity onPress={onPressSearch} activeOpacity={0.7}>
            <Ionicons color={colors.primary} name="search-outline" size={28} />
          </TouchableOpacity>
          <Spacer width={12} />
          <TouchableOpacity onPress={onPressSettings} activeOpacity={0.7}>
            <Ionicons color={colors.primary} name="settings-sharp" size={28} />
          </TouchableOpacity>
          <Spacer width={12} />
          <TouchableOpacity onPress={onPressProfile} activeOpacity={0.7}>
            <Ionicons color={colors.primary} name="person-circle" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 23,
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  rightButtons: {
    flexDirection: 'row',
  },
});
