import createDataContext from './createDataContext';

// reducer
const postReducer = (state, action) => {
  // action is object, type is operation with that object
  switch (action.type) {
    case 'add_post':
      // adding new object into our array with the previous arrays
      return [...state, { title: `Blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

// helper function to dispatch an action object
// added little bit of fancy code here to allow helper function 
// to access dispatch, 
// passing dispatch as arg & calling dispatch from new function
const addPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_post' });
  }
  
};

// destructuring whatever createDataContext returns
// as args adding reducer, action object & initial state for this BlogContext
export const { Context, Provider } = createDataContext(
  postReducer,
  {
    addPost,
  },
  []
);
// this will give us back Context & Provider which will make all our 
// data available to other components inside our application