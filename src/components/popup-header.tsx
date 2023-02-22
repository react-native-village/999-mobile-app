import React, {useEffect, useMemo} from 'react';

import {NavigationAction} from '@react-navigation/routers';
import {StackHeaderProps} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {IconButton, Text} from 'src/components/ui';
import {Color} from 'src/themeTypes';
import {ScreenOptionType} from 'src/types';

type PopupHeaderProps = StackHeaderProps & {
  options: ScreenOptionType;
};
const DEFAULT_HITSLOP = {top: 10, bottom: 10, left: 10, right: 10};

export function PopupHeader({options, back, navigation}: PopupHeaderProps) {
  const insets = useSafeAreaInsets();

  const canGoBack = useMemo(
    () => back && !options.headerBackHidden,
    [back, options.headerBackHidden],
  );

  useEffect(() => {
    const subscription = (e: {
      preventDefault: () => void;
      data: {action: NavigationAction};
    }) => {
      if (!canGoBack && !e.data.action.source) {
        e.preventDefault();
      }
    };

    navigation.addListener('beforeRemove', subscription);

    return () => {
      navigation.removeListener('beforeRemove', subscription);
    };
  }, [canGoBack, navigation]);

  return (
    <View style={[style.container, options.tab && {marginTop: insets.top}]}>
      {canGoBack ? (
        <IconButton onPress={navigation.goBack} hitSlop={DEFAULT_HITSLOP}>
          <MaterialCommunityIcons
            name="arrow-left"
            style={[style.icon, {color: Color.graphicBase1}]}
          />
        </IconButton>
      ) : (
        <View style={style.spacer} />
      )}
      <Text t8 center color={Color.textBase1}>
        {options.title}
      </Text>
      {options.headerRight ? (
        options.headerRight({})
      ) : (
        <View style={style.spacer} />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height: 56,
    flexDirection: 'row',
    zIndex: 1,
  },
  spacer: {
    width: 24,
    height: 24,
  },
  icon: {
    fontSize: 24,
  },
});
