import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Background, Button, Spacer} from 'src/components/ui';
import {useTypedNavigation} from 'src/hooks';

export function HomeSearchScreen() {
  // For dev proposals
  const {top} = useSafeAreaInsets();
  const {navigate} = useTypedNavigation();
  const onPress = () => {
    navigate('qrScan');
  };
  return (
    <Background>
      <Spacer height={top} />
      <Button onPress={onPress}>TEST QR SCAN</Button>
    </Background>
  );
}
