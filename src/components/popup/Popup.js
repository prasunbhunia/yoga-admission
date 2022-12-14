import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
    '& .MuiPaper-root': {
        margin: 'opx 32px',
    },
    dialogWrapper: {
        padding: '16px',
        position: 'absolute',
        top: '0px',
        width: '1100px',
    },
    dialogTitle: {
        paddingRight: '0px'
    }
})

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth='md' classes={{ paper: classes.dialogWrapper }} id='save'>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Button color="secondary" onClick={()=>{setOpenPopup(false)}}><CloseIcon /></Button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
