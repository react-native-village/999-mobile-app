import React from 'react';

import {useFormContext} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

import {BlockMessage, Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';

import {FormDateTime} from './FormDateTime';
import {FormTextInput} from './FormTextInput';

interface InputFieldProps {
  // style?: StyleProp<ViewStyle>;
  title: string;
  name: string;
  fieldType: 'date' | 'time' | 'price' | 'input';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  placeholder?: string;
}

/**
 * USE WITH HOOK FORM PROVIDER
 */
export function InputField({
  title,
  fieldType,
  autoCapitalize,
  name,
  placeholder,
}: InputFieldProps) {
  const {styles} = useThematicStyles(rawStyles);
  const {
    formState: {errors},
  } = useFormContext();

  const error = errors[name];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text t12 style={styles.title}>
          {title}
        </Text>
      </View>
      {(fieldType === 'date' || fieldType === 'time') && (
        <FormDateTime
          placeholder={placeholder}
          name={name}
          isTime={fieldType === 'time'}
        />
      )}
      {(fieldType === 'price' || fieldType === 'input') && (
        <FormTextInput
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          isPrice={fieldType === 'price'}
          name={name}
        />
      )}
      {error && (
        <BlockMessage style={styles.errorBlock} blockType="error">
          {error.message as string}
        </BlockMessage>
      )}
    </View>
  );
}

const rawStyles = StyleSheet.create({
  errorBlock: {
    marginTop: 12,
    marginHorizontal: 6,
  },
  container: {
    paddingVertical: 12.5,
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
});
