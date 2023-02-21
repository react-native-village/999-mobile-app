import {NavigatorScreenParams} from '@react-navigation/native';

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

// UTILS

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
