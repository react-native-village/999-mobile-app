import React from 'react';

import {Result} from 'src/components/Result';
import {useTypedNavigation} from 'src/hooks';

export function ResultScreen() {
  const {navigate} = useTypedNavigation();

  const onContinue = () => {
    navigate('home');
  };

  const isSuccesfully = true;

  return <Result onContinue={onContinue} isSuccesfully={isSuccesfully} />;
}
