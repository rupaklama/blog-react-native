import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// context object
import { Context as BlogContext } from '../context/BlogContext';

// Show screen displaying post related to particular id
const ShowScreen = ({ navigation }) => {
  // console.log(navigation.getParam('id'))

  // useContext hook to access state from Context object
  const { state } = useContext(BlogContext);

  // find is built-in helper func,
  // If it finds an array element where the function returns a true value, 
  // find() returns the value of that array element (and does not check the remaining values)
  // we can pass in func to it, call with every post/item inside of an array,
  // when return true inside of find(), take that post/item & assign it to variable
  const blogPost = state.find((post) => post.id === navigation.getParam('id'))
  // if the id provided in screen === post.id, found the correct blog post

  return (
    <View>
      <Text>{ blogPost.title }</Text>
      <Text>{ blogPost.content }</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ShowScreen;
