import { Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import * as actions from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';

export default function Posts() {
	const dispatch = useDispatch();
	const posts = useSelector(postsState$);

	// console.log('[PostList - posts', posts);

	React.useEffect(() => {
		dispatch(actions.getPosts.getPostsRequest());
	}, [dispatch]);

	return (
		<Grid container spacing={2} alignItems='stretch'>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={6}>
					<Post post={post} />
				</Grid>
			))}
		</Grid>
	);
}
