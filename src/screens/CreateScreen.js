import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

// context object
import { Context as BlogContext } from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';

// Show screen displaying post related to particular id
const CreateScreen = ({ navigation }) => {
 const { addPost } = useContext(BlogContext);

  // here's the func to call every time user submits a form
  return <BlogPostForm onSubmit={(title, content) => {
    addPost(title, content, () => navigation.navigate('Index'))
  }} />
  // don't put it outside when making api request
  // causes errors
  //  navigation.navigate('Index')
};

const styles = StyleSheet.create({
  
});

export default CreateScreen;
