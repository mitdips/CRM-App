import {View} from 'react-native';
import {Formik} from 'formik';
import FirstnameField from '../../molecules/FirstnameField';
import LastnameField from '../../molecules/LastnameField';
import EmailField from '../../molecules/EmailField';
import PasswordField from '../../molecules/PasswordFields';
import RegistrationButton from '../../molecules/RegistrationButton';
import {registrationValidationSchema} from '../../../utils/validationSchema';
import {useStyle} from './style';
import {COLORS} from '../../../utils/colors';
import MobilenoFields from '../../molecules/MobilenoField';

const RegistrationForm = ({onSubmit, navigation}) => {
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
      await onSubmit(values);
    } catch (error) {
      console.error('Registration error:', error);
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

          <RegistrationButton onPress={handleSubmit} loading={isSubmitting} />
        </View>
      )}
    </Formik>
  );
};

export default RegistrationForm;
