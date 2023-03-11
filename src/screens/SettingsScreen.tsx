import React from 'react';

import {Settings} from 'src/components/Settings';
import {useTypedNavigation} from 'src/hooks';

export function SettingsScreen({navigation}: any) {
  const {navigate} = useTypedNavigation();
  const onPressThemes = () => navigate('themes');
  return (
    <Settings
      onPressDisconnect={() => {}}
      onPressEdit={() => {}}
      onPressWallet={() => {}}
      onPressThemes={onPressThemes}
      onPressBack={navigation.goBack}
    />
  );
}
