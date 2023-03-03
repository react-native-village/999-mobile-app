import React, {useState} from 'react';

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {EventError, InputNameType} from 'src/types';

interface InputContainerProps {
  style?: StyleProp<ViewStyle>;
  error?: EventError;
  title: string;
  datePlaceholder?: string;
  setDatePlaceholder?: React.Dispatch<React.SetStateAction<string>>;
  timePlaceholder?: string;
  setTimePlaceholder?: React.Dispatch<React.SetStateAction<string>>;
  currentRef?: any;
  nextRef?: any;
  price?: boolean;
  time?: boolean;
  value?: string;
  dateValue?: Date;
  onChangeValue?: React.Dispatch<React.SetStateAction<string>>;
  onChangeDate?: React.Dispatch<React.SetStateAction<Date>>;
  initialText?: string;
  input: InputNameType;
}

export function InputContainer({
  style,
  error,
  datePlaceholder,
  setDatePlaceholder,
  timePlaceholder,
  setTimePlaceholder,
  title,
  price,
  currentRef,
  nextRef,
  time,
  value,
  dateValue,
  onChangeDate,
  onChangeValue,
  initialText,
  input,
}: InputContainerProps) {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const {styles, colors} = useThematicStyles(rawStyles);
  const setDate = (event: DateTimePickerEvent, date: Date | undefined) => {
    setShowDate(false);
    const {type} = event;
    if (type === 'set') {
      onChangeDate!(date!);
      setDatePlaceholder!(format(date!, 'dd.MM.yyyy'));
      console.log(format(date!, 'dd.MM.yyyy HH:mm'));
    }
  };
  const setTime = (event: DateTimePickerEvent, date: Date | undefined) => {
    setShowTime(false);
    const {type} = event;
    if (type === 'set') {
      onChangeDate!(date!);
      setTimePlaceholder!(format(date!, 'HH:mm'));
      console.log(format(date!, 'dd.MM.yyyy HH:mm'));
      nextRef.current.focus();
    }
  };
  const isText = () => {
    switch (input) {
      case 'country':
        return true;
      case 'eventName':
        return true;
      case 'location':
        return true;
      case 'price':
        return true;
      default:
        return false;
    }
  };

  const errorText = () => {
    switch (error) {
      case 'country':
        return 'Country';
      case 'eventName':
        return 'Event name';
      case 'location':
        return 'Location';
      case 'price':
        return 'Price';
      case 'date': {
        if (datePlaceholder === '__.__.____') return 'Date';
        if (timePlaceholder === '__:__') return 'Time';
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text t12 style={styles.title}>
          {title}
        </Text>
        {error === input && (
          <Text t12 style={styles.title} color={Color.textRed1}>
            {' '}
            Invalid {errorText()}
          </Text>
        )}
      </View>
      {isText() && (
        <View style={styles.row}>
          <TextInput
            style={[
              styles.input,
              price && styles.inputAlternate,
              style,
              {color: colors.primary},
            ]}
            ref={currentRef}
            autoCapitalize={'words'}
            placeholder={initialText}
            blurOnSubmit={nextRef ? false : true}
            onChangeText={onChangeValue}
            onSubmitEditing={() => nextRef && nextRef.current.focus()}
            value={value}
            selectionColor={colors.primary}
            keyboardType={price ? 'phone-pad' : 'default'}
            placeholderTextColor={colors.primary}
            returnKeyType={nextRef ? 'next' : 'default'}
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
        <View style={time && styles.dateContainer}>
          <Pressable style={styles.row} onPress={() => setShowDate(true)}>
            <View style={[styles.inputAlternate, style]}>
              <Text t9 color={Color.primary}>
                {datePlaceholder}
              </Text>
            </View>
            <View style={styles.part2}>
              <MaterialCommunityIcons
                name={'calendar-check-outline'}
                color={colors.primary}
                size={30}
              />
            </View>
          </Pressable>
          {time && (
            <Pressable style={styles.row} onPress={() => setShowTime(true)}>
              <View style={[styles.inputAlternate, style]}>
                <Text t9 color={Color.primary}>
                  {timePlaceholder}
                </Text>
              </View>
              <View style={styles.part2}>
                <MaterialCommunityIcons
                  name={'clock-outline'}
                  color={colors.primary}
                  size={30}
                />
              </View>
            </Pressable>
          )}
        </View>
      )}
      {showDate && (
        <DateTimePicker
          mode={'date'}
          display={'spinner'}
          onChange={setDate}
          value={dateValue!}
          minimumDate={new Date()}
        />
      )}
      {showTime && (
        <DateTimePicker
          mode={'time'}
          display={'spinner'}
          onChange={setTime}
          value={dateValue!}
          minimumDate={new Date()}
        />
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
  dateContainer: {
    height: 110,
    justifyContent: 'space-between',
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
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    lineHeight: 22,
  },
  inputAlternate: {
    height: 50,
    width: '80%',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 25,
    backgroundColor: Color.bg2,
    flexDirection: 'row',
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
