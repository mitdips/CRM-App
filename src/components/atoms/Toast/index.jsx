import React from 'react';
import {Snackbar} from 'react-native-paper';
import {COLORS} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';

const Toast = ({visible, onDismiss, message, duration = 30000}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      style={{
        width: '95%',
        alignSelf: 'center',
        backgroundColor: COLORS.toastBg,
        borderRadius: 10,
        position: 'absolute',
        bottom: scale(5),
        zIndex: 999,
      }}
      action={{
        label: 'OK',
        onPress: onDismiss,
        textColor: COLORS.white,
      }}>
      {message}
    </Snackbar>
  );
};

export default Toast;
