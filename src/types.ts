import {NavigatorScreenParams} from '@react-navigation/native';
import {SvgProps} from 'react-native-svg';

// NAVIGATION

export type TabParamList = {
  homeStaking: undefined;
  homeGovernance: undefined;
  homeTicketsMarket: undefined;
};
export type RootStackParamList = {
  home?: NavigatorScreenParams<TabParamList>;
  welcome: undefined;
  settings: undefined;
  ticketDetail: TicketInfo;
  profile: undefined;
  connectWallet: undefined;
};

// INTERFACES

export interface TicketInfo {
  id: string;
  name: string;
  tags: string[];
  startData: number;
  endData: number;
  geoPosition: string;
  imageUrl: string;
  price?: number;
  currencySymbols?: string;
}

export interface connectMethodType {
  name: string;
  /**
   * @returns Is success or not */
  onConnect: () => Promise<void>;
  Logo: (props: SvgProps) => JSX.Element;
  isAvailable: boolean;
}

// UTILS

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
