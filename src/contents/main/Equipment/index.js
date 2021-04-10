import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {EquipmentItem} from '@components';
import {Color} from 'styles';

const title = 'Your Equipment';
const slogan = "Let's get some powerful things!";
const quote = 'Strong. Clear. Uncluttered';
const ecec = '../../../assets/images/ecec.jpg';

const EquipmentScreen = ({navigation}) => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d80',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d81',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d82',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d83',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d84',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d85',
      title: 'Third Item',
    },
  ];
  const [searchData, setSearchData] = useState([...data]);

  const onChangeText = (text) =>
    setSearchData(
      data.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      ),
    );

  const search = () => {};

  const handlePress = () => {
    navigation.navigate('EquipmentDetail');
  };

  const renderItem = ({item}) => (
    <EquipmentItem title={item.title} onPress={handlePress} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLogo}>
          <Image source={require(ecec)} style={styles.headerImage} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.headerText}>{slogan}</Text>
          <Text style={styles.headerText}>{quote}</Text>
        </View>
      </View>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchBoxInput}
          onChangeText={(text) => onChangeText(text)}
        />
        <View style={styles.searchBoxIcon}>
          <Icon size={30} name="search1" onPress={search} color="white" />
        </View>
      </View>

      <FlatList
        data={searchData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    backgroundColor: 'rgba(252, 130, 0, 0.6)',
  },

  // this class is a container to keep image small
  headerLogo: {
    borderColor: 'red',
    overflow: 'hidden',
  },

  headerImage: {
    height: 100,
    width: 100,

    borderRadius: 999,
    resizeMode: 'contain',
  },

  headerContent: {
    flex: 1,
    padding: 10,
  },

  headerText: {
    color: 'white',
    lineHeight: 20,
  },

  searchBox: {
    flexDirection: 'row',
  },

  searchBoxInput: {
    flex: 1,
    height: 40,

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: Color.border,
    borderWidth: 1.5,
  },

  searchBoxIcon: {
    padding: 4,
    backgroundColor: Color.background,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default EquipmentScreen;
