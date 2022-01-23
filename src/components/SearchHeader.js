import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Colors} from '../assets/colors/colors';
import LeftArrow from '../assets/icons/left_arrow';
import {useNavigation, useRoute} from '@react-navigation/native';

const SearchHeader = () => {
  const {goBack} = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.header}>
      <View style={styles.containerRow}>
        <TouchableOpacity style={styles.arrowBack} onPress={goBack}>
          <LeftArrow />
        </TouchableOpacity>
        <Text allowFontScaling={false} style={styles.title}>
          {route.params?.searchBy}
        </Text>
        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowBack: {
    justifyContent: 'center',
    width: 30,
    alignItems: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 12,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: -30,
    color: Colors.SECONDARY,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  header: {
    backgroundColor: Colors.PRIMARY,
  },
});

export default SearchHeader;
