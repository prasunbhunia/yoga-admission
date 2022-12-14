import React, { useState } from 'react';
import { useAuth } from '../firebase/auth';
import UserForm from '../helpers/userForm';
import Popup from '../components/popup/Popup';
import { Button, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Stack } from '@mui/system';

const Dashboard = () => {
	const { user } = useAuth();
	const [openPopup, setOpenPopup] = useState(false);
	const [userdata, setuserData] = useState(null);

	return (
	<>
	{userdata ? 
	<Grid container  spacing={1} direction="row">
		<Grid xs></Grid>
		<Grid item xs={6} container>
			<Paper elevation={6}>
				<Toolbar>

				</Toolbar>
			</Paper>
		</Grid>
		<Grid xs></Grid>
	</Grid> : 
	<div>
	<Stack direction='column' sx={{ minWidth: 275, height: 600 }} justifyContent='center' alignItems='center'>
		<Typography variant="h5" component="div">You don't have a plan</Typography>
		<Button size="small" onClick={() => { setOpenPopup(true);}}>buy a plan</Button>
	</Stack>
	<Popup title="Admission Form" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <UserForm />
    </Popup>
	</div>
	}
	</>
)}

export default Dashboard