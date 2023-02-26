import React from 'react';

import {QRScanner} from 'src/components/QRScanner';
import {useTypedNavigation} from 'src/hooks';
import {TicketInfo} from 'src/types';

export function QRScannerScreen() {
  const {navigate, goBack} = useTypedNavigation();
  const onPressBack = () => goBack();
  const qrEventFound = (qrObject: TicketInfo) => {
    navigate('ticketDetail', qrObject);
  };
  return <QRScanner onPressBack={onPressBack} qrEventFound={qrEventFound} />;
}
