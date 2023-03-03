import React, {useRef, useState} from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';

import {Color} from 'src/themeTypes';
import {EventError} from 'src/types';

import {InputContainer} from '../InputContainer';
import {Background, Button, CustomHeader, Text} from '../ui';

interface CreateEventProps {
  onBack: () => void;
}

export function CreateEvent({onBack}: CreateEventProps) {
  const [error, setError] = useState<EventError>('none');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [datePlaceholder, setDatePlaceholder] = useState('__.__.____');
  const [timePlaceholder, setTimePlaceholder] = useState('__:__');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const createEventRef = useRef();
  const locationRef = useRef();
  const countryRef = useRef();
  const priceRef = useRef();
  function createEvent() {
    if (name === '') return setError('eventName');
    if (location === '') return setError('location');
    if (country === '') return setError('country');
    if (datePlaceholder === '__.__.____' || timePlaceholder === '__:__')
      return setError('date');
    if (Number(price) < 1) return setError('price');
    return setError('none');
  }
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
          error={error}
          currentRef={createEventRef}
          nextRef={locationRef}
          onChangeValue={setName}
          initialText={'Event name'}
          input={'eventName'}
          value={name}
        />
        <InputContainer
          title={'Location *'}
          error={error}
          currentRef={locationRef}
          nextRef={countryRef}
          onChangeValue={setLocation}
          initialText={'Location'}
          input={'location'}
          value={location}
        />
        <InputContainer
          title={'Country *'}
          error={error}
          currentRef={countryRef}
          nextRef={priceRef}
          onChangeValue={setCountry}
          initialText={'Country'}
          input={'country'}
          value={country}
        />
        <InputContainer
          title={'Date *'}
          error={error}
          onChangeDate={setDate}
          input={'date'}
          dateValue={date}
          datePlaceholder={datePlaceholder}
          setDatePlaceholder={setDatePlaceholder}
          time
          timePlaceholder={timePlaceholder}
          setTimePlaceholder={setTimePlaceholder}
        />
        <InputContainer
          title={'Price *'}
          error={error}
          currentRef={priceRef}
          onChangeValue={setPrice}
          initialText={'Price'}
          input={'price'}
          value={price}
          price
        />
      </ScrollView>
      <Button style={styles.button} onPress={createEvent}>
        Create
      </Button>
    </Background>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  button: {
    width: '80%',
    marginVertical: 25,
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
