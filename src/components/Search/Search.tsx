import React, {useState} from 'react';

import {FlatList, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {TicketInfo} from 'src/types';

import {SearchBar} from './SearchBar';
import {SearchNoResults} from './SearchNoResults';

import {DATA} from '../HomeMarket';
import {Background, Separator, TicketCardRow} from '../ui';

function SearchData(searchPhrase: string) {
  let data: TicketInfo[] = [];
  DATA.map(item => {
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

export function Search({onPressCard}: SearchProps) {
  const insets = useSafeAreaInsets();
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  return (
    <Background
      style={[
        styles.container,
        {marginBottom: insets.bottom, marginTop: insets.top},
      ]}>
      <SearchBar
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <FlatList
        ListEmptyComponent={SearchNoResults}
        data={SearchData(searchPhrase)}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TicketCardRow onPress={onPressCard} {...item} />
        )}
        ItemSeparatorComponent={Separator}
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
