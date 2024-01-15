import { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Platform } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Dialog, Portal, Button, Text } from 'react-native-paper';
import HeartIcon from 'react-native-vector-icons/FontAwesome5';
import StarIcon from 'react-native-vector-icons/FontAwesome5';
import { BG_DARK, BG_LIGHT, BUTTON_LIGHT } from '@/constants/Colors';
import { productsData } from '@/constants/data';
import BottomBar from '@/shared/BottomBar';
import BottomSheet from '@/shared/BottomSheet';
import CustomAppBar from '@/customComponents/AppBar';
import CartItem from '@/customComponents/cartItem';
import { useMyCartContext } from '@/contexts/CartContext';

const ProductDetail = (props: any) => {
  const theme = useTheme();
  console.log(props.route.params?.paramskey);
  const foodname = props.route.params?.paramskey;
  console.log('foodname:', foodname);

  const selectedFoodIndex = productsData.findIndex(
    item => item.foodname === foodname,
  );
  const product = productsData[selectedFoodIndex];

  console.log('this is product: ', product);

  const numberOfStars = 5;
  const [modalvisible, setModalVisible] = useState(false);
  const { increaseCartQuantity, decreaseCartQuantity, cartItems } =
    useMyCartContext();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const [isCardSheetOpen, setIsCardSheetOpen] = useState(false);
  const [currIdx, setCurrIdx] = useState(0);
  const [currAddonIdx, setCurrAddonIdx] = useState(0);
  const onPressBack = (navigate: any) => {
    navigate.goBack();
  };
  const onPressCard = () => {
    // actionSheetRef.current?.show();
    // console.log("cart pressed");
    setIsCardSheetOpen(true);
  };
  const onPressCheckout = () => {
    setIsCardSheetOpen(false);
  };

  const handleTypePress = (idx: number) => {
    setCurrIdx(idx);
  };
  const handleAddOnPress = (idx: number) => {
    setCurrAddonIdx(idx);
  };
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [sucesssVisible, setSucessVisible] = useState(false);
  const showSuccesDialog = () => setSucessVisible(true);
  const hideSuccesDialog = () => setSucessVisible(false);

  const onPressAddToCart = () => {
    //decreaseCartQuantity(product.id);
    increaseCartQuantity(product.id);
  };

  const handleAddOns = () => {
    showDialog();
  };
  const moveToDeliveryAddressPage = () => {
    props.navigation.navigate('DeliveryAddress');
    onPressCheckout();
  };
  const moveBackToHomePage = () => {
    props.navigation.goBack();
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
          height: '100%',
        }}>
        <ScrollView
          contentContainerStyle={{ minHeight: '100%' }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            {/* <Appbar.Header style={styles.appBar}>
              <Appbar.BackAction
                color={'white'}
                onPress={() => onPressBack(props.navigation)}
              />
              <Appbar.Content title="" subtitle={'Subtitle'} />
              <Appbar.Action
                icon="cart"
                color={'white'}
                onPress={onPressCard}
              />
            </Appbar.Header> */}
            <Image
              style={{ flex: 1, width: '100%' }}
              source={productsData[selectedFoodIndex]?.icon}
            />

            <CustomAppBar
              onBackPress={() => onPressBack(props.navigation)}
              onCartPress={() => {
                setIsCardSheetOpen(true);
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
              borderTopColor: theme === 'dark' ? 'white' : 'black',

              borderRightColor: theme === 'dark' ? 'white' : 'black',
              borderLeftColor: theme === 'dark' ? 'white' : 'black',

              borderWidth: 1,
              minWidth: '100%',
              //height: '90%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              marginTop: '-15%',
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                maxWidth: '100%',
                justifyContent: 'space-between',
                marginTop: 20,
                marginHorizontal: 40,
                //paddingHorizontal: 30,
                //backgroundColor: 'red',
              }}>
              <Text style={{ fontSize: 50, fontWeight: 'bold' }}>
                {productsData[selectedFoodIndex]?.foodname}
              </Text>
              <HeartIcon
                style={{ margin: 10 }}
                solid
                name="heart"
                size={40}
                color={BUTTON_LIGHT}></HeartIcon>
            </View>
            <View
              style={{
                flexDirection: 'row',
                maxWidth: '100%',
                justifyContent: 'space-between',
                marginTop: 10,
                marginHorizontal: 40,
                //paddingHorizontal: 40,
                //backgroundColor: 'yellow',
              }}>
              <Text
                numberOfLines={2}
                dynamicTypeRamp="subheadline"
                variant="titleSmall"
                style={{ fontWeight: '500' }}>
                Available for Hot Sauce and Chilli
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                maxWidth: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 15,
                marginHorizontal: 40,
              }}>
              {Array.from({
                length: productsData[selectedFoodIndex]?.rating,
              }).map((_, index) => (
                <StarIcon
                  style={{ margin: 5 }}
                  key={index}
                  name="star"
                  size={20}
                  solid
                  color={'#FFC24B'}
                />
              ))}

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  alignItems: 'center',
                }}>
                {'  '}
                {productsData[selectedFoodIndex]?.reviews} {'Reviews'}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                maxWidth: '100%',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginHorizontal: 40,
              }}>
              <Text
                adjustsFontSizeToFit
                textBreakStrategy="balanced"
                style={{ fontSize: 15, fontWeight: '500' }}>
                Provides various types of sizes, Suitable for relaxing time,
                Self-healing etc..
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                maxWidth: '80%',
                justifyContent: 'space-between',
                marginTop: 30,
                marginHorizontal: 40,
              }}>
              <Text style={{ fontSize: 15, fontWeight: '500', marginEnd: 50 }}>
                Select Type
              </Text>

              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: theme === 'light' ? 'black' : 'white',
                  marginTop: 10,
                  marginEnd: 10,
                }}
              />
            </View>

            <View
              style={{
                marginTop: 20,
                marginHorizontal: 40,
                ...styles.buttonContainer,
              }}>
              {productsData[selectedFoodIndex]?.types.map((type, index) => (
                <Button
                  textColor={theme === 'dark' ? 'white' : 'black'}
                  onPress={() => handleTypePress(index)}
                  buttonColor={
                    currIdx === index
                      ? BUTTON_LIGHT
                      : theme === 'dark'
                      ? BG_DARK
                      : BG_LIGHT
                  }
                  style={{
                    borderColor: theme === 'dark' ? 'white' : 'grey',
                    borderWidth: 0.5,
                    ...styles.typeStyles,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color:
                        currIdx === index
                          ? 'white'
                          : theme === 'dark'
                          ? 'white'
                          : 'black',
                    }}>
                    {type}
                  </Text>
                </Button>
              ))}
            </View>
            {/* <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: 20,
              marginHorizontal: 40,
            }}>
            <Button
              mode="outlined"
              textColor="black"
              // buttonColor={BUTTON_LIGHT}
              style={{ borderRadius: 5, width: '45%' }}>
              Margherita
            </Button>
          </View> */}
            <View
              style={{
                //justifyContent: 'center',
                alignSelf: 'center',
                width: '80%',
                paddingBottom: '5%',
              }}>
              <Button
                onPress={handleAddOns}
                mode="contained"
                icon="food-variant"
                textColor="white"
                buttonColor={BUTTON_LIGHT}
                style={{ borderRadius: 10 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: '500',
                    color: 'white',
                  }}>
                  Select Addons
                </Text>
              </Button>
            </View>
            <View
              style={{
                //justifyContent: 'center',
                alignSelf: 'center',
                width: '80%',
                paddingBottom: '20%',
              }}>
              <Button
                onPress={onPressAddToCart}
                mode="contained"
                icon="cart"
                textColor="white"
                buttonColor={BUTTON_LIGHT}
                style={{ borderRadius: 10 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: '500',
                    color: 'white',
                  }}>
                  Save to Cart
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: '500',
                    color: 'white',
                  }}>
                  {'    '}|{'    '} {'$'}
                  {productsData[selectedFoodIndex]?.price}
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
        <BottomBar isDisplayBottomBar={false} {...props} />

        <Portal>
          <Dialog
            style={{
              backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
              borderColor: theme === 'dark' ? 'white' : 'black',
              borderWidth: 1,
            }}
            visible={visible}
            onDismiss={hideDialog}>
            <Dialog.Content>
              <View
                style={{
                  flexDirection: 'row',
                  maxWidth: 'auto',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginTop: 5,
                }}>
                <Text style={{ fontSize: 25, fontWeight: '500' }}>
                  Select AddOns
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginTop: 20,
                    fontStyle: 'italic',
                  }}>
                  {'('}
                  {'1'}
                  {')'} Inclusive
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '500',
                    marginEnd: 50,
                    marginTop: 20,
                    fontStyle: 'italic',
                  }}>
                  {' '}
                  Choose One
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 30,
                  ...styles.buttonContainer,
                }}>
                {productsData[selectedFoodIndex]?.addons.map((addon, index) => (
                  <Button
                    textColor={theme === 'dark' ? 'white' : 'black'}
                    onPress={() => handleAddOnPress(index)}
                    buttonColor={
                      currAddonIdx === index
                        ? BUTTON_LIGHT
                        : theme === 'dark'
                        ? BG_DARK
                        : BG_LIGHT
                    }
                    style={{
                      borderColor: theme === 'dark' ? 'white' : 'grey',
                      borderWidth: 0.5,
                      ...styles.addOnStyles,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color:
                          currAddonIdx === index
                            ? 'white'
                            : theme === 'dark'
                            ? 'white'
                            : 'black',
                      }}>
                      {addon}
                    </Text>
                  </Button>
                ))}
              </View>
            </Dialog.Content>
            <Dialog.Actions style={{ alignSelf: 'center' }}>
              <Button
                style={{ width: '30%' }}
                buttonColor={BUTTON_LIGHT}
                textColor="white"
                onPress={hideDialog}>
                Select
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog
            style={{
              backgroundColor: theme === 'dark' ? BG_DARK : BG_LIGHT,
              borderColor: theme === 'dark' ? 'white' : 'black',
              borderWidth: 1,
            }}
            visible={sucesssVisible}
            onDismiss={hideSuccesDialog}>
            <Dialog.Content>
              <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                Item added to cart successfully!
              </Text>
            </Dialog.Content>
            <Dialog.Actions style={{ alignSelf: 'center' }}>
              <Button
                style={{ width: '30%' }}
                buttonColor={BUTTON_LIGHT}
                textColor="white"
                onPress={moveBackToHomePage}>
                Close
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      <View>
        <BottomSheet
          noAdaptiveTheme={false}
          isOpen={isCardSheetOpen}
          setIsOpen={setIsCardSheetOpen}
          extras={props}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'column',
                //backgroundColor: 'yellow',
                minWidth: '100%',
                minHeight: 'auto',
              }}>
              <Text
                style={{
                  color: theme === 'dark' ? BG_LIGHT : BG_DARK,
                  ...styles.cartTitle,
                }}>
                Cart
              </Text>

              {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
              ))}

              {/* <View
                style={{
                  //justifyContent: 'center',
                  alignSelf: 'center',
                  width: '80%',
                  marginTop: '5%',

                  //paddingBottom: '10%',
                }}>
                <Button
                  onPress={moveBackToHomePage}
                  mode="contained"
                  textColor="white"
                  buttonColor={BUTTON_LIGHT}
                  style={{ borderRadius: 10 }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      alignSelf: 'center',
                      fontSize: 18,
                      fontWeight: '500',
                      color: 'white',
                    }}>
                    Save To Cart
                  </Text>
                </Button>
              </View> */}

              <View
                style={{
                  //justifyContent: 'center',
                  alignSelf: 'center',
                  width: '80%',
                  marginTop: '5%',
                  marginBottom: '10%',
                  //paddingBottom: '10%',
                }}>
                <Button
                  onPress={moveToDeliveryAddressPage}
                  mode="contained"
                  textColor="white"
                  buttonColor={BUTTON_LIGHT}
                  style={{ borderRadius: 10 }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      alignSelf: 'center',
                      fontSize: 18,
                      fontWeight: '500',
                      color: 'white',
                    }}>
                    Checkout
                  </Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </BottomSheet>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  button: {
    paddingBottom: 5,
    borderRadius: 5,
    width: '48%', // Adjust the width based on your design
  },
  typeStyles: {
    borderRadius: 20,
    marginBottom: 20,
    width: '48%', // Adjust the width based on your design
  },
  addOnStyles: {
    borderRadius: 20,
    marginBottom: 20,
    width: '48%', // Adjust the width based on your design
  },
  cartContainer: {
    maxHeight: 500, // Set a maximum height for the ScrollView
    padding: 25,
  },
  cartTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cartTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 5,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  appBar: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 10,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 1, // Ensure the Appbar is on top of the Image
  },
});
