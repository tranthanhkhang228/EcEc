import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import {Sound} from '@components';
import {Typography, Color} from 'styles';

const Pronunciation = ({navigation}) => {
  const sounds = [
    {
      id: 1,
      text: 'e',
      isDone: true,
    },
    {
      id: 2,
      text: 'i',
      isDone: true,
    },
    {
      id: 3,
      text: 'u',
      isDone: true,
    },
    {
      id: 4,
      text: 'e',
      isDone: false,
    },
    {
      id: 5,
      text: 't',
      isDone: false,
    },
    {
      id: 6,
      text: 'p',
      isDone: false,
    },
    {
      id: 7,
      text: 'w',
      isDone: false,
    },
    {
      id: 8,
      text: 'q',
      isDone: false,
    },
    {
      id: 9,
      text: 'p',
      isDone: false,
    },
    {
      id: 10,
      text: 'w',
      isDone: false,
    },
    {
      id: 11,
      text: 'q',
      isDone: false,
    },
    {
      id: 12,
      text: 'p',
      isDone: false,
    },
    {
      id: 13,
      text: 'w',
      isDone: false,
    },
    {
      id: 14,
      text: 'q',
      isDone: false,
    },
  ];

  const handlePress = () => {
    navigation.navigate('Practice');
  };

  return (
    <SafeAreaView style={styles.pronunciation}>
      <View style={styles.vowelContainer}>
        <View>
          <Text style={styles.pronunciationText}>Nguyên âm</Text>
          <FlatList
            data={[...sounds.slice(0, 12)]}
            numColumns={3}
            renderItem={({item}) => (
              <Sound
                text={item.text}
                onPress={handlePress}
                type="vowel"
                isDone={item.isDone}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.dipthongContainer}>
          <Text style={styles.pronunciationText}>Nguyên âm đôi</Text>
          <FlatList
            data={sounds.slice(0, 8)}
            numColumns={2}
            renderItem={({item}) => (
              <Sound
                text={item.text}
                onPress={handlePress}
                type="dipthong"
                isDone={item.isDone}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View>
        <Text style={styles.pronunciationText}>Phụ âm</Text>
        <FlatList
          data={sounds}
          numColumns={6}
          renderItem={({item}) => (
            <Sound
              text={item.text}
              onPress={handlePress}
              isDone={item.isDone}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pronunciation;

const styles = StyleSheet.create({
  pronunciation: {
    paddingHorizontal: 15,
    paddingTop: 40,
  },

  pronunciationText: {
    marginBottom: 20,
    fontFamily: Typography.medium,
    fontSize: 17,
    color: Color.gray,
    textAlign: 'center',
  },

  vowelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 70,
  },

  dipthongContainer: {
    alignItems: 'flex-end',
  },
});
