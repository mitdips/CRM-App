import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import EmailField from '../../molecules/EmailFields';
import PasswordField from '../../molecules/PasswordFields';
import RememberForgot from '../../molecules/RememberForget';
import LoginButton from '../../molecules/LoginButton';
import {loginValidationSchema} from '../../../utils/validation';
import {useStyle} from './style';

const LoginForm = ({onSubmit, navigation}) => {
  const styles = useStyle();
  const [remember, setRemember] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = async (values, {setSubmitting}) => {
    try {
      await onSubmit({...values, remember});
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}>
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

          <PasswordField
            value={values.password}
            onChangeText={handleChange('password')}
            error={touched.password && errors.password}
          />

          <RememberForgot
            remember={remember}
            onCheckboxPress={() => setRemember(!remember)}
            onForgotPasswordPress={() => navigation.navigate('ForgotPassword')}
          />

          <LoginButton 
            onPress={handleSubmit}
            loading={isSubmitting}
          />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;