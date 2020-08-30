import createDataContext from './createDataContext';

// reducer
const postReducer = (state, action) => {
  // action is object, type is operation with that object
  switch (action.type) {
    case 'delete_post':
      return state.filter((post) => post.id !== action.payload)
    case 'add_post':
      // adding new object into our array with the previous arrays
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000001),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
    default:
      return state;
  }
};

// helper function to dispatch an action object
// added little bit of fancy code here to allow helper function
// to access dispatch,
// passing dispatch as arg & calling dispatch from new function
const addPost = dispatch => {
  // call with dispatch to update state
  // args are coming from our component & pass those through dispatch func
  return (title, content, callback) => {
    dispatch({ type: 'add_post', payload: { title: title, content: content } });
    // after successfull dispatch, only then call callback
    callback();
  };
};

// to delete post
const deletePost = dispatch => {
  // passin id arg from payload that we want to delete
  return (id) => {
    dispatch({ type: 'delete_post', payload: id })
  };
};

// destructuring whatever createDataContext returns
// as args adding reducer, action object & initial state for this BlogContext
export const { Context, Provider } = createDataContext(
  postReducer,
  {
    addPost,
    deletePost
  },
  []
);
// this will give us back Context & Provider which will make all our
// data available to other components inside our application
