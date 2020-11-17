import React from 'react';

import {Movies} from './Movies.js';
import{MovieList} from './Movies.js';
import {BoatList} from './Boats.js';
import {
    View,
    Text,
    ScrollView


} from 'react-native';
const App: () => React$Node = (item) => {
    return (
        <ScrollView>
            <Text> Lesson 5 exercises</Text>

            <MovieList/>
            <Text> GetABoat- For Sale</Text>
            <BoatList/>
        </ScrollView>



    );
};
export default App;
