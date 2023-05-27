import React from 'react'

import {HomeTickets} from 'src/components/HomeTickets'
import {useTypedNavigation} from 'src/hooks'
import {TicketInfo} from 'src/types'

export function HomeTicketsMarketScreen() {
  const {navigate} = useTypedNavigation()

  const onPressCard = (item: TicketInfo) => {
    navigate('ticketDetail', item)
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
    <HomeTickets
      onPressSettings={onPressSettings}
      onPressProfile={onPressProfile}
      onPressCard={onPressCard}
      onPressSearch={onPressSearch}
      onPressScan={onPressScan}
    />
  )
}
