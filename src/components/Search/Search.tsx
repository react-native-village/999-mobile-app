import React, {useEffect, useState} from 'react';

import {HeaderButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useTypedNavigation} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';
import {ticketsData} from 'src/variables/temporaryData';

import {SearchBar} from './SearchBar';
import {SearchNoResults} from './SearchNoResults';

import {Background, Spacer, Text, TicketCardRow} from '../ui';

function SearchData(searchPhrase: string) {
  let data: TicketInfo[] = [];
  ticketsData.map(item => {
    if (searchPhrase === '') {
      return data.push(item);
    }
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    )
      return data.push(item);
    else return;
  });
  return data;
}

interface SearchProps {
  onPressCard: (item: TicketInfo) => void;
}

const headerRight = ({}: HeaderButtonProps) => {
  return (
    <TouchableOpacity>
      <Text color={Color.primary} t14>
        Сортировать
      </Text>
    </TouchableOpacity>
  );
};
export function Search({onPressCard}: SearchProps) {
  const {bottom} = useSafeAreaInsets();
  const [searchPhrase, setSearchPhrase] = useState('');
  const nav = useTypedNavigation();

  useEffect(() => {
    nav.setOptions({
      headerShown: true,
      headerRight,
      headerSearchBarOptions: {
        placeholder: 'Search',
        hideWhenScrolling: true,
      },
    });
  }, []);

  const footer = () => <Spacer height={bottom} />;

  return (
    <Background style={[styles.container]}>
      {/* <SearchBar
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      /> */}
      <FlatList
        ListEmptyComponent={SearchNoResults}
        data={SearchData(searchPhrase)}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TicketCardRow onPress={onPressCard} {...item} />
        )}
        ListFooterComponent={footer}
        keyExtractor={item => item.id}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
