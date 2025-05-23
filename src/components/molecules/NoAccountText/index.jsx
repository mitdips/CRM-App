import Text from '../../atoms/Text';
import {Pressable, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const NoAccountText = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Registration')}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      <Text style={styles.text}>Don't have an account?</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: scale(16),
    color: COLORS.primary,
    textAlign: 'center',
  },
});

export default NoAccountText;
