import React, {useState} from 'react'

import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {useTheme} from 'src/hooks'

import Logo from '../../../assets/images/logo.svg'
import {Spacer} from '../ui'

interface HomeMarketHeaderProps {
  onPressNumbers: () => void
  onPressLetter: () => void
  onPressSunset: () => void
}

export function HomeTimeHeader({
  onPressNumbers,
  onPressLetter,
  onPressSunset,
}: HomeMarketHeaderProps) {
  const {colors} = useTheme()
  const {top} = useSafeAreaInsets()

  const [activeButton, setActiveButton] = useState(1)

  const handlePressNumbers = () => {
    setActiveButton(2)
    onPressNumbers()
  }

  const handlePressLetter = () => {
    setActiveButton(1)
    onPressLetter()
  }

  const handlePressSunset = () => {
    setActiveButton(3)
    onPressSunset()
  }

  return (
    <>
      <Spacer height={top} />
      <View style={styles.rowContainer}>
        <View style={styles.logoContainer}>
          <Logo width={36} height={36} />
          <Spacer width={8} />
        </View>
        <View style={styles.rightButtons}>
          <TouchableOpacity
            onPress={handlePressLetter}
            activeOpacity={0.7}
            style={styles.alphabetIconContainer}>
            <MaterialCommunityIcons
              color={activeButton === 1 ? colors.primary : colors.primary2}
              name="alphabet-latin"
              size={30}
            />
          </TouchableOpacity>
          <Spacer width={10} />
          <TouchableOpacity onPress={handlePressNumbers} activeOpacity={0.7}>
            <MaterialCommunityIcons
              color={activeButton === 2 ? colors.primary : colors.primary2}
              name="numeric"
              size={30}
            />
          </TouchableOpacity>
          <Spacer width={10} />
          <TouchableOpacity onPress={handlePressSunset} activeOpacity={0.7}>
            <MaterialCommunityIcons
              color={activeButton === 3 ? colors.primary : colors.primary2}
              name="weather-sunset"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 23,
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButtons: {
    flexDirection: 'row',
  },
  alphabetIconContainer: {
    bottom: 0.8,
  },
})
