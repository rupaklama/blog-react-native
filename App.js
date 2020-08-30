import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';

// creating Stack navigator object to create routes
const navigator = createStackNavigator(
  { 
    // first arg is the route config object
    // when using Stack navigator, at least need to have one screen
    Index: IndexScreen,
  },
    // as second arg, passing another object
  {
    // default route to show anytime app starts up
    initialRouteName: 'Index',
    defaultNavigationOptions:{
      // default title for header
      title: 'Blogs'
    }
  }
);

// createAppContainer func creates default component & 
// displays all components inside of navigator object
const App =  createAppContainer(navigator);

// rather then directly exporting createAppContainer,
// we wrapped it inside of our own custom component 
// to add some code for extra functionalities
export default () => {
  return <BlogProvider><App /></BlogProvider>
}
// passing App as child to BlogProvider to share our context object
// into all the children components with the help of createAppContainer