import {View, Pressable, Text} from 'react-native';
import {Formik} from 'formik';
import FirstnameField from '../../molecules/FirstnameField';
import LastnameField from '../../molecules/LastnameField';
import EmailField from '../../molecules/EmailField';
import PasswordField from '../../molecules/PasswordFields';
import {registrationValidationSchema} from '../../../utils/validationSchema';
import {useStyle} from './style';
import {COLORS} from '../../../utils/colors';
import MobilenoFields from '../../molecules/MobilenoField';
import Button from '../../molecules/Button';
import {useNavigation} from '@react-navigation/native';
import {getAuth} from '@react-native-firebase/auth';
import {  Snackbar } from 'react-native-paper';
import React, { useState } from 'react';

const styles = useStyle();

const RegistrationForm = () => {
  const navigation = useNavigation();

  // Snackbar state
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setVisible(true);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
  };

  const handleRegistration = async (values, {setSubmitting}) => {
    try {
      const auth = getAuth();
      const userCredential = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      await userCredential.user.updateProfile({
        displayName: `${values.firstName} ${values.lastName}`,
      });
      showSnackbar('Registration successful!');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000); 
    } catch (error) {
      let errorMessage = 'Registration failed';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email address is already in use';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/password accounts are not enabled';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak';
          break;
      }
      showSnackbar(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationValidationSchema}
      onSubmit={handleRegistration}>
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View style={styles.formContainer}>
          <FirstnameField
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            error={touched.firstName && errors.firstName}
          />

          <LastnameField
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            error={touched.lastName && errors.lastName}
          />

          <EmailField
            value={values.email}
            onChangeText={handleChange('email')}
            error={touched.email && errors.email}
          />

          <MobilenoFields
            value={values.mobileNo}
            onChangeText={handleChange('mobileNo')}
            error={touched.mobileNo && errors.mobileNo}
          />

          <PasswordField
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            error={touched.password && errors.password}
          />

          <PasswordField
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            error={touched.confirmPassword && errors.confirmPassword}
            styleText={{color: COLORS.gray}}
            placeholder="Confirm Password"
          />

          <Button
            postfixLogo
            onPress={handleSubmit}
            loading={isSubmitting}
            title="Sign Up"
          />
          <Pressable onPress={() => navigation.navigate('Login')}>
           
            <Text style={styles.text}>Go to Login</Text>
          </Pressable>
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            action={{
              label: 'OK',
              onPress: () => setVisible(false),
            }}
            style={{ marginBottom: 16 }}
          >
            {snackbarMessage}
          </Snackbar>
        </View>
      )}
    </Formik>
  );
};

export default RegistrationForm;
