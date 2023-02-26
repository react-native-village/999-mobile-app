import React from 'react';

import {TicketDetail} from 'src/components/TicketDetail';
import {useTypedRoute} from 'src/hooks';

export function TicketDetailScreen() {
  const item = useTypedRoute<'ticketDetail'>().params;
  return <TicketDetail {...item} />;
}
