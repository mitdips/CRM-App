import React from 'react';
import {Snackbar} from 'react-native-paper';
import {COLORS} from '../../../utils/colors';
import { scale } from 'react-native-size-matters';

const Toast = ({visible, onDismiss, message, duration = 300000}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      style={{
        width: '100%',
        backgroundColor: COLORS.toastBg,
        borderRadius: 10,
        bottom: 0,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
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
