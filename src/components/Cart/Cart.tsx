import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Text, CustomHeader } from 'src/components/ui'
import { Background } from 'src/components/ui/Background'
import { CartCard } from 'src/components/ui/CartCard'
import { datacart } from 'src/components/TicketDetail/TicketDetailBuy'
import {Color} from 'src/themeTypes'
import { Button } from 'src/components/ui/button'

interface CartProps {
  onPressBack: () => void
}



export function Cart({ 
  onPressBack
 }: CartProps) {
  
  const navigation = useNavigation
  
  

  const renderItem = ({ item }) => (
    <CartCard name={item.name} price={item.price} url={item.url} currency={item.currencySymbols} amount={item.amount} id={item.id} firstPrice={item.firstPrice}/>
  )
   
    function withItems(){
      return (
        <Background>
          <CustomHeader
            title={'Cart'}
            iconLeft="arrow-back"
            onPressLeft={onPressBack}
            colorLeft={Color.primary}
          />
          <View style={styles.WithItems}>
            <FlatList
              data={datacart}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
            <View style={{left:8, marginHorizontal:15, marginTop:5}}>
              <Button children='Buy all' style={{width: '95%'}}/>
            </View>        
        </Background>
      )
    }

    function NoItems(){
      return (
        <Background>
            <CustomHeader
              title={'Cart'}
              iconLeft="arrow-back"
              colorLeft={Color.primary}
              onPressLeft={onPressBack}
            />
            <View style={styles.NoItems}>
              <Text>Your cart is empty</Text>
            </View>
          </Background>
      )
    }
    
    
    return datacart.length > 0 ? withItems() : NoItems()
    
}

const styles = StyleSheet.create({
  WithItems: {
    width: '100%',
    height: '84%',
    paddingRight:25,
    paddingLeft: 25,
    justifyContent: 'flex-start',
  },
  NoItems:{
    width: '100%',
    height: '100%',
    paddingHorizontal: 22,
    justifyContent:'center',
    alignItems:'center'
  }
})
