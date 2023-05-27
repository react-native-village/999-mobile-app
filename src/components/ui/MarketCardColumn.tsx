import React from 'react'

import {StyleSheet, TouchableOpacity, View, useColorScheme} from 'react-native'
import FastImage from 'react-native-fast-image'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {formatPriceSmall} from 'src/components/formatPrice'
import {round10} from 'src/helpers/decimalAdjust'
import {useThematicStyles} from 'src/hooks'
import {Color} from 'src/themeTypes'
import {MarketInfo} from 'src/types'

import {TicketCardTags} from './TicketCardTags'

import {Spacer, Text} from './'
import {dark, light} from '../../../assets/images/cryproCoins/mapping'

export function MarketCardColumn({
  onPress,
  ...itemProps
}: MarketInfo & {onPress?: (item: MarketInfo) => void}) {
  const {styles, colors} = useThematicStyles(rawStyles)
  const isDark = useColorScheme() === 'dark'
  const {name, tags, imageUrl, price, rating, currencySymbols, brand} =
    itemProps

  const iconName = currencySymbols?.toLowerCase()
  // @ts-ignore
  const SvgIcon = !isDark ? dark[iconName] : light[iconName]

  const ratingText = round10(rating.reduce((a, b) => a + b) / rating.length, -1)
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onPress?.(itemProps)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FastImage style={styles.image} source={{uri: imageUrl}} />
        </View>
        <View style={styles.infoContainer}>
          <Text t6 numberOfLines={1}>
            {name}
          </Text>
          <Spacer height={8} />
          <View style={styles.costAndTagContainer}>
            <TicketCardTags tags={tags} />
            <Spacer width={10} />
            <View style={styles.costContainer}>
              {price && currencySymbols && (
                <>
                  <Text numberOfLines={1} t7 color={Color.primary}>
                    {formatPriceSmall(price)}
                  </Text>
                  {SvgIcon && (
                    <>
                      <Spacer width={4} />
                      <SvgIcon.default
                        fill={colors.primary}
                        width={24}
                        height={24}
                      />
                    </>
                  )}
                </>
              )}
            </View>
          </View>
          <Spacer height={8} />
          <View style={styles.iconWithTextContainer}>
            <MaterialCommunityIcons
              name="card-account-details-star-outline"
              style={styles.iconStyle}
            />
            <View style={styles.textContainer}>
              <Text numberOfLines={2} t11>
                {brand}
              </Text>
            </View>
          </View>
          <Spacer height={6} />
          <View style={styles.iconWithTextContainer}>
            <MaterialCommunityIcons name="star" style={styles.iconStyle} />
            <View style={styles.textContainer}>
              <Text numberOfLines={2} t11>
                {ratingText.toString()}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const borderW = 0.6
const rawStyles = StyleSheet.create({
  container: {
    width: 200,
    height: 350,
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    backgroundColor: Color.card,
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderColor: Color.grayStroke,
    borderLeftWidth: borderW,
    borderBottomWidth: borderW,
    borderRightWidth: borderW,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  costAndTagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    color: Color.textSecond1,
    marginRight: 8,
    fontSize: 30,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexWrap: 'wrap',
    flex: 1,
  },
  costContainer: {
    flexDirection: 'row',
  },
})
