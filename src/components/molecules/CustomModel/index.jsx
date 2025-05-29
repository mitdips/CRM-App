import React from 'react';
import {Modal, View, Pressable} from 'react-native';
import {COLORS} from '../../../utils/colors';
import CustomVectorIcon from '../../atoms/VectorIcon';
import CustomText from '../../atoms/Text';
import {useStyle} from './style';
import { scale } from 'react-native-size-matters';

const styles = useStyle();

const CustomModal = ({visible, onClose, children, title}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {title && (
            <View style={styles.header}>
              <CustomText style={styles.titleText} type="title">
                {title}
              </CustomText>
              <Pressable onPress={onClose}>
                <CustomVectorIcon
                  name="MaterialCommunityIcons:close"
                  size={scale(20)}
                  color={COLORS.darkGray}
                />
              </Pressable>
            </View>
          )}
          {!title && (
            <Pressable
              onPress={onClose}
              style={styles.closeButtonNoTitle}>
              <CustomVectorIcon
                name="MaterialCommunityIcons:close"
                size={24}
                color={COLORS.darkGray}
              />
            </Pressable>
          )}
          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
