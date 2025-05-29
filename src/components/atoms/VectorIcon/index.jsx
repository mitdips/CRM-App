import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconMap = {
  AntDesign,
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Feather,
  Entypo,
  MaterialCommunityIcons,
};

const CustomVectorIcon = ({ name, size, color = '#000', style }) => {
  const [family, iconName] = name.split(':');

  const IconComponent = iconMap[family];

  if (!IconComponent) {
    console.warn(`Icon family "${family}" not supported`);
    return null;
  }

  return <IconComponent name={iconName} size={size} color={color} style={style} />;
};

export default CustomVectorIcon;

//how to use it Example 
{/* <CustomVectorIcon name="Ionicons:home-outline" size={28} color="blue" />
<CustomVectorIcon name="MaterialCommunityIcons:account" size={30} color="purple" /> */}
