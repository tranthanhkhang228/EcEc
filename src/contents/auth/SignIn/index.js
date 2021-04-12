import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import IconFon from 'react-native-vector-icons/Fontisto';
import IconIon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconFea from 'react-native-vector-icons/Feather';

import {CustomButton, Input, Launcher} from '@components';
import {Color, Typography} from 'styles';

const ecec = '../../../assets/images/ecec.jpg';

const SignIn = ({navigation}) => {
  const [mode, setMode] = useState('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [introduction, setIntroduction] = useState('');

  const onPresssignIn = async () => {
    setErrorMessage('');

    if (!email || !password) {
      console.log('run validate');
      setErrorMessage('Nhập email/mật khẩu để đăng nhập!');
      return;
    }

    await signIn();
  };

  const onPressSignUp = async () => {
    if (mode === 'signin') {
      setMode('signup');
      setErrorMessage('');
    } else {
      if (!email || !password) {
        console.log('run validate');
        setErrorMessage('Nhập email/mật khẩu để đăng ký!');
        return;
      }

      await signUp();
    }
  };

  const signIn = async () => {
    try {
      setIsLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
      setIsLoading(false);
      Alert.alert('Sign in successfully!');
      navigation.navigate('Home');
    } catch (error) {
      setIsLoading(false);
      console.log(error.code);
      handleError(error);
    }
  };

  const signUp = async () => {
    try {
      setIsLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
      setIsLoading(false);
      Alert.alert('Sign up successfully!');
      setMode('signin');
    } catch (error) {
      setIsLoading(false);
      handleError(error);
    }
  };

  const handleError = (error) => {
    switch (error.code) {
      case 'auth/user-not-found':
        setErrorMessage('Tài khoản chưa được đăng ký!');
        return;
      case 'auth/invalid-email':
        setErrorMessage('Email không hợp lệ!');
        return;
      case 'auth/email-already-in-use':
        setErrorMessage('Email đã được sử dụng!');
        return;
      case 'auth/wrong-password':
        setErrorMessage('Email hoặc mật khẩu không chính xác!');
        return;
      case 'auth/weak-password':
        setErrorMessage('Mật khẩu quá ngắn!');
        return;
      default:
        setErrorMessage(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.signin}>
      {isLoading ? (
        <Launcher />
      ) : (
        <KeyboardAvoidingView behavior="position">
          <ScrollView>
            <Text style={styles.title}>Đăng nhập</Text>
            <Image source={require(ecec)} style={styles.image} />

            <View style={styles.inputSection}>
              <View style={styles.inputContainer}>
                <Input
                  label="Mail *"
                  icon={<IconFon name="email" color={Color.gray} size={15} />}
                  text={email}
                  placeholder="Tên đăng nhập hoặc email"
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputContainer}>
                <Input
                  label="Mật khẩu *"
                  icon={<Icon name="key" color={Color.gray} size={15} />}
                  text={password}
                  placeholder="Mật khẩu"
                  onChangeText={setPassword}
                />
              </View>

              {mode === 'signup' ? (
                <>
                  <View style={styles.inputContainer}>
                    <Input
                      label="Tên"
                      icon={
                        <IconIon
                          name="person-outline"
                          color={Color.gray}
                          size={15}
                        />
                      }
                      text={firstName}
                      onChangeText={setFirstName}
                    />
                    <Input
                      label="Họ"
                      icon={
                        <IconIon
                          name="person-outline"
                          color={Color.gray}
                          size={15}
                        />
                      }
                      text={lastName}
                      onChangeText={setLastName}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Input
                      label="Điện thoại"
                      icon={
                        <IconFea name="phone" color={Color.gray} size={15} />
                      }
                      text={phoneNumber}
                      onChangeText={setPhoneNumber}
                    />
                    <Input
                      label="Ngày sinh"
                      icon={
                        <IconFA
                          name="birthday-cake"
                          color={Color.gray}
                          size={15}
                        />
                      }
                      text={birthday}
                      onChangeText={setBirthday}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Input
                      label="Giới thiệu bản thân"
                      icon={
                        <IconFA name="signature" color={Color.gray} size={15} />
                      }
                      text={introduction}
                      onChangeText={setIntroduction}
                      multiline
                      numberOfLines={5}
                      maxText={150}
                    />
                  </View>
                </>
              ) : null}
            </View>

            {errorMessage ? (
              <Text style={styles.error}>{errorMessage}</Text>
            ) : null}

            <View style={styles.btnContainer}>
              {mode === 'signin' ? (
                <CustomButton text="Đăng nhập" onPress={onPresssignIn} />
              ) : null}
              <CustomButton text="Đăng ký" onPress={onPressSignUp} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signin: {
    padding: 15,
    flex: 1,
  },

  title: {
    fontFamily: Typography.semiBold,
    fontSize: 20,
    color: Color.blue,
    textAlign: 'center',
    marginBottom: 80,
  },

  image: {
    height: 200,
    width: 200,

    borderRadius: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 50,
  },

  inputSection: {
    marginBottom: 15,
    paddingHorizontal: 20,
  },

  inputContainer: {
    flexDirection: 'row',
  },

  error: {
    fontFamily: Typography.regular,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    color: Color.orange,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
