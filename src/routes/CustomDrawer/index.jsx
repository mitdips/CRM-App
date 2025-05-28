import React from 'react';
import {View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../assets';
import Button from '../../components/atoms/Button';
import {COLORS} from '../../utils/colors';
import CustomVectorIcon from '../../components/atoms/VectorIcon';
import {scale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {clearUserData} from '../../redux/slices/AuthSlice';
import {useStyle} from './style';
import {drawerItemsConfig} from '../../utils/constant';
import Text from '../../components/atoms/Text';

const styles = useStyle();

const CustomDrawerItem = ({iconName, label, onPress, isFocused}) => {
  const itemStyle = isFocused
    ? [styles.drawerItem, styles.drawerItemActive]
    : styles.drawerItem;
  const labelStyle = isFocused
    ? [styles.drawerLabel, styles.drawerLabelActive]
    : styles.drawerLabel;
  const iconColor = isFocused ? COLORS.primary : COLORS.gray;

  return (
    <TouchableOpacity onPress={onPress} style={itemStyle}>
      {iconName && (
        <CustomVectorIcon name={iconName} size={scale(20)} color={iconColor} />
      )}
      <Text style={labelStyle}>{label}</Text>
      {isFocused && <View style={styles.activeItemIndicator} />}
    </TouchableOpacity>
  );
};

const CustomDrawer = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {state} = props;
  const focusedRouteName = state.routes[state.index].name;

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };

  const handleLogout = () => {
    dispatch(clearUserData());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 0}}>
        <View style={styles.headerContainer}>
          <Image
            source={IMAGES.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.drawerItemsContainer}>
          {drawerItemsConfig.map(item => (
            <CustomDrawerItem
              key={item.screenName}
              label={item.label}
              iconName={item.icon}
              onPress={() => navigateToScreen(item.screenName)}
              isFocused={focusedRouteName === item.screenName}
            />
          ))}
        </View>
      </DrawerContentScrollView>

      <View style={styles.bottomSection}>
        <Button
          title="Logout"
          onPress={handleLogout}
          prefixLogo={
            <CustomVectorIcon
              name="MaterialCommunityIcons:logout"
              size={scale(22)}
              color={COLORS.gray}
            />
          }
          textColor={COLORS.darkGray}
          bgColor="transparent"
          outlineColor="transparent"
          style={styles.logoutButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
