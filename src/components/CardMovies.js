import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Colors} from '../assets/colors/colors';

const CardMovies = ({movie}) => {
  const {title, poster_path, release_date, overview, vote_average} = movie;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/original${poster_path}`}}
        style={styles.imageDesign}
      />
      <View style={styles.dataContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.vote}>{vote_average}</Text>
        </View>

        <Text style={styles.overview}>{overview}</Text>
        <Text style={styles.date}>{release_date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '90%',
    borderRadius: 20,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.22,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.BACKGROUND,
    alignSelf: 'center',
  },
  imageDesign: {
    width: '100%',
    height: 180,
    alignSelf: 'center',
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    flex: 1,
    fontStyle: 'italic',
  },
  dataContainer: {
    marginHorizontal: 20,
    flex: 1,
    marginVertical: 15,
  },
  overview: {
    flex: 1,
    fontSize: 15,
    color: Colors.SECONDARY,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  date: {
    flex: 1,
    fontStyle: 'italic',
    fontSize: 15,
    color: Colors.SECONDARY,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  vote: {
    color: Colors.TERTIARY,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default CardMovies;
