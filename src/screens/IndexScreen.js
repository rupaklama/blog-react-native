import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// context object
import { Context as BlogContext } from '../context/BlogContext';

import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  // useContext hook to use initial state from Context object
  // in our helper function createDataContext.js
  const { state, deletePost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => {
          return (
            // Show screen displaying post related to particular id
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>

                <TouchableOpacity onPress={() => deletePost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// direct reference to the functional component - IndexScreen
// whenever IndexScreen about to get displayed by react navigation,
// react navigation will automatically call this assigned function & it
// will inspect the object that we return
// We can use this object to customize different things that are
// displayed inside of our header like tapping an element
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    // assigning react element here which will be displayed on the right handside of header
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
