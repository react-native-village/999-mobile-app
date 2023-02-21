import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from 'src/hooks';

export type QrBottomView = {
  onClickGallery: () => void;
  flashMode: boolean;
  onToggleFlashMode: () => void;
};

export function QrBottomView({
  onClickGallery,
  onToggleFlashMode,
  flashMode,
}: QrBottomView) {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <View style={[styles.bottomContainer, {paddingBottom: insets.bottom + 50}]}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={onClickGallery}>
          <Icon name="image" color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onToggleFlashMode}>
          <Icon
            name="flashlight"
            color={flashMode ? colors.primary : colors.textBase1}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const QR_BACKGROUND = '#0000004D';
const SYSTEM_BLUR_3 = 'rgba(255, 255, 255, 0.3)';

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    backgroundColor: QR_BACKGROUND,
  },
  subContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: SYSTEM_BLUR_3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
