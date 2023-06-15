import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {BottomSheet} from 'src/components/bottom-sheet'
import {Button, Text} from 'src/components/ui'
import {useThematicStyles} from 'src/hooks'
import {Color} from 'src/themeTypes'
import {TicketInfo} from 'src/types'




interface TicketDetailBuyProps {
  onClose: () => void
  currencySymbols?: TicketInfo['currencySymbols']
  price?: TicketInfo['price']
  priceInDollars?: number
  obj_details: object
}



export function TicketDetailBuy({
  onClose,
  currencySymbols,
  price,
  priceInDollars,
}: TicketDetailBuyProps) {
  const [count, setCount] = useState(1)
  const [ShowInfoBottomSheet, setShowInfoBottomSheet] = useState(false)
  const {styles} = useThematicStyles(rawStyles)
  const {height: H} = useWindowDimensions()

  const closeDistance = H / 5

  const pressMinus = () => {
    if (count === 1) return
    else setCount(count - 1)
  }
  const pressPlus = () => {
    if (count === 99) return
    else setCount(count + 1)
  }

  
  
  return (
    <BottomSheet onClose={onClose} closeDistance={closeDistance}>
      <View style={styles.rowAmount}>
        <Text t7>Amount</Text>
        <View style={styles.count}>
          <TouchableOpacity
            style={styles.cube}
            activeOpacity={0.7}
            onPress={pressMinus}>
            <MaterialCommunityIcons name={'minus'} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text t4>{count}</Text>
          <TouchableOpacity
            style={styles.cube}
            activeOpacity={0.7}
            onPress={pressPlus}>
            <MaterialCommunityIcons name={'plus'} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowTotal}>
        <Text t7>Total</Text>

        <View style={styles.price}>
          {price && currencySymbols && (
            <Text t3 color={Color.primary}>
              {`${(price * count).toLocaleString()} ${currencySymbols}`}
            </Text>
          )}
          {priceInDollars && (
            <Text t12 color={Color.graphicSecond4}>
              {priceInDollars.toLocaleString()} $
            </Text>
          )}
        </View>
      </View>
      <Button onPress={onClose} style={styles.button}>
        Continue
      </Button>
    </BottomSheet>
  )
}

interface datacartType {
  amount: number;
  currencySymbols: string;
  name: string;
  price: number;
  
}

export let datacart:datacartType[] = []



export function TicketDetailBuyCart({
  onClose,
  currencySymbols,
  price,
  priceInDollars,
  obj_details,
}: TicketDetailBuyProps) {
  const [count, setCount] = useState(1)
  const {styles} = useThematicStyles(rawStyles)
  const {height: H} = useWindowDimensions()
  const navigation = useNavigation()
  const closeDistance = H / 5
  const [ShowOvalMessageBottom, setShowOvalMessageBottom] = useState(false)
  

  const pressMinus = () => {
    if (count === 1) return
    else setCount(count - 1)
  }
  const pressPlus = () => {
    if (count === 99) return
    else setCount(count + 1)
  }

  const obj_details_buy = {
    amount: count,
    price: price * count,
    currencySymbols: currencySymbols,
  }

  const objTicketForCart = obj_details  || obj_details_buy ? Object.assign(obj_details, obj_details_buy) : {}

  

  const handleButtonClick = () => {
    datacart.push(objTicketForCart)
    
    onClose()
  
  };

  
  
  return (
    <BottomSheet onClose={onClose} closeDistance={closeDistance}>
      <View style={styles.rowAmount}>
        <Text t7>Amount</Text>
        <View style={styles.count}>
          <TouchableOpacity
            style={styles.cube}
            activeOpacity={0.7}
            onPress={pressMinus}>
            <MaterialCommunityIcons name={'minus'} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text t4>{count}</Text>
          <TouchableOpacity
            style={styles.cube}
            activeOpacity={0.7}
            onPress={pressPlus}>
            <MaterialCommunityIcons name={'plus'} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowTotal}>
        <Text t7>Total</Text>

        <View style={styles.price}>
          {price && currencySymbols && (
            <Text t3 color={Color.primary}>
              {`${(price * count).toLocaleString()} ${currencySymbols}`}
            </Text>
          )}
          {priceInDollars && (
            <Text t12 color={Color.graphicSecond4}>
              {priceInDollars.toLocaleString()} $
            </Text>
          )}
        </View>
      </View>
      <Button onPress={handleButtonClick} style={styles.button}>
        Add to cart
      </Button>
      
    </BottomSheet>
  )
}



const rawStyles = StyleSheet.create({
  rowAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  price: {
    alignItems: 'flex-end',
  },
  button: {
    marginBottom: 20,
  },
  count: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
  },
  cube: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: Color.primary1,
  },
  iconStyle: {
    fontSize: 30,
    color: Color.primary,
  },
})