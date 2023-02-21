import React from 'react';

import {ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useWalletConnectMethods} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {ConnectWalletButton} from './ConnectWalletButton';

import {Background, Spacer, Text} from '../ui';

export function ConnectWallet() {
  const methodsList = useWalletConnectMethods();
  const {top} = useSafeAreaInsets();

  return (
    <Background>
      <ScrollView contentContainerStyle={styles.container}>
        <Spacer height={top + 30} />
        <Text color={Color.primary} center t1>
          999
        </Text>
        <Spacer height={46} />
        <Text center t2>
          Connect your wallet
        </Text>
        <Spacer height={22} />
        <Text center t9>
          Integrate with an of our available wallet providers.
        </Text>
        <Spacer height={25} />
        {methodsList.map((item, id) => {
          return (
            <ConnectWalletButton
              style={styles.buttonMargin}
              {...item}
              key={id}
            />
          );
        })}
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonMargin: {
    marginVertical: 18,
  },
});
