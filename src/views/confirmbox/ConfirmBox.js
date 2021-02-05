import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, {useEffect} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const ConfirmBox = ({dialog, onClose, result}) => {
    const [open, setOpen] = React.useState(dialog);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };
    useEffect(() => {
        setOpen(dialog);
    }, [dialog]);

    const handleClose = () => {
        setOpen(false);
        onClose(false);
    };
    const handleOnClick = () => {
        result('yes');
        setOpen(false);
        onClose(false);
    };
     return (
         <Dialog
             fullScreen={fullScreen}
             open={open}
             onClose={handleClose}
             aria-labelledby="responsive-dialog-title"
         >
             <DialogTitle id="responsive-dialog-title">{"Are you sure you want to delete?"}</DialogTitle>
             <DialogActions>
                 <Button autoFocus onClick={handleClose}   color="secondary">
                     Cancel
                 </Button>
                 <Button onClick={handleOnClick} color="primary" autoFocus>
                     Agree
                 </Button>
             </DialogActions>
         </Dialog>
     )
 };
export default ConfirmBox;
