import React from 'react'

import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {useTheme} from 'src/hooks'

import Logo from '../../../assets/images/logo.svg'
import {Spacer} from '../ui'

interface HomeMarketHeaderProps {
  onPressNumbers?: () => void
  onPressLetter?: () => void
  onPressSunset?: () => void
}

export function HomeTimeHeader({
  onPressNumbers,
  onPressLetter,
  onPressSunset,
}: HomeMarketHeaderProps) {
  const {colors} = useTheme()
  const {top} = useSafeAreaInsets()

  return (
    <>
      <Spacer height={top} />
      <View style={styles.rowContainer}>
        <View style={styles.logoContainer}>
          <Logo width={36} height={36} />
          <Spacer width={8} />
        </View>
        <View style={styles.rightButtons}>
          <TouchableOpacity onPress={onPressLetter} activeOpacity={0.7}>
            <MaterialCommunityIcons
              color={colors.primary}
              name="alphabet-latin"
              size={30}
            />
          </TouchableOpacity>
          <Spacer width={10} />
          <TouchableOpacity onPress={onPressNumbers} activeOpacity={0.7}>
            <MaterialCommunityIcons
              color={colors.primary}
              name="numeric"
              size={30}
            />
          </TouchableOpacity>
          <Spacer width={10} />
          <TouchableOpacity onPress={onPressSunset} activeOpacity={0.7}>
            <MaterialCommunityIcons
              color={colors.primary}
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
})
