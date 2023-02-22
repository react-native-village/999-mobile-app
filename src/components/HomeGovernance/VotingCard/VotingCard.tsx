import React from 'react';

import {ProposalsTagKeys} from 'src/types';

import {VotingCardCompleted} from './VotingCardCompleted';

interface VotingCardProps {
  id: number;
  status: ProposalsTagKeys;
  onPress?: (hash: number) => void;
}

export function VotingCard({id, onPress}: VotingCardProps) {
  return <VotingCardCompleted id={id} onPress={onPress} />;
}

export const votingCardsData = [
  {
    status: 'passed',
    orderNumber: '465',
    title: 'Increase Signed Blocks Window',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1676804400,
    depositEnd: 1677074400,
    dateStart: 2676804400,
    dateEnd: 1676840400,
  },
  {
    status: 'rejected',
    orderNumber: '342',
    title: 'Stacking Param Change',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1676656800,
    depositEnd: 1676822400,
    dateEnd: 1676743200,
    dateStart: 1676656800,
  },
  {
    status: 'rejected',
    orderNumber: '526',
    title: 'Minimum commisison rate 5%',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1676822400,
    depositEnd: 1676196000,
    dateEnd: 1676833200,
    dateStart: 1676822400,
  },
  {
    status: 'passed',
    orderNumber: '153',
    title: 'La sosison de bulochka',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 373475628,
    depositEnd: 57574,
    dateEnd: 286385694,
    dateStart: 385764637,
  },
  {
    status: 'passed',
    orderNumber: '746',
    title: 'One more chance',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 373475628,
    depositEnd: 57574,
    dateEnd: 286385694,
    dateStart: 385764637,
  },
  {
    status: 'passed',
    orderNumber: '111',
    title: 'Buying lot in AccessPassWorld',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 373475628,
    depositEnd: 57574,
    dateEnd: 286385694,
    dateStart: 385764637,
  },
];
