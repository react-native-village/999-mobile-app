import React from 'react';

import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {IS_IOS} from 'src/variables';

interface SearchBarProps {
  clicked: boolean;
  searchPhrase: string;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchBar({
  clicked,
  searchPhrase,
  setClicked,
  setSearchPhrase,
}: SearchBarProps) {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <View style={styles.preContainer}>
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setClicked(true);
            }}
          />
        </View>
        {clicked && (
          <TouchableOpacity
            onPress={() => {
              setSearchPhrase('');
              Keyboard.dismiss();
              setClicked(false);
            }}>
            <IonIcon name="close-circle-outline" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      {!clicked && <IonIcon name="search-outline" style={styles.icon} />}
    </View>
  );
}

const rawStyles = StyleSheet.create({
  preContainer: {
    width: '90%',
    height: 50,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: Color.primary1,
  },
  search: {
    flex: 1,
  },
  input: {
    fontSize: 20,
    lineHeight: 20,
    marginLeft: 16,
    textAlignVertical: 'center',
    top: IS_IOS ? 4 : 0,
    height: '100%',
  },
  icon: {marginHorizontal: 10, fontSize: 28, color: Color.primary},
});
