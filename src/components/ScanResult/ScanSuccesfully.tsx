import React from 'react';

import {Image, StyleSheet} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Background, Button, Text} from '../ui';

interface ScanSuccesfullyT {
  onPressOK: () => void;
}
export function ScanSuccesfully({onPressOK}: ScanSuccesfullyT) {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <Background style={styles.container}>
      <Image
        source={require('src/components/ScanResult/succesfully.png')}
        style={styles.imageStyle}
      />
      <Text color={Color.primary} center t7>
        Great! Your ticket check has been successful.
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
