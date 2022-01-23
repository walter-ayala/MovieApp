import React, {useEffect, useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../assets/colors/colors';
import SearchIcon from '../assets/icons/search';

const SearchBar = ({word = ''}) => {
  const [searchBy, setSearchBy] = useState('');
  const {navigate} = useNavigation();

  const onSearch = () => {
    navigate('Search', {searchBy});
    setSearchBy('');
  };

  useEffect(() => {
    setSearchBy(word);
  }, [word]);

  return (
    <View style={styles.row}>
      <View style={styles.search}>
        <View style={styles.containerIconButton}>
          <SearchIcon color={Colors.SECONDARY} height={19} width={19} />
        </View>

        <TextInput
          onSubmitEditing={onSearch}
          onChangeText={setSearchBy}
          placeholder="Search a movie"
          style={styles.inputPlace}
          clearButtonMode="while-editing"
          returnKeyType="search"
          autoCapitalize={false}
          autoCorrect={false}
          autoFocus={false}
          value={searchBy}
          placeholderTextColor={Colors.GREY}
          allowFontScaling={false}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  search: {
    flex: 1,
    height: 45,
    backgroundColor: Colors.WHITE,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  inputPlace: {
    flex: 1,
    paddingRight: 15,
    color: Colors.GRAY,
    fontSize: 14,
  },
  containerIconButton: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
