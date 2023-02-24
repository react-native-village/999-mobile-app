import React from 'react';

import {StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const checkCameraPermission = async () => {
  const cameraPermission = await Camera.getCameraPermissionStatus();
  switch (cameraPermission) {
    case 'authorized':
      return true;
    case 'not-determined':
      const newCameraPermission = await Camera.requestCameraPermission();
      if (newCameraPermission === 'authorized') return true;
      else return false;
    default:
      return false;
  }
};

export function QRScanner() {
  const devices = useCameraDevices();
  const device = devices.back;
  checkCameraPermission();
  if (device == null) return <></>;
  return <Camera isActive device={device} style={StyleSheet.absoluteFill} />;
}
