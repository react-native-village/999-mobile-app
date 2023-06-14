import React from 'react'

import Geolocation from 'react-native-geolocation-service'
import {getSunrise, getSunset} from 'sunrise-sunset-js'

const currentDate = new Date()

function processLocation(latitude, longitude) {
  console.log('Широта:', latitude)
  console.log('Долгота:', longitude)

  getSunrise(latitude, longitude, currentDate)
  getSunset(latitude, longitude, currentDate)
}

function _getCurrentPosition() {
  Geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      processLocation(latitude, longitude)
    },
    error => {
      console.log(error.message)
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  )
}
_getCurrentPosition()
// export const sunrise = getSunrise(latitude, longitude, currentDate)
// export const sunset = getSunset(latitude, longitude, currentDate)
