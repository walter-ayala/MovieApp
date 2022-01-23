import React, {useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Keyboard,
} from 'react-native';
import {Colors} from '../../assets/colors/colors';
import CardMovies from '../../components/CardMovies';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import useCurrentPopular from '../../hooks/useCurrentPopular';

const HomeScreen = () => {
  const {getCurrentPopular, movies, loading} = useCurrentPopular();

  useEffect(() => {
    getCurrentPopular();
  }, []);

  const renderItem = useCallback(({item}) => <CardMovies movie={item} />, []);

  const keyExtractor = useCallback(({id}) => id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
        <SearchBar />
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : (
        <FlatList
          onTouchMove={() => Keyboard.dismiss()}
          data={movies}
          initialNumToRender={4}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  topContainer: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 15,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    marginBottom: 10,
  },
  imageDesign: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  contentContainerStyle: {
    marginHorizontal: 15,
  },
  loadingContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default HomeScreen;
