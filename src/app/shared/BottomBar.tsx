import { View, Text, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '@/hooks/useTheme';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import { BottomTabContext } from '@/contexts/BottomTabContext';
import QRCodeScanner from 'react-native-vector-icons/MaterialIcons';
interface Props {
  props: any;
  isDisplayBottomBar?: boolean;
}

const BottomBar = ({ props, isDisplayBottomBar = true }: Props) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useContext(BottomTabContext);
  const size = 60;
  // console.log("active :",activeTab)
  if (!isDisplayBottomBar) {
    return null; // Do not render anything if isDisplayBottomBar is false
  }
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',

        bottom: 0,
        position: 'absolute',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingHorizontal: 25,
      }}>
      <View
        style={{
          backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
          borderTopColor: 'grey',
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (setActiveTab) setActiveTab('Home');
            props.navigation.navigate('Home');
            // console.log("active :",activeTab)
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={activeTab === 'Home' ? 'home' : 'home-outline'}
            color={BUTTON_LIGHT}
            size={25}
          />
          <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (setActiveTab) setActiveTab('explore');
            props.navigation.navigate('explore');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={activeTab === 'explore' ? 'fast-food' : 'fast-food-outline'}
            color={BUTTON_LIGHT}
            size={25}
          />
          <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Products</Text>
        </TouchableOpacity>
        <View
          style={{
            width: size, // Adjust the size of the circle as needed
            height: size,
            borderRadius: size / 2, // Half of the width and height to make a circle
            backgroundColor: BUTTON_LIGHT,
            justifyContent: 'center',
            bottom: 30,
          }}>
          <QRCodeScanner
            style={{ justifyContent: 'center', alignSelf: 'center' }}
            name="qr-code-scanner"
            color={'white'}
            size={size * 0.6}></QRCodeScanner>
        </View>

        <TouchableOpacity
          onPress={() => {
            if (setActiveTab) setActiveTab('trends');
            props.navigation.navigate('trends');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={activeTab === 'trends' ? 'apps' : 'apps-outline'}
            color={BUTTON_LIGHT}
            size={25}
          />
          <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (setActiveTab) setActiveTab('profile');
            props.navigation.navigate('profile');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={activeTab === 'profile' ? 'person' : 'person-outline'}
            color={BUTTON_LIGHT}
            size={25}
          />
          <Text style={{ color: BUTTON_LIGHT, fontSize: 13 }}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;
