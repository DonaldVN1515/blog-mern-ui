import { Button, Modal, TextareaAutosize, TextField } from '@mui/material';
import React from 'react';
import FileBase64 from 'react-file-base64';
import { useSelector, useDispatch } from 'react-redux';

import { modalState$ } from '../../redux/selectors';
import { hideModal } from '../../redux/actions';
import { createPost } from '../../redux/actions';

export default function PostModal() {
	const dispatch = useDispatch();
	const { isShow } = useSelector(modalState$);

	const [data, setData] = React.useState({
		title: '',
		content: '',
		attachment: '',
	});
	const handleClose = React.useCallback(() => {
		dispatch(hideModal);
		setData({
			title: '',
			content: '',
			attachment: '',
		});
	}, [dispatch]);

	const handleSubmit = React.useCallback(() => {
		dispatch(createPost.createPostRequest(data));
	}, [data, dispatch]);

	const body = (
		<div
			style={{
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				position: 'absolute',
				width: 400,
				backgroundColor: '#fff',
				boxShadow: '',
				padding: '40px',
			}}
		>
			<h2>Create New Post</h2>
			<form
				noValidate
				autoComplete='off'
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<TextField
					required
					label='title'
					value={data.title}
					onChange={(e) =>
						setData({
							...data,
							title: e.target.value,
						})
					}
					sx={{
						marginBottom: '10px',
					}}
				/>
				<TextareaAutosize
					minRows={10}
					maxRows={15}
					placeholde='Content...'
					value={data.content}
					onChange={(e) =>
						setData({
							...data,
							content: e.target.value,
						})
					}
					sx={{ padding: '10px', marginBottom: '10px' }}
				/>

				<FileBase64
					accept='image/*'
					multiple={false}
					type='file'
					value={data.attachment}
					onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
				/>
				<div style={{ marginTop: '10px' }}>
					<Button
						variant='contained'
						color='primary'
						component='span'
						fullWidth
						onClick={handleSubmit}
					>
						Create
					</Button>
				</div>
			</form>
		</div>
	);

	return (
		<Modal open={isShow} onClose={handleClose}>
			{body}
		</Modal>
	);
}
