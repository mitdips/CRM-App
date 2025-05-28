import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import {useStyle} from './style'

const priorities = ['Low', 'Medium', 'High'];

const Project = () => {
    const styles=useStyle()
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [deadLine, setDeadLine] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [description, setDescription] = useState('');
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);

  // Dummy date picker logic (replace with your own picker)
  const openDatePicker = setter => {
    // For demonstration, just set a static date
    setter('2024-06-01');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Project</Text>

        <Text style={styles.label}>Project Name</Text>
        <Input
          placeholder="Project Name"
          value={projectName}
          onChangeText={setProjectName}
          style={styles.input}
        />

        <Text style={styles.label}>Starts</Text>
        <Input
          placeholder="Select Date"
          value={startDate}
          onChangeText={setStartDate}
          rightType="calendar"
          onRightIconPress={() => openDatePicker(setStartDate)}
          style={styles.input}
        />

        <Text style={styles.label}>Dead Line</Text>
        <Input
          placeholder="Select Date"
          value={deadLine}
          onChangeText={setDeadLine}
          rightType="calendar"
          onRightIconPress={() => openDatePicker(setDeadLine)}
          style={styles.input}
        />

        <Text style={styles.label}>Priority</Text>
        <Input
          placeholder="Medium"
          value={priority}
          onChangeText={setPriority}
          style={styles.input}
          onFocus={() => setShowPriorityDropdown(true)}
        />
        {showPriorityDropdown && (
          <View style={styles.dropdown}>
            {priorities.map(item => (
              <Text
                key={item}
                style={styles.dropdownItem}
                onPress={() => {
                  setPriority(item);
                  setShowPriorityDropdown(false);
                }}
              >
                {item}
              </Text>
            ))}
          </View>
        )}

        <Text style={styles.label}>Description</Text>
        <Input
          placeholder="Add some description of the project"
          value={description}
          onChangeText={setDescription}
          multiline
          style={styles.textArea}
        />

        <Button
          title="Add Project"
          onPress={() => {
            // handle submit
          }}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default Project;
