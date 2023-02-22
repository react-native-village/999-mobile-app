import React, {useEffect, useState} from 'react';

import {votingCardsData} from 'src/components/HomeGovernance/VotingCard';
import {Proposal} from 'src/components/Proposal';
import {useTypedRoute} from 'src/hooks';

export function ProposalScreen() {
  const {id} = useTypedRoute<'proposal'>().params;

  const [item, setItem] = useState(votingCardsData[id]);

  useEffect(() => {
    setItem(votingCardsData[id]);
  }, [id]);

  return <Proposal item={item} />;
}
