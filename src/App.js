import React from 'react';
// import { connect, useDispatch } from 'react-redux';

import Home from './pages/Home';

import * as action from './redux/actions';

function App() {
	// TEST
	// const dispatch = useDispatch();

	// dispatch(action.getPosts.getPostsRequest());

	return <Home />;
}

export default App;

// connect(mapState, mapDispatch)App();
