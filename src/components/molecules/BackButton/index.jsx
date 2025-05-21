import React from 'react';
import {Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1},
        {position: 'absolute', top: scale(18), left: scale(18), zIndex: 999},
      ]}>
      <MaterialIcons
        name="arrow-back"
        size={scale(22)}
        color={COLORS.primary}
      />
    </Pressable>
  );
};

export default BackButton;
