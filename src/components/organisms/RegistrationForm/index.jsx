import auth from '@react-native-firebase/auth';
import {View, Alert} from 'react-native';
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
import BackButton from '../../molecules/BackButton';

const RegistrationForm = ({navigation}) => {
  const styles = useStyle();

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
      // Create user with email and password
      const userCredential = await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );

      // Update user profile with first and last name
      await userCredential.user.updateProfile({
        displayName: `${values.firstName} ${values.lastName}`,
      });

      // Show success message
      Alert.alert('Success', 'Registration successful!');

      // Navigate to login screen
      // navigation.navigate('Login');
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

      Alert.alert('Error', errorMessage);
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
          </View>
        )}
      </Formik>
  );
};

export default RegistrationForm;
