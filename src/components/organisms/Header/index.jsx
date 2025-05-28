// src/components/organisms/Header/index.jsx

import React from 'react';
import {View, Image, TouchableOpacity, Pressable} from 'react-native';
import CustomVectorIcon from '../../atoms/VectorIcon';
import {COLORS} from '../../../utils/colors';
import {useStyle} from './style';
import {IMAGES} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
const styles = useStyle();
const Header = ({onSearchPress, onBellPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={({pressed}) => [styles.wrapper, {opacity: pressed ? 0.3 : 1}]}>
        <Image source={IMAGES.logo} style={styles.logo} resizeMode="contain" />
      </Pressable>

      {/* Icons */}
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={onSearchPress}>
          <CustomVectorIcon
            name="Feather:search"
            size={28}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onBellPress}>
          <CustomVectorIcon
            name="Feather:bell"
            size={28}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Image
          source={IMAGES.profile}
          style={styles.profile}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;
