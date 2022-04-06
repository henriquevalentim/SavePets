import * as React from 'react';
import {IconButton} from 'react-native-paper';
import {RNCamera} from 'react-native-camera';
import {View} from 'react-native';
import {VERMELHO_CLARO_FUNDO} from '../../../utils/constants';

function Camera({setImage, closeCam}) {
  let cameraRef = React.useRef(null);

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setImage(`data:image/jpeg;base64,${data.base64}`);
      closeCam();
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        captureAudio={false}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={
          'We need your permission to use your camera phone'
        }
      />
      <View
        style={{
          alignSelf: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <IconButton
          icon="camera"
          color={VERMELHO_CLARO_FUNDO}
          size={50}
          onPress={() => {
            takePicture();
          }}
        />
      </View>
    </View>
  );
}

export default Camera;
