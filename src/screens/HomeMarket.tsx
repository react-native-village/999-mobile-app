import React from 'react'

import {HomeMarket} from 'src/components/HomeMarket'
import {useTypedNavigation} from 'src/hooks'
import {MarketInfo} from 'src/types'

export function HomeMarketScreen() {
  const {navigate} = useTypedNavigation()

  const onPressCard = (item: MarketInfo) => {
    navigate('marketDetail', item)
  }

  const onPressProfile = () => {
    navigate('profile')
  }

  const onPressSettings = () => {
    navigate('settings')
  }

  const onPressSearch = () => {
    navigate('search')
  }

  const onPressScan = () => {
    navigate('scan')
  }

  return (
    <HomeMarket
      onPressSettings={onPressSettings}
      onPressProfile={onPressProfile}
      onPressCard={onPressCard}
      onPressSearch={onPressSearch}
      onPressScan={onPressScan}
    />
  )
}
