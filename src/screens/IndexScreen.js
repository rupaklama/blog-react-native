import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

// context object
import { Context as BlogContext} from '../context/BlogContext';

const IndexScreen = () => {
  // useContext hook to use initial state from Context object
  const { state, addPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>

      <Button title="Add Post" onPress={addPost} />

      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
