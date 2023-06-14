import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'src/components/ui'
import { data } from 'src/components/Cart'
import FastImage from 'react-native-fast-image'

import {Color} from 'src/themeTypes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Background} from 'src/components/ui/Background'




export function CartCard(props){
    
    
    
    return (
        
            <Background style={styles.container}>
                <FastImage source={{uri: props.url}} style={styles.img}/>
                <View style={styles.textcontainer}>
                    <Text t3>{props.name}</Text>
                    <Text t3>Amount: {props.amount}</Text>
                    <Text t4 color={Color.primary}>{props.price} {props.currency}</Text>
                </View>
            </Background>
         
    )
}

//<Text></Text><Text>{props.price}</Text>

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 130,
        borderWidth:1,
        marginBottom:30,
        borderRadius:10,
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderColor:'pink'
        
    },
    img: {
        width: 120,
        height:'100%',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
    },
    textcontainer: {
        width: '100%',
        height: '100%',
        marginLeft:10,
        marginTop: 10
    },
    cube: {
        width: 30,
        height: 30,
        borderRadius: 6,
        backgroundColor: Color.primary1,
    },
    count: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between',
    },
    iconStyle: {
        fontSize: 30,
        color: Color.primary,
    },
})