import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {CustomButton, Input} from '@components';
import {Color, Typography} from 'styles';
import Icon from 'react-native-vector-icons/Feather';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconFon from 'react-native-vector-icons/Fontisto';
import IconFea from 'react-native-vector-icons/Feather';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ecec = '../../../assets/images/ecec.jpg';

const InventoryScreen = () => {
  const [user, setUser] = useState({
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'mrleo3q@gmail.com',
    birthday: '22/03/1999',
    phoneNumber: '+84 393 207 564',
    introduction:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  });
  const [isEditting, setIsEditting] = useState(false);

  const handlePressButton = () => {};

  const applyData = (updatedFields) => {
    setUser((prev) => ({...prev, ...updatedFields}));
  };

  const handleValueChange = (field, value) => {
    applyData({[field]: value});
  };

  const onToggleEdit = () => {
    setIsEditting(!isEditting);
  };

  return (
    <SafeAreaView style={styles.inventory}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Thông tin cá nhân</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image source={require(ecec)} style={styles.avatar} />
        </View>

        <View style={styles.headerBtnContainer}>
          <CustomButton text="Đổi mật khẩu" onPress={handlePressButton}>
            <Icon name="key" color={Color.white} size={16} />
          </CustomButton>
          <CustomButton text="Đăng xuất" onPress={handlePressButton}>
            <IconIon name="log-out-outline" color={Color.white} size={18} />
          </CustomButton>
        </View>

        <View style={styles.bodyTitleContainer}>
          <Text style={styles.bodyTitleText}>Thông tin cá nhân</Text>
          <TouchableWithoutFeedback
            onPress={onToggleEdit}
            style={styles.bodyTitleIcon}>
            <IconFA
              name="pen"
              color={isEditting ? Color.orange : Color.blue}
              size={18}
            />
          </TouchableWithoutFeedback>
        </View>

        <View>
          <View style={styles.inputContainer}>
            <Input
              label="Tên"
              icon={
                <IconIon
                  name="person-outline"
                  color={isEditting ? Color.gray : Color.orange}
                  size={15}
                />
              }
              text={user.firstName}
              disable={isEditting}
              onChangeText={(text) => handleValueChange('firstName', text)}
            />
            <Input
              label="Họ"
              icon={
                <IconIon
                  name="person-outline"
                  color={isEditting ? Color.gray : Color.orange}
                  size={15}
                />
              }
              text={user.lastName}
              disable={isEditting}
              onChangeText={(text) => handleValueChange('lastName', text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              label="Email"
              icon={
                <IconFon
                  name="email"
                  color={isEditting ? Color.gray : Color.orange}
                  size={15}
                />
              }
              text={user.email}
              disable={isEditting}
              onChangeText={(text) => handleValueChange('email', text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              label="Điện thoại"
              icon={
                <IconFea
                  name="phone"
                  color={isEditting ? Color.gray : Color.orange}
                  size={15}
                />
              }
              text={user.phoneNumber}
              disable={isEditting}
              onChangeText={(text) => handleValueChange('phoneNumber', text)}
            />
            <Input
              label="Ngày sinh"
              icon={
                <IconFA
                  name="birthday-cake"
                  color={isEditting ? Color.gray : Color.orange}
                  size={15}
                />
              }
              text={user.birthday}
              disable={isEditting}
              onChangeText={(text) => handleValueChange('birthday', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              label="Giới thiệu bản thân"
              icon={
                <IconFA
                  name="signature"
                  color={isEditting ? Color.gray : Color.orange}
                  size={15}
                />
              }
              text={user.introduction}
              disable={isEditting}
              onChangeText={(text) => handleValueChange('introduction', text)}
              multiline
              numberOfLines={5}
              maxText={150}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inventory: {
    flex: 1,
    padding: 20,
  },

  titleContainer: {
    marginBottom: 30,
  },

  titleText: {
    textAlign: 'center',
    color: Color.orange,
    fontSize: 18,
    fontFamily: Typography.semiBold,
  },

  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },

  avatar: {
    height: 150,
    width: 150,

    borderRadius: 30,
    resizeMode: 'contain',
  },

  headerBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 40,
  },

  bodyTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  bodyTitleText: {
    fontFamily: Typography.medium,
    fontSize: 18,
    color: Color.blue,
  },

  bodyTitleIcon: {
    width: 100,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  inputContainer: {
    flexDirection: 'row',
  },
});

export default InventoryScreen;
