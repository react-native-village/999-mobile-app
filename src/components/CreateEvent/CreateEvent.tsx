import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Color} from 'src/themeTypes';

import {Background, Button, CustomHeader, Text} from '../ui';
import {InputField} from '../ui/InputField';
import {KeyboardSafeArea} from '../ui/keyboard-safe-area';

interface CreateEventProps {
  onBack: () => void;
  handleSubmit: () => void;
}

export function CreateEvent({onBack, handleSubmit}: CreateEventProps) {
  const {bottom} = useSafeAreaInsets();

  return (
    <Background style={styles.background}>
      <KeyboardSafeArea>
        <CustomHeader
          onPressLeft={onBack}
          colorLeft={Color.primary}
          title={'Create Event'}
          iconLeft={'arrow-back'}
          style={styles.header}
        />
        <ScrollView
          contentContainerStyle={[
            styles.container,
            {paddingBottom: bottom + 10},
          ]}>
          <View style={styles.descriptionText}>
            <Text t8>Create new event</Text>
            <Text t12>
              You need to specify the data for the event for which you want to
              generate tickets.
            </Text>
          </View>
          <InputField
            fieldType="input"
            title="Event name *"
            placeholder="Event name"
            name="eventName"
          />
          <InputField
            fieldType="input"
            title="Location"
            placeholder="Location"
            name="location"
          />
          <InputField
            fieldType="input"
            title="Country"
            placeholder="Country"
            name="country"
          />
          <InputField
            fieldType="date"
            title="Date"
            placeholder="__.__.____"
            name="date"
          />
          <InputField
            fieldType="time"
            title="Time"
            placeholder="__:__"
            name="time"
          />
          <InputField
            fieldType="price"
            title="Price"
            placeholder="0 ETH"
            name="price"
          />
          {
            <Button style={styles.button} onPress={handleSubmit}>
              Create
            </Button>
          }
        </ScrollView>
      </KeyboardSafeArea>
    </Background>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  button: {
    width: '80%',
    marginTop: 16,
    alignSelf: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
  },
  descriptionText: {
    width: '100%',
    marginVertical: 25,
    height: 70,
    justifyContent: 'space-between',
  },
});
