import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import {Text} from 'src/components/ui'
import { Color } from 'src/themeTypes';
import {Background} from 'src/components/ui/Background'

export const OvalMessage = ({ message, onClose }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.delay(2000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start(() => {
      onClose && onClose(); // Call the onClose prop after the animation has finished
    });
  }, [fadeAnim, onClose]);

  return (
    <Animated.View
      style={[
        styles.oval,
        {
          opacity: fadeAnim,
        }
      ]}
    >
    <Background>
      <Text t5 color={Color.primary}>{message}</Text>
    </Background>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  oval: {
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',
    minWidth: '60%',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'pink', // pink border
    opacity: 0.8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


