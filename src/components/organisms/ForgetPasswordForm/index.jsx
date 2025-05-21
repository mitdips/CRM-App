
import React from 'react';
import { View, Pressable, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { Formik } from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EmailField from '../../molecules/EmailField';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import { useStyle } from './style';
import { COLORS } from '../../../utils/colors';
import { scale } from 'react-native-size-matters';
import { forgotPasswordSchema } from '../../../utils/validationSchema';

const ForgetPasswordForm = ({ navigation }) => {
  const styles = useStyle();

  const handleResetPassword = async (values, { setSubmitting }) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, values.email);
      Alert.alert('Success', 'Password reset email sent!');
    //   navigation.goBack(); 
    } catch (error) {
      console.error('Reset password error:', error);
      Alert.alert('Error', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons
          name="arrow-back"
          size={scale(24)}
          color={COLORS.primary}
        />
      </Pressable>

      <Formik
        initialValues={{ email: '' }}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleResetPassword}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View style={styles.formContainer}>
            <EmailField
              value={values.email}
              onChangeText={handleChange('email')}
              error={touched.email && errors.email}
            />
            <Button
              onPress={handleSubmit}
              loading={isSubmitting}
              title="Reset Email"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ForgetPasswordForm;
