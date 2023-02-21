import React, {useCallback, useState} from 'react';

import {StatusBar, StyleSheet} from 'react-native';
import {BarCodeReadEvent} from 'react-native-camera';
import {launchImageLibrary} from 'react-native-image-picker';
// @ts-ignore
import {QRreader, QRscanner} from 'react-native-qr-decode-image-camera';

import {useThematicStyles} from 'src/hooks';

import {QrBottomView} from './QrScanBottomView';
import {QrTopView} from './QrScanTopView';

export type QrScanProps = {
  onClose?: () => void;
};

export function QrScan({onClose = () => {}}: QrScanProps) {
  const {styles, colors} = useThematicStyles(rawStyles);

  const [code, setCode] = useState('');

  const [flashMode, setFlashMode] = useState(false);

  const onReadQR = useCallback(
    (e: BarCodeReadEvent) => {
      if (e.data && e.data !== code) {
        setCode(e.data);
      }
    },
    [code],
  );

  const onClickGallery = useCallback(async () => {
    const response = await launchImageLibrary({mediaType: 'photo'});
    if (response.assets && response.assets.length) {
      const first = response.assets[0];

      if (first.uri) {
        try {
          const data = await QRreader(first.uri);
          setCode(data);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, []);

  const onToggleFlashMode = useCallback(() => {
    setFlashMode(pr => !pr);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#b2b2b2" />
      <QRscanner
        isRepeatScan={true}
        vibrate={false}
        style={styles.container}
        onRead={onReadQR}
        flashMode={flashMode}
        hintText=""
        isShowScanBar={false}
        cornerColor={colors.primary}
        cornerWidth={7}
        zoom={0}
        renderTopView={() => <QrTopView onClose={onClose} />}
        renderBottomView={() => (
          <QrBottomView
            flashMode={flashMode}
            onClickGallery={onClickGallery}
            onToggleFlashMode={onToggleFlashMode}
          />
        )}
      />
    </>
  );
}

const rawStyles = StyleSheet.create({
  container: {flex: 1},
});
