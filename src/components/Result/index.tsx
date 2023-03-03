import React from 'react';

import {StyleSheet, View} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import Error from './Error.svg';
import Succesfully from './Succesfully.svg';

import {Background, Button, Text} from '../ui';

interface ResultT {
  onContinue: () => void;
  isSuccesfully: boolean;
}
export function Result({onContinue, isSuccesfully}: ResultT) {
  const {styles} = useThematicStyles(rawStyles);

  const text = isSuccesfully
    ? 'Great! Your ticket check has been successful.'
    : 'Sorry! Your ticket has been used. Please try again with a QR code.';
  return (
    <Background style={styles.container}>
      <View>
        {isSuccesfully ? (
          <Succesfully style={styles.imageStyle} />
        ) : (
          <Error style={styles.imageStyle} />
        )}
      </View>
      <Text color={Color.textBase1} center t6 children={text} />
      <Button style={styles.buttonStyle} onPress={onContinue} children="OK" />
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  buttonStyle: {
    marginTop: 187,
    width: '85%',
    alignSelf: 'center',
  },
  imageStyle: {
    alignSelf: 'center',
    marginBottom: 79,
  },
});
