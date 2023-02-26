import React, {useEffect, useState} from 'react';

import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {Camera, CameraScreen} from 'react-native-camera-kit';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Background, Loading, Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';

interface QRScannerProps {
  onPressBack?: () => void;
  qrEventFound: (qrObject: TicketInfo) => void;
}

export function QRScanner({onPressBack, qrEventFound}: QRScannerProps) {
  const [openScanner, setOpenScanner] = useState(false);
  const [notDesiredQR, setNotDesiredQR] = useState(false);
  const {styles} = useThematicStyles(rawStyles);

  const onBarcodeScan = (qrValue: string) => {
    try {
      let qrObject = JSON.parse(qrValue);
      if (
        qrObject.name &&
        qrObject.tags &&
        qrObject.startData &&
        qrObject.endData &&
        qrObject.geoPosition
      ) {
        qrEventFound(qrObject);
      } else {
        setNotDesiredQR(true);
      }
    } catch {
      setNotDesiredQR(true);
    }
  };

  async function requestCameraPermissionAndroid() {
    const isCameraAuthorized = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (isCameraAuthorized === PermissionsAndroid.RESULTS.GRANTED) {
      setOpenScanner(true);
    } else {
      Alert.alert(
        'Error',
        'The camera is locked for this app, but you can allow it in the app settings',
        [
          {
            text: 'Grant permission',
            onPress: Linking.openSettings,
          },
          {
            text: 'Back',
            onPress: onPressBack,
          },
        ],
        {onDismiss: onPressBack},
      );
    }
  }

  async function requestCameraPermissionIos() {
    const isCameraAuthorized =
      await Camera.checkDeviceCameraAuthorizationStatus();
    if (isCameraAuthorized) setOpenScanner(true);
    else {
      const isUserAuthorizedCamera =
        await Camera.requestDeviceCameraAuthorization();
      if (isUserAuthorizedCamera) setOpenScanner(true);
      else {
        Alert.prompt(
          'Error',
          'The camera is locked for this app, but you can allow it in the app settings',
          [
            {
              text: 'Grant permission',
              onPress: Linking.openSettings,
              style: 'default',
            },
            {
              text: 'Back',
              onPress: onPressBack,
              style: 'cancel',
            },
          ],
        );
        Linking.openSettings();
      }
    }
  }

  if (Platform.OS === 'android') {
    requestCameraPermissionAndroid();
  }
  if (Platform.OS === 'ios') {
    requestCameraPermissionIos();
  }

  useEffect(() => {
    if (notDesiredQR) {
      const hintVisibility = setTimeout(() => setNotDesiredQR(false), +3000);
      return () => clearTimeout(hintVisibility);
    }
  }, [notDesiredQR]);

  return (
    <Background style={styles.container}>
      {openScanner ? (
        <CameraScreen
          scanBarcode={true}
          zoomMode={'off'}
          onReadCode={event => onBarcodeScan(event.nativeEvent.codeStringValue)}
          cameraRatioOverlay={undefined}
          captureButtonImage={undefined}
          cameraFlipImage={undefined}
          hideControls={true}
          showFrame={false}
          laserColor={'transparent'}
          frameColor={'transparent'}
          torchOnImage={undefined}
          torchOffImage={undefined}
          torchImageStyle={{}}
          captureButtonImageStyle={{}}
          cameraFlipImageStyle={{}}
          onBottomButtonPressed={() => {}}
        />
      ) : (
        <Loading text={'Loading the camera, please wait.'} />
      )}
      {openScanner && (
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={'scan-helper'} style={styles.icon} />
        </View>
      )}
      {notDesiredQR && (
        <View style={styles.hintContainer}>
          <View style={styles.hint}>
            <Text t17 color={Color.textBase3}>
              It's not QR-event or QR-Ticket
            </Text>
          </View>
        </View>
      )}
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 300,
    opacity: 0.5,
    color: Color.primary,
  },
  hintContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  hint: {
    marginTop: 20,
    width: 180,
    height: 40,
    borderRadius: 100,
    backgroundColor: Color.graphicBase1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
