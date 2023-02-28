import React from 'react';

import {Image, StyleSheet} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Background, Button, Text} from '../ui';

interface ScanErrorT {
  onPressOK: () => void;
}
export function ScanError({onPressOK}: ScanErrorT) {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <Background style={styles.container}>
      <Image
        source={require('src/components/ScanResult/error.png')}
        style={styles.imageStyle}
      />
      <Text color={Color.textBlue1} center t7>
        Sorry! Your ticket has been used. Please try again with a QR code.
      </Text>
      <Button style={styles.buttonContainer} onPress={onPressOK}>
        OK
      </Button>
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  buttonContainer: {
    marginTop: 187,
  },
  imageStyle: {
    width: 262,
    height: 222,
    alignSelf: 'center',
    marginBottom: 79,
  },
});
