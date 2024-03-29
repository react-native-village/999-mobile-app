import React from 'react'

import {ScrollView, StyleSheet, View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'

import {Background, Spacer} from 'src/components/ui'
import {useThematicStyles} from 'src/hooks'
import {MarketInfo} from 'src/types'
import {marketData} from 'src/variables/temporaryData'

import {HomeMarketHeader} from './HomeMarketHeader'

import {HeaderList} from '../ui/headerList'
import {MarketCardColumn} from '../ui/MarketCardColumn'

interface HomeMarketT {
  onPressCard: (item: MarketInfo) => void
  onPressSettings?: () => void
  onPressProfile?: () => void
  onPressSearch?: () => void
  onPressScan?: () => void
}

export function HomeMarket({
  onPressCard,
  onPressSettings,
  onPressProfile,
  onPressSearch,
  onPressScan,
}: HomeMarketT) {
  const {styles} = useThematicStyles(rawStyles)
  return (
    <Background>
      <HomeMarketHeader
        onPressSettings={onPressSettings}
        onPressProfile={onPressProfile}
        onPressSearch={onPressSearch}
        onPressScan={onPressScan}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.flatListContainer}>
            <HeaderList title="NEW COLLECTION" button="See all" />
            <FlatList
              horizontal
              data={marketData}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <MarketCardColumn onPress={onPressCard} {...item} />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
          <View style={styles.flatListContainer}>
            <HeaderList title="Thailand symbols" button="See all" />
            <FlatList
              horizontal
              data={marketData}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <MarketCardColumn onPress={onPressCard} {...item} />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </View>
      </ScrollView>
    </Background>
  )
}

function Separator() {
  return <Spacer width={12.5} />
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
})
