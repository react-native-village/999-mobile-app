import React from 'react'

// import {HomeMarket} from 'src/components/HomeMarket'
import {MarketDetail} from 'src/components/HomeMarket/MarketDetail'
import {useTypedNavigation, useTypedRoute} from 'src/hooks'
// import {MarketInfo} from 'src/types'

// import {MarketDetailScreen} from './MarketDetail'

export function HomeMarketScreen() {
  // const {navigate} = useTypedNavigation()

  const item = {
    id: '0',
    name: '999 Thailand 1',
    tags: ['New', 'Hot', '999'],
    price: 999,
    currencySymbols: 'ZLT',
    imageUrl: {uri: 'https://leelachakra.com/resource/999dao/ringnft.gif'},
    tickets: 10,
    description: 'Gold ring',
  }

  // const onPressCard = (item: MarketInfo) => {
  //   navigate('marketDetail', item)
  // }

  // const onPressProfile = () => {
  //   navigate('profile')
  // }

  // const onPressSettings = () => {
  //   navigate('settings')
  // }

  // const onPressSearch = () => {
  //   navigate('search')
  // }

  // const onPressScan = () => {
  //   navigate('scan')
  // }

  return <MarketDetail onBack={() => {}} {...item} />
}
