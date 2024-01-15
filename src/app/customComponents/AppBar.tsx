import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  View,
} from 'react-native';
import Cart from 'react-native-vector-icons/FontAwesome5';
import Backarrow from 'react-native-vector-icons/Entypo';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import useTheme from '@/hooks/useTheme';
import { useMyCartContext } from '@/contexts/CartContext';

interface Props {
  onBackPress?: () => void;
  onCartPress?: () => void;
  pageTitle?: string;
}

const CustomAppBar = ({ onBackPress, onCartPress, pageTitle }: Props) => {
  const iconSize = 20;
  const { cartQuantity } = useMyCartContext();
  const theme = useTheme();
  const iconColor = BUTTON_LIGHT;
  const cartquantity = cartQuantity;
  const isCheckoutPage = pageTitle === 'Checkout';
  return (
    <SafeAreaView style={styles.appBar}>
      <TouchableOpacity
        onPress={onBackPress}
        style={{
          borderColor: theme === 'dark' ? 'white' : 'black',
          borderWidth: 1,
          backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
          ...styles.iconContainer,
        }}>
        <Backarrow
          name="chevron-left"
          size={iconSize * 1.2}
          color={iconColor}
        />
      </TouchableOpacity>
      <Text
        style={[
          {
            color: theme === 'dark' ? 'white' : 'black',
            ...styles.title,
          },
          // Adjust margin when the cart icon is hidden
          isCheckoutPage
            ? {
                marginLeft: '25%',
                marginRight: 'auto',
                alignSelf: 'center',
                alignContent: 'center',
              }
            : {},
        ]}>
        {pageTitle}
      </Text>
      {!isCheckoutPage && (
        <TouchableOpacity
          onPress={onCartPress}
          style={{
            borderColor: theme === 'dark' ? 'white' : 'black',
            borderWidth: 1,
            backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
            ...styles.iconContainer,
          }}>
          <Cart name="shopping-cart" size={iconSize} color={iconColor} />
          {cartquantity > 0 && (
            <View style={styles.redCircle}>
              <Text style={styles.redCircleText}>{cartquantity}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    //paddingHorizontal: 10,
    backgroundColor: 'transparent', // Set your desired background color
  },
  iconContainer: {
    borderRadius: 8,
    padding: 10,
    marginHorizontal: Platform.OS === 'android' ? 10 : 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  redCircle: {
    position: 'absolute',
    top: 0, // Adjust the top position as needed
    right: 25, // Adjust the right position as needed
    backgroundColor: 'red',
    borderRadius: 10, // Adjust the border radius to make it a circle
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCircleText: {
    color: 'white',
    fontSize: 12, // Adjust the font size as needed
    fontWeight: 'bold',
  },
});

export default CustomAppBar;
