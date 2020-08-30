import React, { useReducer } from 'react';
// to avoid creating multiple context objects for different types of data,
// also to avoid creating multiple reducers to manage our states
// this will help us mainly with code duplications

// automating context creation

// passing three things that acutally need to be customized,
// any time we create another context
// actions is an objects that has all different callback functions to
// dispatch an action & update our state
export default (reducer, actions, initialState) => {

  // creating two things (context object & provider func) & return it
  const Context = React.createContext();

  // This provider component will wrap all our other components to get access to context state,
  // takes children component as a paramter

  // BlogProvider is going to render BlogContext component,
  // children component which is wrapped inside BlogContext component is going to be
  // pass as a prop from BlogProvider into BlogContext component as a prop call - children
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // added little bit of fancy code here to allow helper functions in
    // other components to access dispatch to update state object

    // naming boundActions is that we process all our actions objects
    // & they are bound to the copy of dispatch
    const boundActions = {};
    for (let key in actions) {
      // key === 'addPost'
      // boundActions[key] === boundActions.addPost
      // actions[key] reference to { return () => {} } & calling with dispatch
      boundActions[key] = actions[key](dispatch) 
    }

    // actions === { addPost: (dispatch) => { return () => {} } } from BlogContext.js
    // so we are going to loop through action object, 
    // take object key which is a function & call it with dispatch that's going to 
    // give us back - return function { return () => {} }
    // set the return function - { return () => {} } in our boundActions object &
    // Finally, pass boundActions object to our provider value prop

    // can't pass an object {} into value, react can't render object directly
    // have to use function like Flatlist or map...
    return (
      <Context.Provider value={{ state: state, ...boundActions }}>{children}</Context.Provider>
    );
  };

  return { Context, Provider };
};

// created reusable function to automate 
// creating context object & provider component as many times as we want
// without code duplication

// createContext returns an object with 2 values: special components
// { Provider, Consumer }
// Provider component wraps around children components that can have an access to the Context Object

// using Provider component of Context object to make a value available to all
// children and grandchildren by using value={} property

 