import React, {useState} from 'react';
import {View, ScrollView, Platform} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import CustomVectorIcon from '../../atoms/VectorIcon';
import {COLORS} from '../../../utils/colors';
import {useStyle} from './style';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = useStyle();

// Dummy data for pickers - replace with your actual data source
const taskGroupOptions = [
  {label: 'Design', value: 'design'},
  {label: 'Development', value: 'development'},
  {label: 'Marketing', value: 'marketing'},
  {label: 'Testing', value: 'testing'},
];

const priorityOptions = [
  {label: 'High', value: 'high'},
  {label: 'Medium', value: 'medium'},
  {label: 'Low', value: 'low'},
];

const assigneeOptions = [
  {label: 'User 1', value: 'user1'},
  {label: 'User 2', value: 'user2'},
  {label: 'User 3', value: 'user3'},
];

const projectValidationSchema = Yup.object().shape({
  taskName: Yup.string().required('Task name is required'),
  taskGroup: Yup.string().required('Task group is required'),
  estimate: Yup.object()
    .shape({
      hours: Yup.number().min(0).max(23),
      minutes: Yup.number().min(0).max(59),
    })
    .nullable(),
  deadline: Yup.date().nullable().required('Deadline is required'),
  priority: Yup.string().required('Priority is required'),
  assignee: Yup.string().required('Assignee is required'),
  description: Yup.string(),
});

const ProjectForm = ({onSubmit, initialValues = {}}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState('date');
  const [currentField, setCurrentField] = useState('');

  const defaultInitialValues = {
    taskName: '',
    taskGroup: taskGroupOptions[0]?.value || '',
    estimate: null,
    deadline: null,
    priority: priorityOptions[1]?.value || '',
    assignee: assigneeOptions[0]?.value || '',
    description: '',
    ...initialValues,
  };

  const showMode = (currentMode, fieldName) => {
    setShowPicker(true);
    setPickerMode(currentMode);
    setCurrentField(fieldName);
  };

  const formatTime = timeObj => {
    if (
      !timeObj ||
      typeof timeObj.hours === 'undefined' ||
      typeof timeObj.minutes === 'undefined'
    ) {
      return '';
    }
    const hours = String(timeObj.hours).padStart(2, '0');
    const minutes = String(timeObj.minutes).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <Formik
      initialValues={defaultInitialValues}
      validationSchema={projectValidationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
        isSubmitting,
      }) => {
        const onPickerChange = (event, selectedValue) => {
          setShowPicker(false);
          if (event.type === 'set' && selectedValue) {
            if (currentField === 'deadline') {
              setFieldValue('deadline', selectedValue);
            } else if (currentField === 'estimate') {
              const hours = selectedValue.getHours();
              const minutes = selectedValue.getMinutes();
              setFieldValue('estimate', {hours, minutes});
            }
          }
        };

        return (
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <Input
              placeholder="Task Name"
              onChangeText={handleChange('taskName')}
              onBlur={handleBlur('taskName')}
              value={values.taskName}
              error={touched.taskName && errors.taskName}
            />
            <Input
              placeholder="Select Task Group"
              onChangeText={handleChange('taskGroup')}
              onBlur={handleBlur('taskGroup')}
              value={values.taskGroup}
              error={touched.taskGroup && errors.taskGroup}
            />
            <Input
              dataType="date"
              placeholder="Select duration"
              onDateChange={() => showMode('date', 'deadline')}
              value={
                values.deadline ? values.deadline.toLocaleDateString() : ''
              }
              error={touched.estimate && errors.estimate?.hours}
            />
            <Input
              dataType="time"
              placeholder="Select Date"
              onDateChange={() => showMode('time', 'estimate')}
              value={values.estimate ? formatTime(values.estimate) : ''}
              error={touched.deadline && errors.deadline}
            />

            {showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={
                  currentField === 'deadline'
                    ? values.deadline || new Date()
                    : values.estimate
                    ? new Date(
                        new Date().setHours(
                          values.estimate.hours,
                          values.estimate.minutes,
                        ),
                      )
                    : new Date()
                }
                mode={pickerMode}
                is24Hour={true}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onPickerChange}
              />
            )}
            <Input
              placeholder="Select Priority"
              onChangeText={handleChange('priority')}
              onBlur={handleBlur('priority')}
              value={values.priority}
              error={touched.priority && errors.priority}
            />
            <Input
              placeholder="Select Assignee"
              onChangeText={handleChange('assignee')}
              onBlur={handleBlur('assignee')}
              value={values.assignee}
              error={touched.assignee && errors.assignee}
            />
            <Input
              placeholder="Add some description of the task"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              error={touched.description && errors.description}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
              // style={styles.descriptionInput}
            />

            {/* <View style={styles.attachmentButtonsContainer}>
              <Button
                prefixLogo={
                  <CustomVectorIcon
                    name="paperclip"
                    family="Feather"
                    size={20}
                    color={COLORS.primary}
                  />
                }
                buttonStyle={styles.iconButton}
                onPress={() => console.log('Attach file')}
                type="text"
              />
              <Button
                prefixLogo={
                  <CustomVectorIcon
                    name="link-2"
                    family="Feather"
                    size={20}
                    color={COLORS.secondary}
                  />
                }
                buttonStyle={styles.iconButton}
                onPress={() => console.log('Add link')}
                type="text"
              />
            </View> */}

            <Button
              title="Save Project"
              onPress={handleSubmit}
              loading={isSubmitting}
              buttonStyle={styles.saveButton}
            />
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default ProjectForm;
