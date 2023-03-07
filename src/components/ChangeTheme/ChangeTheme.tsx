import React from 'react';

import {SettingsButton} from 'src/components/Settings';
import {useTheme} from 'src/hooks';

import {Background, CustomHeader} from '../ui';
import { Color } from 'src/themeTypes';

interface ChangeThemeProps {
  onBack: () => void;
}

export function ChangeTheme({onBack}: ChangeThemeProps) {
  const {toggleDark, toggleLight, toggleSystem} = useTheme();
  return (
    <Background>
      <CustomHeader
        title={'Themes'}
        iconLeft={'arrow-back'}
        colorLeft={Color.primary}
        onPressLeft={onBack}
      />
      <SettingsButton
        icon={'sunny-outline'}
        title={'Light theme'}
        onPress={toggleLight}
      />
      <SettingsButton
        icon={'moon-outline'}
        title={'Dark theme'}
        onPress={toggleDark}
      />
      <SettingsButton
        icon={'albums-outline'}
        title={'System theme'}
        onPress={toggleSystem}
      />
    </Background>
  );
}
