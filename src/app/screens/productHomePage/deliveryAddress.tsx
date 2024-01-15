import { BG_LIGHT, BG_DARK, BUTTON_LIGHT } from '@/constants/Colors';
import CustomAppBar from '@/customComponents/AppBar';
import useTheme from '@/hooks/useTheme';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
const DeliveryAddress = (props: any) => {
  const theme = useTheme();
  const [value, setValue] = useState(['']);

  const onPressBack = (navigate: any) => {
    navigate.goBack();
  };
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const showToast = (message: string) => {
    console.log('toast');
    Toast.show({
      type: 'error',
      text1: message,
    });
  };
  const isEmailValid = (email: string) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email);
  };

  const onChangeEmailText = (email: string) => {
    setEmail(email);
    if (isEmailValid(email)) {
      showToast('Please Input Correct Email!');
    }
  };

  const isPhoneNumberValid = (phoneNumber: string) => {
    // Regular expression for a basic phone number validation
    const phoneRegex = /^\d{11}$/;
    return !phoneRegex.test(phoneNumber);
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    if (isPhoneNumberValid(text)) {
      showToast('Please Input Correct Phone Number!');
    }
  };

  const orderCompleted = () => {
    props.navigation.goBack();
    props.navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? BG_LIGHT : BG_DARK,
        minHeight: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            minHeight: '100%',
            flexDirection: 'column',
          }}>
          <CustomAppBar
            onBackPress={() => onPressBack(props.navigation)}
            pageTitle="Checkout"
          />
          <View
            style={{
              paddingHorizontal: 10,
              flex: 1,
              // minHeight: '100%',
              marginTop: '20%',
            }}>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                variant="titleLarge"
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: 10,
                }}>
                Please Enter Your Shipping Details
              </Text>
              <KeyboardAvoidingView>
                <TextInput
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  textAlign="center"
                  keyboardType="default"
                  style={{ backgroundColor: 'transparent', marginTop: 10 }}
                  contentStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                  label={'Email Address'}
                  mode="outlined"
                  value={email}
                  onChangeText={onChangeEmailText}
                />

                <TextInput
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  textAlign="center"
                  keyboardType="number-pad"
                  style={{ backgroundColor: 'transparent', marginTop: 10 }}
                  contentStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                  label={'Phone Number'}
                  onChangeText={handlePhoneNumberChange}
                  mode="outlined"
                  value={phoneNumber}
                />

                <TextInput
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  textAlign="center"
                  keyboardType="default"
                  style={{ backgroundColor: 'transparent', marginTop: 10 }}
                  contentStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                  label={'First Name'}
                  mode="outlined"
                />
                <TextInput
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  textAlign="center"
                  keyboardType="default"
                  style={{ backgroundColor: 'transparent', marginTop: 10 }}
                  contentStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                  label={'Last Name'}
                  mode="outlined"
                />
                <TextInput
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  textAlign="center"
                  keyboardType="default"
                  style={{ backgroundColor: 'transparent', marginTop: 10 }}
                  contentStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                  label={'Street Address'}
                  mode="outlined"
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    gap: 5,
                  }}>
                  <TextInput
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                    textAlign="center"
                    keyboardType="number-pad"
                    style={{
                      backgroundColor: 'transparent',
                      marginTop: 10,
                      width: '50%',
                    }}
                    contentStyle={{
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                    }}
                    label={'Street No'}
                    mode="outlined"
                  />
                  <TextInput
                    outlineColor={BUTTON_LIGHT}
                    activeOutlineColor={BUTTON_LIGHT}
                    textAlign="center"
                    keyboardType="number-pad"
                    style={{
                      backgroundColor: 'transparent',
                      marginTop: 10,
                      width: '50%',
                    }}
                    contentStyle={{
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                    }}
                    label={'Apartment No'}
                    mode="outlined"
                  />
                </View>
                <TextInput
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  textAlign="center"
                  keyboardType="default"
                  style={{
                    backgroundColor: 'transparent',
                    marginTop: 10,
                  }}
                  contentStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                  label={'City'}
                  mode="outlined"
                />
                <TextInput
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  textAlign="center"
                  keyboardType="number-pad"
                  style={{
                    backgroundColor: 'transparent',
                    marginTop: 10,
                  }}
                  contentStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                  label={'Post Code'}
                  mode="outlined"
                />
                <TextInput
                  role="menu"
                  editable={false}
                  outlineColor={BUTTON_LIGHT}
                  activeOutlineColor={BUTTON_LIGHT}
                  textAlign="center"
                  keyboardType="number-pad"
                  style={{
                    backgroundColor: 'transparent',
                    marginTop: 10,
                  }}
                  contentStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                  }}
                  label={'Payment Through'}
                  mode="outlined"
                />

                <View
                  style={{
                    //justifyContent: 'center',
                    alignSelf: 'center',
                    width: '80%',
                    marginTop: '15%',
                    marginBottom: '10%',
                    //paddingBottom: '10%',
                  }}>
                  <Button
                    onPress={orderCompleted}
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
                      Complete Order
                    </Text>
                  </Button>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryAddress;
