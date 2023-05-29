import React from 'react'

import {MarketDetail} from 'src/components/HomeMarket/MarketDetail'
import {useTypedNavigation, useTypedRoute} from 'src/hooks'

export function MarketDetailScreen() {
  const item = useTypedRoute<'marketDetail'>().params
  const {goBack} = useTypedNavigation()

  return <MarketDetail onBack={goBack} {...item} />
}
