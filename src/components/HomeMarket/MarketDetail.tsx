import React, {useState} from 'react'

import {ScrollView, StyleSheet, View, useColorScheme} from 'react-native'
import FastImage from 'react-native-fast-image'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {formatPrice} from 'src/components/formatPrice'
import {Button, CustomHeader, Spacer, Text} from 'src/components/ui'
import {Background} from 'src/components/ui/Background'
import {useThematicStyles} from 'src/hooks'
import {Color} from 'src/themeTypes'
import {MarketInfo} from 'src/types'

import {dark, light} from '../../../assets/images/cryproCoins/mapping'
import {TicketDetailBuy, TicketDetailBuyCart} from '../TicketDetail/TicketDetailBuy'
import {TicketDetailTags} from '../TicketDetail/TicketDetailTags'
import { OvalMessage } from 'src/components/ui/OvalMessageBottom'

interface MarketDetailProps extends MarketInfo {
  onBack?: () => void
  priceInDollars?: number
}

export function MarketDetail({
  onBack,
  priceInDollars = 100,
  ...item
}: MarketDetailProps) {
  const [showBuy, setShowBuy] = useState(false)
  const [showBuyCart, setShowBuyCart] = useState(false)
  const [showOvalMessage, setShowOvalMessage] = useState(false)
  const insets = useSafeAreaInsets()
  const {styles, colors} = useThematicStyles(rawStyles)
  const obj_details = 
  { name: item.name,
    url: item.imageUrl,
  }

  const isDark = useColorScheme() === 'dark'

  const iconName = item.currencySymbols?.toLowerCase()
  // @ts-ignore
  const SvgIcon = !isDark ? dark[iconName] : light[iconName]

  const handleClose = () => {
    setShowBuyCart(false);
    setShowOvalMessage(true);
  };

  return (
    <Background>
      <CustomHeader
        title={item.name}
        iconLeft="arrow-back"
        onPressLeft={onBack}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <FastImage source={item.imageUrl} style={styles.image} />
        <View style={styles.details}>
          <TicketDetailTags tags={item.tags} />
          <Text t19 style={styles.name}>
            {item.name}
          </Text>
          <View style={styles.row}>
            <View style={styles.rowTicket} />
            <View style={styles.price}>
              {item.price && item.currencySymbols && (
                <View style={styles.priceContainer}>
                  <Text t2 color={Color.primary}>
                    {formatPrice(item.price)}
                  </Text>
                  {SvgIcon && (
                    <>
                      <Spacer width={6} />
                      <SvgIcon.default
                        fill={colors.primary}
                        width={30}
                        height={30}
                      />
                    </>
                  )}
                </View>
              )}
              <View style={styles.priceContainer}>
                {item.currencySymbols && (
                  <Text t12 color={Color.graphicSecond4}>
                    {item.currencySymbols}
                  </Text>
                )}
                {priceInDollars && (
                  <Text t12 color={Color.graphicSecond4}>
                    {' '}
                    - {priceInDollars} $
                  </Text>
                )}
              </View>
            </View>
          </View>
          {item.description && (
            <>
              <Text t7 style={styles.dateText}>
                Desciption
              </Text>
              <Spacer height={20} />
              <Text t9>{item.description}</Text>
              <Spacer height={36} />
            </>
          )}
          {item.tickets > 0 && (
            <View>
              <Text t11 style={styles.ticketText} color={Color.primary}>
                Available: {item.tickets}
              </Text>
            </View>
          )}
          <View style={styles.buttonContainer}>
            <View style={{ marginRight:5}}>
              <Button style={styles.button} onPress={() => setShowBuy(true)}>
                {item.tickets > 0 ? 'Buy more' : 'Buy'}
              </Button>
            </View >
            <Button style={styles.button} onPress={() => setShowBuyCart(true)}>
              Add to cart
            </Button>
          </View>
        </View>
        <Spacer height={insets.bottom} />
      </ScrollView>
      {showBuy && (
        <TicketDetailBuy
          price={item.price}
          currencySymbols={item.currencySymbols}
          priceInDollars={priceInDollars}
          onClose={() => setShowBuy(false)}
          
        />
      )}
      {showBuyCart && (
        <TicketDetailBuyCart
          price={item.price}
          currencySymbols={item.currencySymbols}
          priceInDollars={priceInDollars}
          onClose={handleClose}
          obj_details = {obj_details}
        />
      )}
      {showOvalMessage && ( <OvalMessage
      message={'Product successfully added to cart'}
      onClose={() => setShowOvalMessage(false)}
      />)}
    </Background>
  )
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ticketText: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  ticketButton: {
    alignSelf: 'center',
  },
  button: {
    marginVertical: 10,
    width: 170
  },
  image: {
    aspectRatio: 1 / 1,
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 25,
  },
  iconStyle1: {
    color: Color.textSecond1,
    marginRight: 10,
    fontSize: 24,
  },
  iconStyle2: {
    color: Color.primary,
    fontSize: 30,
  },
  dateText: {
    marginBottom: 2,
  },
  details: {
    paddingHorizontal: 24,
  },
  name: {
    marginVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 45,
  },
  rowTicket: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    alignItems: 'center',
  },
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  circle: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderRadius: 100,
    backgroundColor: Color.primary1,
  },
  goBackContainer: {
    position: 'absolute',
    left: 25,
    top: 67,
  },
  flexOne: {
    flex: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer:{
    width: '100%',
    height:'auto',
    flexDirection:'row',
    
    justifyContent: 'space-between',

  },
  button1: {
    width: 170,
    height:'auto',
    
  }
})
