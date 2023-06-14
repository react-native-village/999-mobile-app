import React from 'react'

import {Cart, HelpCart} from 'src/components/Cart'




export function CartScreen({navigation}: any) {
  return <Cart
  onPressBack={navigation.goBack}
  />
}



