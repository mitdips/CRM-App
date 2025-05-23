import React from 'react';
import {Snackbar} from 'react-native-paper';
import {COLORS} from '../../../utils/colors';

const Toast = ({visible, onDismiss, message, duration = 3000, style}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      style={[
        {
          backgroundColor: COLORS.toastBg,
          borderRadius: 10,
          position: 'absolute',
          zIndex: 999,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        },
        style,
      ]}
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
