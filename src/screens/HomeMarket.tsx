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
    name: 'Ring of Knowledge WEB3',
    tags: ['New', 'Hot', '999'],
    price: 1,
    currencySymbols: 'ETH',
    imageUrl: require('../../assets/images/rings/ringnft.gif'),
    tickets: 9,
    description:
      'The WEB3 Knowledge Ring is an exclusive and valuable NFT providing access to the WEB3 University, where you can learn cutting-edge technologies and skills needed to succeed in the world of digital assets and decentralized applications. \n\n By purchasing this ring, you become a member of a prestigious educational institution where experts and specialists in the field of blockchain, smart contracts, cryptocurrencies and decentralized finance (DeFi) share their knowledge and experience to train a new generation of WEB3 professionals. \n\n The WEB3 Knowledge Ring gives you unlimited access to all courses, webinars, master classes and educational materials available on the university platform. You can choose from a variety of educational programs and develop your skills at a pace that suits you. \n\n The WEB3 Knowledge Ring is an investment in your education and future. It is a symbol of your meteoric career in the WEB3 world and your part in shaping the new digital economy.',
    priceInDollars: 1667.27,
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
