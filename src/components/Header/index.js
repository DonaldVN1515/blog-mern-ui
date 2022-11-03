import React from 'react';
import { Typography } from '@mui/material';

export default function Header() {
	return (
		<Typography
			variant='h4'
			align='center'
			className=''
			sx={{
				backgroundColor: '#00adb5',
				color: 'white',
				marginBottom: 20,
				fontWeight: 'lighter',
				padding: '5px 0',
			}}
		>
			Blog | DonaldVN
		</Typography>
	);
}
