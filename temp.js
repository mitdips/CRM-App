import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';

// --- Helper Functions for Formatting Date and Time ---
const formatDateForDisplay = dateObj => {
  if (!dateObj) return '';
  // Example: October 23, 2023
  return dateObj.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formatTimeForDisplay = dateObj => {
  if (!dateObj) return '';
  // Example: 02:30 PM
  return dateObj.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
};

// --- Validation Schema using Yup ---
const projectValidationSchema = Yup.object().shape({
  projectName: Yup.string()
    .min(3, 'Project name must be at least 3 characters')
    .required('Project name is required'),
  projectDate: Yup.date().nullable().required('Project date is required'),
  projectTime: Yup.date().nullable().required('Project time is required'), // Stores full date, but we only care about time
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .required('Description is required'),
});

const ProjectForm = () => {
  // State for controlling DateTimePicker visibility and current mode
  const [dateForPicker, setDateForPicker] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState('date'); // 'date' or 'time'
  const [currentTargetField, setCurrentTargetField] = useState(''); // 'projectDate' or 'projectTime'

  const showDateTimePicker = (currentField, modeToShow) => {
    setShowPicker(true);
    setPickerMode(modeToShow);
    setCurrentTargetField(currentField);
    // Initialize picker with current form value or now
    // This part is handled by Formik's initialValues and the 'value' prop of DateTimePicker
    // When we show the picker, we'll ensure 'dateForPicker' is set correctly
    // by the 'value' prop in DateTimePicker being linked to the Formik field or a default.
  };

  const handlePickerChange = (event, selectedDate, setFieldValue) => {
    setShowPicker(Platform.OS === 'ios'); // On iOS, keep it open until user is done

    if (event.type === 'dismissed') {
      setShowPicker(false); // Ensure picker is hidden if dismissed
      return;
    }

    if (selectedDate) {
      // If it's Android and 'set', hide picker immediately
      if (Platform.OS === 'android') {
        setShowPicker(false);
      }
      setFieldValue(currentTargetField, selectedDate);
      setDateForPicker(selectedDate); // Update the date used by the picker itself for next open
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create New Project</Text>
      <Formik
        initialValues={{
          projectName: '',
          projectDate: null, // Store as Date object
          projectTime: null, // Store as Date object (we'll extract time)
          description: '',
        }}
        validationSchema={projectValidationSchema}
        onSubmit={(values, {resetForm}) => {
          // Handle form submission
          const submissionData = {
            ...values,
            projectDate: values.projectDate
              ? values.projectDate.toISOString().split('T')[0]
              : null, // YYYY-MM-DD
            projectTime: values.projectTime
              ? values.projectTime.toTimeString().split(' ')[0]
              : null, // HH:MM:SS
          };
          console.log('Form Data:', submissionData);
          Alert.alert(
            'Form Submitted',
            JSON.stringify(submissionData, null, 2),
          );
          // resetForm(); // Uncomment to reset form after submission
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => {
          // This function will ensure the picker uses the correct initial date
          const onShowPicker = (field, mode) => {
            setCurrentTargetField(field);
            setPickerMode(mode);
            setDateForPicker(values[field] || new Date()); // Use field's current value or now
            setShowPicker(true);
          };

          return (
            <View>
              {/* Project Name */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Project Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('projectName')}
                  onBlur={handleBlur('projectName')}
                  value={values.projectName}
                  placeholder="Enter project name"
                />
                {touched.projectName && errors.projectName && (
                  <Text style={styles.errorText}>{errors.projectName}</Text>
                )}
              </View>

              {/* Date Picker Field */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Project Date</Text>
                <TouchableOpacity
                  style={styles.dateInputTouchable}
                  onPress={() => onShowPicker('projectDate', 'date')}>
                  <Text style={styles.dateInputText}>
                    {values.projectDate
                      ? formatDateForDisplay(values.projectDate)
                      : 'Select Date'}
                  </Text>
                </TouchableOpacity>
                {touched.projectDate && errors.projectDate && (
                  <Text style={styles.errorText}>{errors.projectDate}</Text>
                )}
              </View>

              {/* Time Picker Field */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Project Time</Text>
                <TouchableOpacity
                  style={styles.dateInputTouchable}
                  onPress={() => onShowPicker('projectTime', 'time')}>
                  <Text style={styles.dateInputText}>
                    {values.projectTime
                      ? formatTimeForDisplay(values.projectTime)
                      : 'Select Time'}
                  </Text>
                </TouchableOpacity>
                {touched.projectTime && errors.projectTime && (
                  <Text style={styles.errorText}>{errors.projectTime}</Text>
                )}
              </View>

              {/* Description */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  placeholder="Enter project description"
                  multiline
                  numberOfLines={4}
                />
                {touched.description && errors.description && (
                  <Text style={styles.errorText}>{errors.description}</Text>
                )}
              </View>

              {/* Submit Button */}
              <Button onPress={handleSubmit} title="Create Project" />

              {/* DateTimePicker Modal (conditionally rendered) */}
              {showPicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateForPicker} // Use the state variable that's correctly initialized
                  mode={pickerMode} // 'date' or 'time'
                  is24Hour={false} // Or true, based on preference
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'} // 'spinner' for iOS, 'default' for Android
                  onChange={(event, selectedDate) =>
                    handlePickerChange(event, selectedDate, setFieldValue)
                  }
                  // minimumDate={new Date()} // Optional: example minimum date
                />
              )}
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // For Android
  },
  dateInputTouchable: {
    borderWidth: 1,
    borderColor: '#ced4da',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  dateInputText: {
    fontSize: 16,
    color: '#495057', // Default text color, changes if placeholder
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    marginTop: 3,
  },
});

export default ProjectForm;
