import React, {Component} from 'react'

import {ScrollView, StyleSheet, View} from 'react-native'
import Svg, {Line, Path, Polygon} from 'react-native-svg'

// import Axis from './axis'
import {
  CHOSEN_COLOR,
  DEFAULT_COLOR,
  DISABLED_COLOR,
  STROKE_COLOR,
  STROKE_WIDTH,
} from './costants'

import {Background} from '../Background'
import {Text} from '../text'

function Poly({
  stroke = STROKE_COLOR,
  fill = 'none',
  strokeWidth = STROKE_WIDTH,
  points = '0.0',
}) {
  return (
    <Polygon
      points={points}
      fill={fill}
      stroke={STROKE_COLOR}
      strokeWidth={strokeWidth}
    />
  )
}

function Axis({startPoint = ['0,0', '0,0'], endPoint = ['0,0', '0,0']}) {
  return (
    <Line
      x1={startPoint[0]}
      y1={startPoint[1]}
      x2={endPoint[0]}
      y2={endPoint[1]}
      stroke={STROKE_COLOR}
      strokeWidth={STROKE_WIDTH}
    />
  )
}

let result = {}

const setActivePolys = (num = 0) => {
  const till = 27

  for (let i = 0; i <= till; i++) {
    result[`fill00${i}`] = i <= num ? CHOSEN_COLOR : DEFAULT_COLOR
  }
  return result
}
export default class ClockAlphabet extends Component {
  constructor() {
    super()
    this.state = Object.assign({hover: true}, setActivePolys())
  }

