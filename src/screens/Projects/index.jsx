import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import HomeTemplate from '../../components/templates/HomeTemplate';
import CustomText from '../../components/atoms/Text';
import CustomVectorIcon from '../../components/atoms/VectorIcon';
import CustomModal from '../../components/molecules/CustomModel';
import ProjectForm from '../../components/organisms/ProjectForm';
import {COLORS} from '../../utils/colors';
import {scale} from 'react-native-size-matters';

const ProjectsScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = values => {
    console.log('Project Form Submitted:', values);
    handleCloseModal();
  };

  return (
    <HomeTemplate>
      <TouchableOpacity style={styles.fab} onPress={handleOpenModal}>
        <CustomVectorIcon
          name="MaterialCommunityIcons:plus"
          size={scale(20)}
          color={COLORS.white}
        />
      </TouchableOpacity>

      <CustomModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        title="Add Task">
        <ProjectForm onSubmit={handleFormSubmit} />
      </CustomModal>
    </HomeTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(16),
  },
  screenTitle: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginBottom: scale(20),
    textAlign: 'center',
  },
  contentPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: scale(16),
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary,
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default ProjectsScreen;
