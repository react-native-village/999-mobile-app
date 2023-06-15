import React from 'react'

import {Cart} from 'src/components/Cart'

export function CartScreen({navigation}: any) {
  return <Cart 
  onPressBack={navigation.goBack}
  />
}