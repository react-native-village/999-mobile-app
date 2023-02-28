import React from 'react';

import {ScanError} from './ScanError';
import {ScanSuccesfully} from './ScanSuccesfully';

interface ScanResultT {
  isSuccesfully: boolean;
  onPressOK: () => void;
}

export function ScanResult({isSuccesfully, onPressOK}: ScanResultT) {
  return isSuccesfully ? (
    <ScanSuccesfully onPressOK={onPressOK} />
  ) : (
    <ScanError onPressOK={onPressOK} />
  );
}
