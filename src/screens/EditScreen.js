import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

// context object
import { Context as BlogContext } from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';

// Show screen displaying post related to particular id
const EditScreen = ({ navigation }) => {
  // useContext hook to access state from Context object
  const { state, editPost } = useContext(BlogContext);

  const id = navigation.getParam('id')

  // to get the post we want to edit
  const blogPost = state.find(post => post.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editPost(id, title, content, () => navigation.pop())
      }}
    />
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

export default EditScreen;
