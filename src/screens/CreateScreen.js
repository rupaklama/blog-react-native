import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

// context object
import { Context as BlogContext } from '../context/BlogContext';

// Show screen displaying post related to particular id
const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { addPost } = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />

      <Button
        title="Add post"
        onPress={() => {
          addPost(title, content, () => {
            // redirect to home page
            navigation.navigate('Index');
          });

          // don't put it outside when making api request
          // causes errors
          //  navigation.navigate('Index')
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CreateScreen;
