// In ProjectForm.js

import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Formik} from 'formik';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import {useStyle} from './style';
import {projectValidationSchema} from '../../../utils/validationSchema';
import {
  assigneeOptions,
  priorityOptions,
  projectGroupOptions,
} from '../../../utils/constant';
import DropDownPicker from 'react-native-dropdown-picker';
import Text from '../../atoms/Text';

const styles = useStyle();

const ProjectForm = ({onSubmit}) => {
  const [projectGroupOpen, setProjectGroupOpen] = useState(false);
  const [priorityOpen, setPriorityOpen] = useState(false);
  const [assigneeOpen, setAssigneeOpen] = useState(false);

  const [projectGroupItems, setProjectGroupItems] =
    useState(projectGroupOptions);
  const [priorityItems, setPriorityItems] = useState(priorityOptions);
  const [assigneeItems, setAssigneeItems] = useState(assigneeOptions);

  const projectGroupZIndex = projectGroupOpen ? 4000 : 1;
  const priorityZIndex = priorityOpen ? 3000 : 1;
  const assigneeZIndex = assigneeOpen ? 2000 : 1;

  const initialValues = {
    projectName: '',
    projectGroup: projectGroupOptions[0]?.value || null,
    estimate: null,
    deadline: null,
    priority: priorityOptions[1]?.value || null,
    assignee: assigneeOptions[0]?.value || null,
    description: '',
  };

  const formatDateForDisplay = dateObj => {
    if (!dateObj || !(dateObj instanceof Date)) return '';
    return dateObj.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTimeForDisplay = estimateObj => {
    if (
      !estimateObj ||
      typeof estimateObj.hours === 'undefined' ||
      typeof estimateObj.minutes === 'undefined'
    ) {
      return '';
    }
    const tempDate = new Date();
    tempDate.setHours(estimateObj.hours, estimateObj.minutes);
    return tempDate.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={projectValidationSchema}
      enableReinitialize
      onSubmit={(values, actions) => {
        console.log('[ProjectForm] Form Submitted. Values:', values);
        if (onSubmit) {
          onSubmit(values);
        }
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
        const estimateDisplayValue = formatTimeForDisplay(values.estimate);
        const deadlineDisplayValue = formatDateForDisplay(values.deadline);

        return (
          <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.contentContainer}
            nestedScrollEnabled={true}>
            <Input
              placeholder="Project Name"
              onChangeText={handleChange('projectName')}
              onBlur={handleBlur('projectName')}
              value={values.projectName}
              error={touched.projectName && errors.projectName}
            />
            <View style={{zIndex: projectGroupZIndex}}>
              <DropDownPicker
                open={projectGroupOpen}
                value={values.projectGroup}
                items={projectGroupItems}
                setOpen={setProjectGroupOpen}
                setItems={setProjectGroupItems}
                setValue={callback => {
                  const selectedVal = callback(values.projectGroup);
                  setFieldValue('projectGroup', selectedVal);
                }}
                placeholder="Select Project Group"
                style={styles.dropdown}
                textStyle={styles.pickerTextStyle}
                placeholderStyle={styles.placeholder}
                dropDownContainerStyle={styles.dropdownContainer}
                labelStyle={styles.dropdownItemLabelStyle}
                listMode="SCROLLVIEW"
                dropDownDirection="AUTO"
                zIndex={projectGroupZIndex}
                onOpen={() => {
                  setPriorityOpen(false);
                  setAssigneeOpen(false);
                }}
              />
            </View>
            {touched.projectGroup && errors.projectGroup && (
              <Text style={styles.errorText}>{errors.projectGroup}</Text>
            )}

            {/* Estimate Input (Time) */}
            <Input
              dataType="time"
              placeholder="Select Duration"
              value={estimateDisplayValue}
              onDateChange={selectedTime => {
                if (selectedTime) {
                  const hours = selectedTime.getHours();
                  const minutes = selectedTime.getMinutes();
                  setFieldValue('estimate', {hours, minutes});
                }
              }}
              error={touched.estimate && errors.estimate}
            />

            {/* Deadline Input (Date) */}
            <Input
              dataType="date"
              placeholder="Select Date"
              value={deadlineDisplayValue}
              onDateChange={selectedDate => {
                if (selectedDate) {
                  setFieldValue('deadline', selectedDate);
                }
              }}
              error={touched.deadline && errors.deadline}
            />

            <View style={{zIndex: priorityZIndex}}>
              <DropDownPicker
                open={priorityOpen}
                value={values.priority}
                items={priorityItems}
                setOpen={setPriorityOpen}
                setValue={callback => {
                  const selectedVal = callback(values.priority);
                  setFieldValue('priority', selectedVal);
                }}
                setItems={setPriorityItems}
                placeholder="Select Priority"
                style={styles.dropdown}
                textStyle={styles.pickerTextStyle}
                placeholderStyle={styles.placeholder}
                dropDownContainerStyle={styles.dropdownContainer}
                labelStyle={styles.dropdownItemLabelStyle}
                zIndex={priorityZIndex}
                onOpen={() => {
                  setProjectGroupOpen(false);
                  setAssigneeOpen(false);
                }}
              />
            </View>
            {touched.priority && errors.priority && (
              <Text style={styles.errorText}>{errors.priority}</Text>
            )}
            <View style={{zIndex: assigneeZIndex}}>
              <DropDownPicker
                open={assigneeOpen}
                value={values.assignee}
                items={assigneeItems}
                setOpen={setAssigneeOpen}
                setValue={callback => {
                  const selectedVal = callback(values.assignee);
                  setFieldValue('assignee', selectedVal);
                }}
                setItems={setAssigneeItems}
                placeholder="Select Assignee"
                style={styles.dropdown}
                textStyle={styles.pickerTextStyle}
                placeholderStyle={styles.placeholder}
                dropDownContainerStyle={styles.dropdownContainer}
                labelStyle={styles.dropdownItemLabelStyle}
                zIndex={assigneeZIndex}
                onOpen={() => {
                  setProjectGroupOpen(false);
                  setPriorityOpen(false);
                }}
              />
            </View>
            {touched.assignee && errors.assignee && (
              <Text style={styles.errorText}>{errors.assignee}</Text>
            )}
            <Input
              placeholder="Description of the project"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              error={touched.description && errors.description}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
            <Button
              title="Save Project"
              onPress={handleSubmit}
              loading={isSubmitting}
            />
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default ProjectForm;
