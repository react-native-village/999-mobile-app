import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Background, Spacer, TicketCardColumn} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {TicketInfo} from 'src/types';

import {HomeMarketHeader} from './HomeMarketHeader';

import {Categories} from '../ui/categories';
import {HeaderList} from '../ui/headerList';

interface HomeMarketProps {
  onPressCard: (item: TicketInfo) => void;
  onPressProfile: () => void;
  onPressSettings: () => void;
}

export function HomeMarket({
  onPressCard,
  onPressProfile,
  onPressSettings,
}: HomeMarketProps) {
  const {styles} = useThematicStyles(rawStyles);

  return (
    <Background>
      <HomeMarketHeader
        onPressSettings={onPressSettings}
        onPressProfile={onPressProfile}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Categories />
          <View style={styles.flatListContainer}>
            <FlatList
              horizontal
              data={DATA}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <TicketCardColumn onPress={onPressCard} {...item} />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
          <HeaderList title="Newest Events" button="See all" />
          <View style={styles.flatListContainer}>
            <FlatList
              horizontal
              data={DATA}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <TicketCardColumn onPress={onPressCard} {...item} />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
          <HeaderList title="Expiring Soon" button="See all" />
          <View style={styles.flatListContainer}>
            <FlatList
              horizontal
              data={DATA}
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TicketCardColumn onPress={onPressCard} {...item} />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}

function Separator() {
  return <Spacer width={12.5} />;
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  flatListContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
});

export const DATA: TicketInfo[] = [
  {
    id: '1',
    name: 'Groovy Tunes',
    tags: ['Rock', 'Funny'],
    startData: 1836575410,
    endData: 1672947919,
    geoPosition: 'Retro Mountain',
    price: 100000,
    currencySymbols: 'ADA',
    imageUrl:
      'https://d1629ugb7moz2f.cloudfront.net/e/21162/cFPvQBjmRmwyo1PA0VR4hO572mDold5r664eQISO.jpg',
  },
  {
    id: '2',
    name: 'Space Nation',
    tags: ['Festival', 'Music'],
    startData: 1066608715,
    endData: 1836575410,
    geoPosition: 'London, United Kingdom',

    imageUrl:
      'https://sun9-21.userapi.com/impg/6szHtBSxhWsTpgI6DxooVNJX5a91UnSyZ7v3IA/xyuHV-esCNk.jpg?size=1728x2160&quality=96&sign=03b666b473379e25cab2aed65755971a&type=album',
  },
  {
    id: '3',
    name: 'Gravity',
    tags: ['Fair'],
    startData: 1845245027,
    endData: 1363965191,
    geoPosition: 'Berlin, Germany',
    imageUrl:
      'https://sun9-45.userapi.com/impg/lFGaAdWwVD-RiW4bXw4bKcnXsWv606YEtDVkVw/-bJyCbt3Y0A.jpg?size=1728x2160&quality=96&sign=2873a53d37fb2a0260ad8eeda276c385&type=album',
  },
  {
    id: '4',
    name: 'TechnoCon',
    tags: ['Geek', 'Funny'],
    startData: 1710507435,
    endData: 1710907435,
    geoPosition: 'Bangkok, Tailand',
    imageUrl:
      'https://sun9-16.userapi.com/impg/IM0FOwieyY1mIZnpSCjRdTwsoDjSQKULiBA8VA/FB_BmF3zLwg.jpg?size=1920x1080&quality=96&sign=642aa11f787d1a0407227250c63d4aa0&type=album',
  },
  {
    id: '5',
    name: 'Party Box',
    tags: ['Bootcamp', 'Funny'],
    startData: 1262177088,
    endData: 1449452932,
    geoPosition: 'Bom, Belgium',
    imageUrl:
      'https://sun9-10.userapi.com/impg/S7lroEi5Ox84ce1k898ZQ80OcaLt7FIocaw5sg/A5Gf6lG6UaU.jpg?size=1728x2160&quality=96&sign=36306177bc52952d06692237696078d7&type=album',
  },
  {
    id: '6',
    name: 'Slow Motion',
    tags: ['Music'],
    startData: 1301231421,
    endData: 1514295824,
    geoPosition: 'Paris, France',
    imageUrl:
      'https://sun9-69.userapi.com/impg/jDt0aw3j-fLKxhu7mgnxh952Cg9ZhYnZkwLjXg/2kD7PrezqUw.jpg?size=1728x2160&quality=96&sign=a473e5ca3b9375621f1db528ca69fdbd&type=album',
  },
];
