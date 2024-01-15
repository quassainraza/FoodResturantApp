import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import useTheme from '@/hooks/useTheme';
import MathIcons from 'react-native-vector-icons/EvilIcons';
import CrossIcon from 'react-native-vector-icons/Entypo';
import {
  BG_DARK,
  BG_LIGHT,
  BUTTON_DARK,
  BUTTON_LIGHT,
} from '@/constants/Colors';
import { useMyCartContext } from '@/contexts/CartContext';
import { productsData } from '@/constants/data';

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const initialPrice = 20;
  const theme = useTheme();
  const [price, setPrice] = useState(initialPrice);
  const [quantityy, setQuantity] = useState(1);
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useMyCartContext();
  const item = productsData.find(i => i.id === id);
  if (item == null) return null;
  const increaseQunatity = () => {
    setQuantity(quantityy + 1);
    setPrice(quantityy * initialPrice + initialPrice);
    increaseCartQuantity(item.id);
  };
  const decreaseQuantity = () => {
    if (quantityy > 1) {
      setQuantity(quantityy - 1);
      setPrice((quantityy - 1) * initialPrice);
      decreaseCartQuantity(item.id);
    } else {
    }
  };
  const removeFromCartt = () => {
    removeFromCart(id);
  };

  return (
    <View
      style={{
        backgroundColor: theme === 'dark' ? BG_LIGHT : BG_DARK,
        ...styles.card,
      }}>
      <View
        style={{
          borderRadius: 20,
          flexDirection: 'row',
          flex: 1,
          // backgroundColor: 'yellow',
        }}>
        <Image
          source={item?.icon}
          style={{
            borderColor: theme === 'dark' ? 'black' : 'white',
            ...styles.cardImage,
          }}
        />

        <View style={styles.cardContent}>
          <Text
            style={{
              color: theme === 'dark' ? 'black' : 'white',
              ...styles.foodTitle,
            }}>
            {item.foodname}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              numberOfLines={2}
              allowFontScaling
              textBreakStrategy="balanced"
              style={{
                color: theme === 'dark' ? 'black' : 'white',
                fontWeight: 'bold',
                ...styles.foodType,
              }}>
              Type:
            </Text>
            <Text
              numberOfLines={2}
              allowFontScaling
              textBreakStrategy="balanced"
              style={{
                color: theme === 'dark' ? 'black' : 'white',
                ...styles.foodType,
              }}>
              {'Type'}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: theme === 'dark' ? 'black' : 'white',
                fontWeight: 'bold',
                ...styles.foodType,
              }}>
              Desc:
            </Text>
            <Text
              allowFontScaling
              textBreakStrategy="balanced"
              style={{
                color: theme === 'dark' ? 'black' : 'white',
                ...styles.foodType,
              }}>
              {' '}
              {'Grill burger ready at your place.. '}
            </Text>
          </View>

          <View style={styles.price}>
            <Text
              style={{
                color: theme === 'dark' ? 'black' : 'white',
                fontWeight: 'bold',
                ...styles.foodType,
              }}>
              Price:
            </Text>
            <Text
              style={{
                color: theme === 'dark' ? BUTTON_DARK : BUTTON_LIGHT,
                ...styles.dollar,
              }}>
              {' '}
              {'$'}
            </Text>

            <Text
              style={{
                color: theme === 'dark' ? BUTTON_DARK : BUTTON_LIGHT,
                ...styles.foodPrice,
              }}>
              {item.price}
            </Text>
          </View>
          {/*Put here  - icon */}
          <View style={styles.quantityIcons}>
            <MathIcons
              style={styles.quantityIcon}
              onPress={decreaseQuantity}
              name="minus"
              size={40}
              color={theme === 'dark' ? 'black' : 'white'}
            />
            <Text
              style={{
                color: theme === 'dark' ? 'black' : 'white',
                ...styles.quantity,
              }}>
              {quantityy}
            </Text>
            <MathIcons
              style={styles.quantityIcon}
              onPress={increaseQunatity}
              name="plus"
              size={40}
              color={theme === 'dark' ? 'black' : 'white'}
            />
          </View>
        </View>

        <CrossIcon
          name="cross"
          size={25}
          color={theme === 'dark' ? 'black' : 'white'}
          onPress={removeFromCartt}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    //flex: 1,
    maxWidth: '100%',
    maxHeight: '50%',
    flexDirection: 'row',

    margin: 20,
    borderRadius: 15,
    elevation: 4, // Add elevation for a card-like appearance
  },
  cardImage: {
    width: '40%', // Adjust the width according to your design
    resizeMode: 'cover',
    height: '100%',
    borderRadius: 10,
    marginRight: '5%',
    borderWidth: 1,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    marginTop: 10,

    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  foodTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  foodType: {
    fontSize: 14,
    marginBottom: 5,
  },
  addOnType: {
    fontSize: 14,
    marginBottom: '20%',
  },

  price: {
    flexDirection: 'row',
  },
  dollar: {
    fontSize: 15,
    fontWeight: 'bold',
    // Customize the color as needed
    marginBottom: 5,
  },

  foodPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    // Customize the color as needed
  },
  quantity: {
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  quantityIcon: {
    height: '110%',
    paddingVertical: 5,
    alignSelf: 'center',
    // paddingHorizontal: 5, // Add padding to give space around the icons
  },
  quantityIcons: {
    //justifyContent: 'center',

    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
});

export default CartItem;
