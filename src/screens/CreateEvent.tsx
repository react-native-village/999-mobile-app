import React from 'react';

import {CreateEvent} from 'src/components/CreateEvent';
import {useTypedNavigation} from 'src/hooks';

export function CreateEventScreen() {
  const {goBack} = useTypedNavigation();
  return <CreateEvent onBack={goBack} />;
}
