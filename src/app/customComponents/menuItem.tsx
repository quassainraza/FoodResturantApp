import useTheme from '@/hooks/useTheme';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
interface MenuItemProps {
  menuTitle: string;
  menuSubtitle: string;
  backgroundImage: any; // Adjust the type according to your actual image data type
  discount: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  menuTitle,
  menuSubtitle,
  backgroundImage,
  discount,
}) => {
  const padding = 20; // Set your desired padding value
  const theme = useTheme();
  const cardWidth = width - 2 * padding; // Adjusted width with padding
  return (
    <View
      style={[
        styles.menuItemCard,
        {
          width: cardWidth,
          borderColor: theme === 'dark' ? 'white' : 'black',
          borderWidth: 1,
        },
      ]}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={{ flexDirection: 'column', ...styles.overlay }}>
        <Text style={styles.title}>{menuTitle}</Text>
        <Text style={styles.subtitle}>
          {menuSubtitle} {<Text style={styles.discount}> {discount} </Text>}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemCard: {
    backgroundColor: 'red',
    marginTop: 5,
    height: height * 0.2,
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden', // Ensure the borderRadius works with Image
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: height * 0.2, // Adjust the height as needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  title: {
    marginTop: (height * 0.1) / 2,
    alignContent: 'flex-start',
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    marginTop: 5,
    alignContent: 'flex-start',
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  discount: {
    marginTop: 5,
    alignContent: 'flex-start',
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00FF32',
  },

  button: {
    backgroundColor: '#FFC009',
    borderRadius: 10,
    margin: 10,
  },
});

export default MenuItem;
