import React from 'react';
import {View, Text, Image} from 'react-native';

class Movies extends React.Component {
  render(): React$Node {
    return (
      <Text>
        {' '}
        {movie.title} {'\n'} {movie.year}
      </Text>
    );
  }
}

const MovieList = () => {
  return MOVIES_DATA.map((name) => {
    return (
      <View>
        <Text>
          {name.title} {'\n'} {name.year}
        </Text>
        <Image source={name.poster} />
      </View>
    );
  });
};

const movie = {title: 'Doctor Sleep', year: '2019'};
export {Movies};
export {MovieList};
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];
