import React, {useEffect, useRef, useState} from 'react'

import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'
import {StyleSheet, View, useColorScheme} from 'react-native'
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions'
import Svg, {Line, Polygon} from 'react-native-svg'

import {useThematicStyles} from 'src/hooks'

import {STROKE_WIDTH} from './costants'
import {getCurrentTime} from './timeUtils'

import {Background} from '../Background'
import {Text} from '../text'

function Poly({fill = 'none', strokeWidth = STROKE_WIDTH, points = '0.0'}) {
  const isDark = useColorScheme() === 'dark'
  const STROKE_COLOR = isDark ? 'rgb(52, 201, 252)' : '#FFA1CD'
  return (
    <Polygon
      points={points}
      fill={fill}
      stroke={STROKE_COLOR}
      strokeWidth={strokeWidth}
    />
  )
}

export default function ClockSunset() {
  const [hover, setHover] = useState(true)
  const [polyColors, setPolyColors] = useState(
    Array.from({length: 28}, () => DISABLED_COLOR),
  )
  const [time, setTime] = useState(getCurrentTime())
  const [lat, setLat] = useState(' ')
  const [lon, setLon] = useState(' ')
  const [solarNoon, getSolarNoon] = useState(' ')

  const response = axios
    .get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`)
    .then(locResponse => {
      if (locResponse.data && locResponse.data.results) {
        getSolarNoon(locResponse.data.results.solar_noon)
      } else {
        console.log('No data received')
      }
    })
    .catch(error => {
      console.error('Error fetching data: ', error)
    })

  const solarNoonStringToMinutes = solarNoonString => {
    const [timeLoc, period] = solarNoonString.split(' ')
    const [hours, minutes] = timeLoc.split(':').map(Number)
    let hoursIn24HourFormat = hours

    if (period === 'PM' && hours !== 12) {
      hoursIn24HourFormat += 12
    } else if (period === 'AM' && hours === 12) {
      hoursIn24HourFormat = 0
    }

    return hoursIn24HourFormat * 60 + minutes
  }

  const timeStringToMinutes = timeString => {
    const [hours, minutes] = timeString.split(':').map(Number)
    return hours * 60 + minutes
  }

  const utcDate = new Date(solarNoon + 'Z') // преобразование строки UTC-времени в объект Date
  const localDate = new Date(
    utcDate.getTime() + utcDate.getTimezoneOffset() * 60000,
  ) // перевод времени в локальный часовой пояс
  const SOLAR_TIME = solarNoonStringToMinutes(localDate)
  const MIN_TIME = timeStringToMinutes(time)
  console.log('time', time)
  useEffect(() => {
    check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      .then(resultCheck => {
        switch (resultCheck) {
          case RESULTS.UNAVAILABLE:
            break
          case RESULTS.DENIED:
            request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
              resultRequest => {
                if (resultRequest === RESULTS.GRANTED) {
                }
              },
            )
            break
          case RESULTS.GRANTED:
            break
          case RESULTS.BLOCKED:
            break
        }
      })
      .catch(() => {
        // handle error
      })

    const intervalId = setInterval(() => {
      const endOfDay = 24 * 60
      setTime(getCurrentTime())
      let numPolysToColor
      if (MIN_TIME <= solarNoon) {
        numPolysToColor = Math.round((MIN_TIME / SOLAR_TIME) * 27)
      } else {
        numPolysToColor = Math.round(
          ((endOfDay - MIN_TIME) / (endOfDay - SOLAR_TIME)) * 27,
        )
      }
      setPolyColors(prevColors =>
        prevColors.map((color, i) =>
          i < numPolysToColor ? CHOSEN_COLOR : DISABLED_COLOR,
        ),
      )
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  Geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      // Теперь вы можете использовать широту и долготу
      setLat(latitude)
      setLon(longitude)
    },
    error => {
      // Обработка ошибок
      console.error(error)
    },
    {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
  )

  const isDark = useColorScheme() === 'dark'
  const DISABLED_COLOR = isDark ? '#0B0B0B' : '#F5F5F5'
  const STROKE_COLOR = isDark ? 'rgb(52, 201, 252)' : '#FFA1CD'
  const CHOSEN_COLOR = isDark ? 'rgb(52, 201, 252)' : '#FFA1CD'

  polyColors[0] = CHOSEN_COLOR
  const {styles} = useThematicStyles(rawStyles)

  const toggle = () => {
    if (hover === false) {
      setHover(true)
    }
    setHover(!hover)
  }

  const handlePolygonPress = index => {
    setPolyColors(prevColors => {
      const newColors = prevColors.map((color, i) => {
        if (i <= index) {
          return CHOSEN_COLOR // Цвет выбранного полигона
        }
        return DISABLED_COLOR // Цвет выключенного полигона
      })
      return newColors
    })
  }

  const refs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    6: useRef(null),
    7: useRef(null),
    8: useRef(null),
    9: useRef(null),
    10: useRef(null),
    20: useRef(null),
    30: useRef(null),
    40: useRef(null),
    50: useRef(null),
    60: useRef(null),
    70: useRef(null),
    80: useRef(null),
    90: useRef(null),
    100: useRef(null),
    300: useRef(null),
    400: useRef(null),
    500: useRef(null),
    600: useRef(null),
    700: useRef(null),
    800: useRef(null),
    900: useRef(null),
    0: useRef(null),
  }

  const SVG_HEIGHT = 320.49
  const SVG_WIDTH = 276.95

  return (
    <Background>
      <View style={styles.container}>
        <View>
          <Text ibm1>{time}</Text>
        </View>
        <View>
          <Svg height={SVG_HEIGHT} width={SVG_WIDTH}>
            {/* Axis 1 */}
            <Line
              x1="138.46"
              y1="159.52"
              x2="138.49"
              y2="318.16"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 2 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="92.66"
              y2="238.88"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 3 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="3.22"
              y2="238.23"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 4 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="47.08"
              y2="159.65"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 5 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="2.02"
              y2="80.99"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 6 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="93.37"
              y2="81.48"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 7 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="138.46"
              y2="2.71"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 8 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="184.18"
              y2="80.81"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 9 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="274.78"
              y2="81.05"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 10 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="229.74"
              y2="159.65"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 11 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="274.93"
              y2="238.31"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Axis 12 */}
            <Line
              x1="138.46"
              y1="159.65"
              x2="184.18"
              y2="238.77"
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
            />
            {/* Shakti внешний треугольник */}
            <Poly points="1.75 80.82 275.15 80.82 138.45 318.49 1.75 80.82" />

            {/* Shiva внешний треугольник */}
            <Poly points="1.73 238.47 138.47 2 275.22 238.47 1.73 238.47" />

            {/* Shakti средний треугольник */}
            <Poly points="36.21 100.64 240.39 100.83 138.47 278.43 36.21 100.64" />

            {/* Shiva средний треугольник */}
            <Poly points="138.47 41.83 241.29 218.91 35.4 219.07 138.47 41.83" />

            {/* Shakti малый треуголник */}
            <Poly points="70.91 120.7 205.86 120.73 138.46 237.47 70.91 120.7" />

            {/* Shiva малый треуголник */}
            <Poly points="71.07 198.44 138.45 81.83 205.86 198.56 71.07 198.44" />

            {/* Shakti внутрений треугольник */}
            <Poly points="106.07 140.95 170.92 140.91 138.5 197.46 106.07 140.95" />

            {/* Shiva внутрений треугольник */}
            <Poly points="105.65 178.6 138.48 121.84 171.29 178.6 105.65 178.6" />

            {/* Shakti 999 */}
            <Poly points="132.09 156.23 145.21 156.24 138.61 167.7 132.09 156.23" />

            {/* Shiva 999 */}
            <Poly points="132.07 164.06 138.59 152.5 145.31 164.16 132.07 164.06" />

            {/* Polygon001 Shakti */}
            <Polygon
              ref={refs[1]}
              points="93.75 238.88 103.92 221.39 137.48 279.64 137.48 314.5 93.75 238.88"
              fill={polyColors[1]}
              strokeWidth="0"
              onPress={() => {
                handlePolygonPress(1)
              }}
            />

            {/* Polygon002 Shakti */}
            <Polygon
              ref={refs[2]}
              points="48.47 160.65 68.99 160.65 102.78 219.38 92.61 236.97 48.47 160.65"
              fill={polyColors[2]}
              strokeWidth="0"
              onPress={() => {
                handlePolygonPress(2)
              }}
            />
            {/* Polygon003 Shakti */}
            <Polygon
              ref={refs[3]}
              points="3.63 83.07 34.66 100.96 67.84 158.64 47.32 158.65 3.63 83.07"
              fill={polyColors[3]}
              strokeWidth="0"
              onPress={() => {
                handlePolygonPress(3)
              }}
            />
            {/* Polygon004 Shakti */}
            <Polygon
              ref={refs[4]}
              points="35.62 99.14 4.66 81.35 92.13 81.33 102.43 99.2 35.62 99.14"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[4]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(4)
              }}
            />
            {/* Polygon005 Shakti */}
            <Polygon
              ref={refs[5]}
              points="104.74 99.2 94.5 81.35 182.72 81.33 172.32 99.26 104.74 99.2"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[5]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(5)
              }}
            />
            {/* Polygon006 Shakti */}
            <Polygon
              ref={refs[6]}
              points="174.63 99.27 185.02 81.33 272.27 81.32 241.06 99.33 174.63 99.27"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[6]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(6)
              }}
            />
            {/* Polygon007 Shakti */}
            <Polygon
              ref={refs[7]}
              points="208.96 158.61 241.93 101.15 273.21 83.15 229.59 158.64 208.96 158.61"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[7]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(7)
              }}
            />
            {/* Polygon008 Shakti */}
            <Polygon
              ref={refs[8]}
              points="174.12 219.32 207.79 160.65 228.43 160.65 184.3 236.99 174.12 219.32"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[8]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(8)
              }}
            />
            {/* Polygon009 Shakti */}
            <Polygon
              ref={refs[9]}
              points="139.49 279.67 172.93 221.39 183.15 238.99 139.49 314.53 139.49 279.67"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[9]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(9)
              }}
            />
            {/* Polygon010 Shakti */}
            <Polygon
              ref={refs[10]}
              points="105.08 219.38 115.69 201.04 137.48 238.76 137.48 275.62 105.08 219.38"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[10]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(10)
              }}
            />
            {/* Polygon020  Shiakti */}
            <Polygon
              ref={refs[20]}
              points="71.3 160.65 92.35 160.65 114.55 199.06 103.94 217.32 71.3 160.65"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[11]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(11)
              }}
            />
            {/* Polygon030 Shakti */}
            <Polygon
              ref={refs[30]}
              points="70.14 158.65 38.11 102.95 69.31 120.94 91.2 158.65 70.14 158.65"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[12]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(12)
              }}
            />
            {/* Polygon040  Shakti */}
            <Polygon
              ref={refs[40]}
              points="38.99 101.14 103.6 101.19 113.97 119.2 70.31 119.2 38.99 101.14"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[13]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={this.toggle}
              onPressOut={this.toggle}
              onPress={() => {
                handlePolygonPress(13)
              }}
            />
            {/* Polygon050  Shakti */}
            <Polygon
              ref={refs[50]}
              points="116.29 119.2 105.91 101.2 171.15 101.25 160.75 119.22 116.29 119.2"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[14]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(14)
              }}
            />
            {/* Polygon060 Shakti */}
            <Polygon
              ref={refs[60]}
              points="163.05 119.22 173.5 101.28 237.6 101.33 206.54 119.23 163.05 119.22"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[15]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(15)
              }}
            />
            {/* Polygon070 Shakti */}
            <Polygon
              ref={refs[70]}
              points="185.7 158.65 207.42 121.04 238.49 103.13 206.65 158.65 185.7 158.65"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[16]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(16)
              }}
            />
            {/* Polygon080 Shakti */}
            <Polygon
              ref={refs[80]}
              points="162.38 199.04 184.55 160.65 205.48 160.65 172.95 217.34 162.38 199.04"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[17]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(17)
              }}
            />
            {/* Polygon090  Shakti */}
            <Polygon
              ref={refs[90]}
              points="139.37 238.9 161.23 201.04 171.79 219.36 139.48 275.63 139.37 238.9"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[18]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(18)
              }}
            />
            {/* Polygon100  Shakti */}
            <Polygon
              ref={refs[100]}
              points="116.83 199.06 127.24 181.08 137.48 198.69 137.47 234.74 116.83 199.06"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[19]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(19)
              }}
            />
            {/* Polygon200 Shikti */}
            <Polygon
              ref={refs[200]}
              points="94.47 160.65 115.5 160.65 126.08 179.07 115.67 197.08 94.47 160.65"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[20]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(20)
              }}
            />
            {/* Polygon300 Shakti */}
            <Polygon
              ref={refs[300]}
              points="93.44 158.64 72.78 122.94 104.28 141.09 114.36 158.65 93.44 158.64"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[21]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(21)
              }}
            />
            {/* Polygon400 Shakti */}
            <Polygon
              ref={refs[400]}
              points="73.79 121.2 115.14 121.22 125.46 139.14 104.91 139.16 73.79 121.2"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[22]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(22)
              }}
            />
            {/* Polygon500 Shakti */}
            <Polygon
              ref={refs[500]}
              points="117.43 121.2 159.58 121.23 149.2 139.13 127.82 139.19 117.43 121.2"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[23]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(23)
              }}
            />
            {/* Polygon600 Shakti */}
            <Polygon
              ref={refs[600]}
              points="151.54 139.11 161.93 121.2 203.04 121.26 172.1 139.11 151.54 139.11"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[24]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(24)
              }}
            />
            {/* Polygon700 Shakti */}
            <Polygon
              ref={refs[700]}
              points="162.54 158.64 172.57 141.15 203.94 123.05 183.41 158.65 162.54 158.64"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[25]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(25)
              }}
            />
            {/* Polygon800 Shakti*/}
            <Polygon
              ref={refs[800]}
              points="150.8 179.02 161.39 160.65 182.15 160.65 161.22 197.04 150.8 179.02"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[26]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(26)
              }}
            />
            {/* Polygon900 Shakti */}
            <Polygon
              ref={refs[900]}
              points="139.45 198.75 149.63 180.99 160.07 199.03 139.46 234.63 139.45 198.75"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[27]}
              strokeWidth="0"
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress(27)
              }}
            />
            {/* Polygon0 Shakti */}
            <Polygon
              ref={refs[0]}
              points="130.37 155.23 133.14 160.12 130.37 165.04 136.02 165.18 138.6 169.71 141.21 165.18 147.05 165.18 144.13 160.12 146.94 155.24 141.31 155.23 138.58 150.48 135.9 155.23 130.37 155.23"
              stroke={hover ? DISABLED_COLOR : CHOSEN_COLOR}
              fill={polyColors[0]}
              strokeWidth={STROKE_WIDTH}
              delayPressIn={0}
              onPressIn={toggle}
              onPressOut={toggle}
              onPress={() => {
                handlePolygonPress({
                  fill001: DISABLED_COLOR,
                  fill002: DISABLED_COLOR,
                  fill003: DISABLED_COLOR,
                  fill004: DISABLED_COLOR,
                  fill005: DISABLED_COLOR,
                  fill006: DISABLED_COLOR,
                  fill007: DISABLED_COLOR,
                  fill008: DISABLED_COLOR,
                  fill009: DISABLED_COLOR,
                  fill0010: DISABLED_COLOR,
                  fill0011: DISABLED_COLOR,
                  fill0012: DISABLED_COLOR,
                  fill0013: DISABLED_COLOR,
                  fill0014: DISABLED_COLOR,
                  fill0015: DISABLED_COLOR,
                  fill0016: DISABLED_COLOR,
                  fill0017: DISABLED_COLOR,
                  fill0018: DISABLED_COLOR,
                  fill0019: DISABLED_COLOR,
                  fill0020: DISABLED_COLOR,
                  fill0021: DISABLED_COLOR,
                  fill0022: DISABLED_COLOR,
                  fill0023: DISABLED_COLOR,
                  fill0024: DISABLED_COLOR,
                  fill0025: DISABLED_COLOR,
                  fill0026: DISABLED_COLOR,
                  fill0027: DISABLED_COLOR,
                  fill000: DISABLED_COLOR,
                })
              }}
            />
          </Svg>
        </View>
      </View>
    </Background>
  )
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
