import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useWalletConnect} from '@walletconnect/react-native-dapp';

import {navigator} from 'src/navigator';
import {Home} from 'src/screens/home';
import {TicketDetailScreen} from 'src/screens/TicketDetail';
import {WelcomeScreen} from 'src/screens/Welcome';
import {RootStackParamList} from 'src/types';

import {ConnectWalletScreen} from './screens/ConnectWallet';
import {ProfileScreen} from './screens/Profile';
import {ProposalScreen} from './screens/Proposal';
import {QRScannerScreen} from './screens/QRScanner';
import {SearchScreen} from './screens/Search';
import {SettingsScreen} from './screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const gestureEnabled = {
  gestureEnabled: true,
};

export function App() {
  const isWalletConnected = useWalletConnect().connected;
  const initialScreen = isWalletConnected ? 'home' : 'welcome';
  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator
        initialRouteName={initialScreen}
        screenOptions={basicScreenOptions}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home" component={Home} />

        <Stack.Group screenOptions={gestureEnabled}>
          <Stack.Screen name="connectWallet" component={ConnectWalletScreen} />
          <Stack.Screen name="settings" component={SettingsScreen} />
          <Stack.Screen name="ticketDetail" component={TicketDetailScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="search" component={SearchScreen} />
          <Stack.Screen name="proposal" component={ProposalScreen} />
          <Stack.Screen name="scan" component={QRScannerScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
