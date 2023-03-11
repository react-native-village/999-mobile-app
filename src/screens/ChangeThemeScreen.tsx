import React from 'react';

import {ChangeTheme} from 'src/components/ChangeTheme';
import {useTypedNavigation} from 'src/hooks';

export function ChangeThemeScreen() {
  const {goBack} = useTypedNavigation();
  const onBack = () => goBack();
  return <ChangeTheme onBack={onBack} />;
}
