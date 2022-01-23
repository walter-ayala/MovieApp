import React, {useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Colors} from '../../assets/colors/colors';
import CardMovies from '../../components/CardMovies';
import SearchHeader from '../../components/SearchHeader';
import useSearchMovies from '../../hooks/useSearchMovies';

const SearchScreen = ({route}) => {
  const {getSearchMovies, movies, loading} = useSearchMovies();

  useEffect(() => {
    getSearchMovies(route.params?.searchBy);
  }, [route.params?.searchBy]);

  const renderItem = useCallback(({item}) => <CardMovies movie={item} />, []);

  const keyExtractor = useCallback(({id}) => id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader />

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
          ListEmptyComponent={<WithoutResults />}
        />
      )}
    </SafeAreaView>
  );
};

const WithoutResults = () => (
  <Text style={styles.withoutResults}>No se encontraron resultados</Text>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  topContainer: {
    backgroundColor: Colors.ORANGE,
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
  withoutResults: {
    fontSize: 18,
    color: Colors.GRAY,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default SearchScreen;
