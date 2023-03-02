import React from 'react';

import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {InputNameType} from 'src/types';

import {Text} from '../ui';

interface InputContainerProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  price?: boolean;
  price2?: boolean;
  valueText: string;
  valueText2?: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  onChangeText2?: React.Dispatch<React.SetStateAction<string>>;
  initialText?: string;
  initialText2?: string;
  input: InputNameType;
  input2?: InputNameType;
}

export function InputContainer({
  style,
  title,
  price,
  price2,
  valueText,
  valueText2,
  onChangeText,
  onChangeText2,
  initialText,
  initialText2,
  input,
  input2,
}: InputContainerProps) {
  const {styles, colors} = useThematicStyles(rawStyles);
  return (
    <View style={styles.container}>
      <Text t14 style={styles.title}>
        {title}
      </Text>
      {input === 'text' && (
        <View style={styles.row}>
          <TextInput
            style={[styles.input, price && styles.inputAlternate, style]}
            placeholder={initialText}
            onChangeText={onChangeText}
            value={valueText}
            selectionColor={colors.primary}
            keyboardType={price ? 'numeric' : 'default'}
            placeholderTextColor={colors.primary}
            returnKeyType={'next'}
          />
          {price && (
            <TouchableOpacity style={styles.part2} activeOpacity={0.75}>
              <Text t3 color={Color.primary}>
                ADA
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {input === 'date' && (
        <View style={styles.row}>
          <TextInput
            style={[styles.inputAlternate, style]}
            placeholder={initialText !== undefined ? initialText : '__.__.____'}
            keyboardType={'numeric'}
            onChangeText={onChangeText}
            value={valueText}
            selectionColor={colors.primary}
            placeholderTextColor={colors.primary}
            returnKeyType={'next'}
          />
          <View style={styles.part2}>
            <MaterialCommunityIcons
              name={'calendar-check-outline'}
              color={colors.primary}
              size={30}
            />
          </View>
        </View>
      )}
      {input === 'time' && (
        <View style={styles.row}>
          <TextInput
            style={[styles.inputAlternate, style]}
            placeholder={initialText !== undefined ? initialText : '__:__'}
            keyboardType={'numeric'}
            onChangeText={onChangeText}
            value={valueText}
            selectionColor={colors.primary}
            placeholderTextColor={colors.primary}
            returnKeyType={'next'}
          />
          <View style={styles.part2}>
            <MaterialCommunityIcons
              name={'clock-outline'}
              color={colors.primary}
              size={30}
            />
          </View>
        </View>
      )}
      {input2 && (
        <View style={styles.input2}>
          {input2 === 'text' && (
            <View style={styles.row}>
              <TextInput
                style={[styles.input, price && styles.inputAlternate, style]}
                placeholder={initialText2}
                onChangeText={onChangeText2}
                value={valueText2}
                selectionColor={colors.primary}
                keyboardType={price2 ? 'numeric' : 'default'}
                placeholderTextColor={colors.primary}
                returnKeyType={'next'}
              />
              {price2 && (
                <TouchableOpacity style={styles.part2} activeOpacity={0.75}>
                  <Text t3 color={Color.primary}>
                    ADA
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          {input2 === 'date' && (
            <View style={styles.row}>
              <TextInput
                style={[styles.inputAlternate, style]}
                placeholder={
                  initialText2 !== undefined ? initialText2 : '__.__.____'
                }
                keyboardType={'numeric'}
                onChangeText={onChangeText2}
                value={valueText2}
                selectionColor={colors.primary}
                placeholderTextColor={colors.primary}
                returnKeyType={'next'}
              />
              <View style={styles.part2}>
                <MaterialCommunityIcons
                  name={'calendar-check-outline'}
                  color={colors.primary}
                  size={30}
                />
              </View>
            </View>
          )}
          {input2 === 'time' && (
            <View style={styles.row}>
              <TextInput
                style={[styles.inputAlternate, style]}
                placeholder={
                  initialText2 !== undefined ? initialText2 : '__:__'
                }
                keyboardType={'numeric'}
                onChangeText={onChangeText2}
                value={valueText2}
                selectionColor={colors.primary}
                placeholderTextColor={colors.primary}
                returnKeyType={'next'}
              />
              <View style={styles.part2}>
                <MaterialCommunityIcons
                  name={'clock-outline'}
                  color={colors.primary}
                  size={30}
                />
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    paddingVertical: 12.5,
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: 5,
  },
  input2: {
    marginTop: 10,
  },
  input: {
    height: 50,
    width: '100%',
    borderRadius: 25,
    paddingLeft: 25,
    backgroundColor: Color.bg2,
  },
  inputAlternate: {
    height: 50,
    width: '80%',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 25,
    backgroundColor: Color.bg2,
  },
  part2: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightRadius: 25,
    backgroundColor: Color.bg2,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  row: {
    flexDirection: 'row',
  },
});
