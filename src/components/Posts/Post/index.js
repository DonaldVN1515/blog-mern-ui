import React from 'react';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import { Favorite, MoreVert } from '@mui/icons-material';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { updatePost } from '../../../redux/actions';
export default function Post({ post }) {
	const dispatch = useDispatch();
	const handleLike = React.useCallback(() => {
		dispatch(
			updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
		);
	}, [dispatch, post]);
	return (
		<Card>
			<CardHeader
				avatar={<Avatar>A</Avatar>}
				title={post.author}
				subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
				action={
					<IconButton>
						<MoreVert />
					</IconButton>
				}
			/>

			<CardMedia
				image={post.attachment || 'No image'}
				title={post.title}
				sx={{
					height: 150,
				}}
			/>

			<CardContent>
				<Typography variant='h5' color='textPrimary'>
					{post.title}
				</Typography>
				<Typography variant='body2' component='p' color='textSecondary'>
					{post.content}
				</Typography>
			</CardContent>

			<CardActions>
				<IconButton onClick={handleLike}>
					<Favorite />
					<Typography component='span' color='textSecondary'>
						{post.likeCount} Likes
					</Typography>
				</IconButton>
			</CardActions>
		</Card>
	);
}
