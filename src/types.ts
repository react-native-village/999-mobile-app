import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';

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
  proposal: {
    id: number;
  };
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
export interface ScreenOptionType extends StackNavigationOptions {
  tab?: boolean;
  headerBackVisible?: boolean;
  headerBackHidden?: boolean | string;
}

// UTILS

export type VoteNamesType = 'yes' | 'no' | 'abstain' | 'veto';

export type VotesType = {
  yes: number;
  no: number;
  abstain: number;
  veto: number;
};

export type ProposalsCroppedList = {
  id: number;
  status: ProposalsTagKeys;
  title: string;
}[];

export type ProposalsTagKeys =
  | 'all'
  | 'voting'
  | 'deposited'
  | 'passed'
  | 'rejected';

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