  toggle = () => {
    this.setState({hover: !this.state.hover})
  }
  render() {
    const SVG_HEIGHT = 320.49
    const SVG_WIDTH = 276.95

    return (
      <Background>
        <View style={styles.container}>
          <View>
            <Text ibm1>
              {result.fill0027 === '#FFA1CD'
                ? 'Z'
                : result.fill0026 === '#FFA1CD'
                ? 'Z'
                : result.fill0025 === '#FFA1CD'
                ? 'Z'
                : result.fill0024 === '#FFA1CD'
                ? 'Y'
                : result.fill0023 === '#FFA1CD'
                ? 'X'
                : result.fill0022 === '#FFA1CD'
                ? 'W'
                : result.fill0021 === '#FFA1CD'
                ? 'V'
                : result.fill0020 === '#FFA1CD'
                ? 'U'
                : result.fill0019 === '#FFA1CD'
                ? 'T'
                : result.fill0018 === '#FFA1CD'
                ? 'S'
                : result.fill0017 === '#FFA1CD'
                ? 'R'
                : result.fill0016 === '#FFA1CD'
                ? 'Q'
                : result.fill0015 === '#FFA1CD'
                ? 'P'
                : result.fill0014 === '#FFA1CD'
                ? 'O'
                : result.fill0013 === '#FFA1CD'
                ? 'N'
                : result.fill0012 === '#FFA1CD'
                ? 'M'
                : result.fill0011 === '#FFA1CD'
                ? 'L'
                : result.fill0010 === '#FFA1CD'
                ? 'K'
                : result.fill009 === '#FFA1CD'
                ? 'J'
                : result.fill008 === '#FFA1CD'
                ? 'I'
                : result.fill007 === '#FFA1CD'
                ? 'H'
                : result.fill006 === '#FFA1CD'
                ? 'G'
                : result.fill005 === '#FFA1CD'
                ? 'F'
                : result.fill004 === '#FFA1CD'
                ? 'E'
                : result.fill003 === '#FFA1CD'
                ? 'D'
                : result.fill002 === '#FFA1CD'
                ? 'C'
                : result.fill001 === '#FFA1CD'
                ? 'B'
                : 'A'}
            </Text>
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
                ref="001"
                points="93.75 238.88 103.92 221.39 137.48 279.64 137.48 314.5 93.75 238.88"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill001}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(1))
                }}
              />

              {/* Polygon002 Shakti */}
              <Polygon
                ref="002"
                points="48.47 160.65 68.99 160.65 102.78 219.38 92.61 236.97 48.47 160.65"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill002}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(2))
                }}
              />
              {/* Polygon003 Shakti */}
              <Polygon
                ref="003"
                points="3.63 83.07 34.66 100.96 67.84 158.64 47.32 158.65 3.63 83.07"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill003}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(3))
                }}
              />
              {/* Polygon004 Shakti */}
              <Polygon
                ref="004"
                points="35.62 99.14 4.66 81.35 92.13 81.33 102.43 99.2 35.62 99.14"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill004}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(4))
                }}
              />
              {/* Polygon005 Shakti */}
              <Polygon
                ref="005"
                points="104.74 99.2 94.5 81.35 182.72 81.33 172.32 99.26 104.74 99.2"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill005}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(5))
                }}
              />
              {/* Polygon006 Shakti */}
              <Polygon
                ref="006"
                points="174.63 99.27 185.02 81.33 272.27 81.32 241.06 99.33 174.63 99.27"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill006}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(6))
                }}
              />
              {/* Polygon007 Shakti */}
              <Polygon
                ref="007"
                points="208.96 158.61 241.93 101.15 273.21 83.15 229.59 158.64 208.96 158.61"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill007}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(7))
                }}
              />
              {/* Polygon008 Shakti */}
              <Polygon
                ref="008"
                points="174.12 219.32 207.79 160.65 228.43 160.65 184.3 236.99 174.12 219.32"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill008}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(8))
                }}
              />
              {/* Polygon009 Shakti */}
              <Polygon
                ref="009"
                points="139.49 279.67 172.93 221.39 183.15 238.99 139.49 314.53 139.49 279.67"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill009}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(9))
                }}
              />
              {/* Polygon010 Shakti */}
              <Polygon
                ref="010"
                points="105.08 219.38 115.69 201.04 137.48 238.76 137.48 275.62 105.08 219.38"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0010}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(10))
                }}
              />
              {/* Polygon020  Shiakti */}
              <Polygon
                ref="020"
                points="71.3 160.65 92.35 160.65 114.55 199.06 103.94 217.32 71.3 160.65"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0011}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(11))
                }}
              />
              {/* Polygon030 Shakti */}
              <Polygon
                ref="030"
                points="70.14 158.65 38.11 102.95 69.31 120.94 91.2 158.65 70.14 158.65"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0012}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(12))
                }}
              />
              {/* Polygon040  Shakti */}
              <Polygon
                ref="040"
                points="38.99 101.14 103.6 101.19 113.97 119.2 70.31 119.2 38.99 101.14"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0013}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(13))
                }}
              />
              {/* Polygon050  Shakti */}
              <Polygon
                ref="050"
                points="116.29 119.2 105.91 101.2 171.15 101.25 160.75 119.22 116.29 119.2"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0014}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(14))
                }}
              />
              {/* Polygon060 Shakti */}
              <Polygon
                ref="060"
                points="163.05 119.22 173.5 101.28 237.6 101.33 206.54 119.23 163.05 119.22"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0015}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(15))
                }}
              />
              {/* Polygon070 Shakti */}
              <Polygon
                ref="070"
                points="185.7 158.65 207.42 121.04 238.49 103.13 206.65 158.65 185.7 158.65"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0016}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(16))
                }}
              />
              {/* Polygon080 Shakti */}
              <Polygon
                ref="080"
                points="162.38 199.04 184.55 160.65 205.48 160.65 172.95 217.34 162.38 199.04"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0017}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(17))
                }}
              />
              {/* Polygon090  Shakti */}
              <Polygon
                ref="090"
                points="139.37 238.9 161.23 201.04 171.79 219.36 139.48 275.63 139.37 238.9"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0018}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(18))
                }}
              />
              {/* Polygon100  Shakti */}
              <Polygon
                ref="100"
                points="116.83 199.06 127.24 181.08 137.48 198.69 137.47 234.74 116.83 199.06"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0019}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(19))
                }}
              />
              {/* Polygon200 Shikti */}
              <Polygon
                ref="200"
                points="94.47 160.65 115.5 160.65 126.08 179.07 115.67 197.08 94.47 160.65"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0020}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(20))
                }}
              />
              {/* Polygon300 Shakti */}
              <Polygon
                ref="300"
                points="93.44 158.64 72.78 122.94 104.28 141.09 114.36 158.65 93.44 158.64"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0021}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(21))
                }}
              />
              {/* Polygon400 Shakti */}
              <Polygon
                ref="400"
                points="73.79 121.2 115.14 121.22 125.46 139.14 104.91 139.16 73.79 121.2"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0022}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(22))
                }}
              />
              {/* Polygon500 Shakti */}
              <Polygon
                ref="500"
                points="117.43 121.2 159.58 121.23 149.2 139.13 127.82 139.19 117.43 121.2"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0023}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(23))
                }}
              />
              {/* Polygon600 Shakti */}
              <Polygon
                ref="600"
                points="151.54 139.11 161.93 121.2 203.04 121.26 172.1 139.11 151.54 139.11"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0024}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(24))
                }}
              />
              {/* Polygon700 Shakti */}
              <Polygon
                ref="700"
                points="162.54 158.64 172.57 141.15 203.94 123.05 183.41 158.65 162.54 158.64"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0025}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(25))
                }}
              />
              {/* Polygon800 Shakti*/}
              <Polygon
                ref="800"
                points="150.8 179.02 161.39 160.65 182.15 160.65 161.22 197.04 150.8 179.02"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0026}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(26))
                }}
              />
              {/* Polygon900 Shakti */}
              <Polygon
                ref="900"
                points="139.45 198.75 149.63 180.99 160.07 199.03 139.46 234.63 139.45 198.75"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill0027}
                strokeWidth="0"
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState(setActivePolys(27))
                }}
              />
              {/* Polygon0 Shakti */}
              <Polygon
                ref="0"
                points="130.37 155.23 133.14 160.12 130.37 165.04 136.02 165.18 138.6 169.71 141.21 165.18 147.05 165.18 144.13 160.12 146.94 155.24 141.31 155.23 138.58 150.48 135.9 155.23 130.37 155.23"
                stroke={this.state.hover ? DISABLED_COLOR : CHOSEN_COLOR}
                fill={this.state.fill000}
                strokeWidth={STROKE_WIDTH}
                delayPressIn={0}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                onPress={() => {
                  this.setState({
                    fill001: DEFAULT_COLOR,
                    fill002: DEFAULT_COLOR,
                    fill003: DEFAULT_COLOR,
                    fill004: DEFAULT_COLOR,
                    fill005: DEFAULT_COLOR,
                    fill006: DEFAULT_COLOR,
                    fill007: DEFAULT_COLOR,
                    fill008: DEFAULT_COLOR,
                    fill009: DEFAULT_COLOR,
                    fill0010: DEFAULT_COLOR,
                    fill0011: DEFAULT_COLOR,
                    fill0012: DEFAULT_COLOR,
                    fill0013: DEFAULT_COLOR,
                    fill0014: DEFAULT_COLOR,
                    fill0015: DEFAULT_COLOR,
                    fill0016: DEFAULT_COLOR,
                    fill0017: DEFAULT_COLOR,
                    fill0018: DEFAULT_COLOR,
                    fill0019: DEFAULT_COLOR,
                    fill0020: DEFAULT_COLOR,
                    fill0021: DEFAULT_COLOR,
                    fill0022: DEFAULT_COLOR,
                    fill0023: DEFAULT_COLOR,
                    fill0024: DEFAULT_COLOR,
                    fill0025: DEFAULT_COLOR,
                    fill0026: DEFAULT_COLOR,
                    fill0027: DEFAULT_COLOR,
                    fill000: DEFAULT_COLOR,
                  })
                }}
              />
            </Svg>
          </View>
        </View>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: 'gold',
  },
  textheader: {
    fontFamily: 'Gill Sans',
  },
  display: {
    fontSize: 15,
    textAlign: 'center',
    color: '#F5FCFF',
    margin: 10,
  },
  button: {
    height: 60,
    width: 60,
  },
})
