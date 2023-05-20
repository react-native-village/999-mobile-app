import React, {useState} from 'react'

import {HomeTimeHeader} from './HomeTimeHeader'

import {Background} from '../ui'
import ClockAlphabet from '../ui/clock/alphabet-clock'
import ClockNumber from '../ui/clock/number-clock'

export function HomeTime() {
  const [clockState, setClock] = useState('alphabet')
  if (clockState === 'alphabet') {
    return (
      <Background>
        <HomeTimeHeader
          onPressLetter={() => setClock('alphabet')}
          onPressNumbers={() => setClock('numbers')}
        />
        <ClockAlphabet />
      </Background>
    )
  }
  if (clockState === 'numbers') {
    return (
      <Background>
        <HomeTimeHeader
          onPressLetter={() => setClock('alphabet')}
          onPressNumbers={() => setClock('numbers')}
        />
        <ClockNumber />
      </Background>
    )
  }
}
