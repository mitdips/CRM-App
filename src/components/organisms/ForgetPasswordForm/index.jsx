import React from 'react';
import {View, Alert} from 'react-native';
import {Formik} from 'formik';
import EmailField from '../../molecules/EmailField';
import Button from '../../atoms/Button';
import {useStyle} from './style';
import {forgotPasswordSchema} from '../../../utils/validationSchema';
import { getAuth } from '@react-native-firebase/auth';

const ForgetPasswordForm = ({navigation}) => {
  const styles = useStyle();

  const handleResetPassword = async (values, {setSubmitting}) => {
    try {
      console.log('values.email', values.email);
      await getAuth().sendPasswordResetEmail(values.email);
    } catch (error) {
      console.error('Reset password error:', error);
      Alert.alert('Error', error.message);
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
              title="Reset Email"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ForgetPasswordForm;
