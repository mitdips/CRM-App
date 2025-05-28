import React from 'react';
import {View} from 'react-native';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {Formik} from 'formik';
import EmailField from '../../molecules/EmailField';
import Button from '../../atoms/Button';
import {useStyle} from './style';
import {forgotPasswordSchema} from '../../../utils/validationSchema';
import { getAuth } from '@react-native-firebase/auth';

const ForgetPasswordForm = ({navigation, showToast}) => {
  const styles = useStyle();

  const handleResetPassword = async (values, {setSubmitting}) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, values.email);
      showToast('Password reset email sent!');
    } catch (error) {
      console.error('Reset password error:', error);
      let errorMessage = error.message;
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email address.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'The email address is not valid.';
      }
      showToast(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: ''}}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleResetPassword}>
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
              disabled={isSubmitting}
              title="Reset Email"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ForgetPasswordForm;
