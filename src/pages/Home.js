import React from 'react';
import { Container, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import Posts from '../components/Posts';
import { showModal } from '../redux/actions';
import PostModal from '../components/PostModal';

export default function Home() {
	const dispatch = useDispatch();

	const openPostModal = React.useCallback(() => {
		dispatch(showModal());
	}, [dispatch]);

	return (
		<Container maxWidth='lg' className=''>
			<Header />

			<Posts />

			<PostModal />
			<Fab
				color='primary'
				sx={{
					position: 'fixed',
					bottom: 20,
					right: 20,
				}}
				onClick={openPostModal}
			>
				<Add />
			</Fab>
		</Container>
	);
}
