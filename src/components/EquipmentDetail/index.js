import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const EquipmentDetail = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Undergo</Text>
        <Text>Verb</Text>
      </View>
      <View>
        <View>
          <Text>BrE</Text>
          <Text>/ˌʌndəˈɡəʊ/</Text>
        </View>
        <View>
          <Text> NAmE </Text>
          <Text> /ˌʌndərˈɡəʊ/ </Text>
        </View>
      </View>
      <View>
        <Text>Verb Forms</Text>
        <Text>Verb</Text>
      </View>
      <View>
        <Text>
          Undergo something to experience something, especially a change or
          something unpleasant
        </Text>
        <Text>to undergo tests/trials/repairs</Text>
        <Text>My mother underwent major surgery last year.</Text>
        <Text>
          Some children undergo a complete transformation when they become
          teenagers.
        </Text>
        <Text>The drug is currently undergoing trials in America.</Text>
      </View>
    </SafeAreaView>
  );
};

export default EquipmentDetail;

const styles = StyleSheet.create({});
