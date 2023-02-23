import React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Text} from '../ui';

const width = Dimensions.get('window').width;

export function SearchNoResults() {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Entypo name="emoji-sad" style={styles.icon} />
      </View>
      <Text t4 color={Color.primary}>
        No results found
      </Text>
      <Text t11>Please try another keyword</Text>
    </View>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    height: width * 0.5,
    width: width * 0.5,
    borderRadius: 100,
    backgroundColor: Color.primary1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '10%',
  },
  icon: {
    fontSize: 150,
    color: Color.primary,
  },
});
