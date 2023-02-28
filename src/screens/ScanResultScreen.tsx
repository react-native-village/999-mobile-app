import React from 'react';

import {ScanResult} from 'src/components/ScanResult';
import {useTypedNavigation} from 'src/hooks';

export function ScanResultScreen() {
  const {navigate} = useTypedNavigation();

  const onPressOK = () => {
    navigate('home');
  };

  const isSuccesfully = false;

  return <ScanResult onPressOK={onPressOK} isSuccesfully={isSuccesfully} />;
}
