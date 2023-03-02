import React, {useState} from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';

import {Color} from 'src/themeTypes';

import {InputContainer} from '../InputContainer';
import {Background, Button, CustomHeader, Text} from '../ui';

interface CreateEventProps {
  onBack: () => void;
}

export function CreateEvent({onBack}: CreateEventProps) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  return (
    <Background style={styles.background}>
      <CustomHeader
        onPressLeft={onBack}
        colorLeft={Color.primary}
        title={'Create Event'}
        iconLeft={'arrow-back'}
        style={styles.header}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.descriptionText}>
          <Text t8>Create new event</Text>
          <Text t12>
            You need to specify the data for the event for which you want to
            generate tickets.
          </Text>
        </View>
        <InputContainer
          title={'Event name *'}
          onChangeText={setName}
          initialText={'Event name'}
          input={'text'}
          valueText={name}
        />
        <InputContainer
          title={'Location *'}
          onChangeText={setLocation}
          initialText={'Location'}
          input={'text'}
          valueText={location}
        />
        <InputContainer
          title={'Country *'}
          onChangeText={setCountry}
          initialText={'Country'}
          input={'text'}
          valueText={country}
        />
        <InputContainer
          title={'Date *'}
          onChangeText={setCountry}
          input={'date'}
          valueText={country}
          onChangeText2={setTime}
          input2={'time'}
          valueText2={time}
        />
        <InputContainer
          title={'Price *'}
          onChangeText={setPrice}
          initialText={'Price'}
          input={'text'}
          valueText={price}
          price
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={() => {}}>
          Create
        </Button>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    width: '80%',
    marginBottom: 25,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 110,
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
