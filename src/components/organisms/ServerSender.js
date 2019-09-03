import Dialog from '@material-ui/core/Dialog/Dialog';
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import { Loader } from 'react-loaders';
import PropTypes from 'prop-types';
import 'loaders.css';
import { useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';

const ServerSender = ({ open }) => {
    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;
    const handleClose = event => {
        console.log(event, 'closing');
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="sending-to-server-dialog" open={open}>
            <DialogTitle id="sending-to-server-dialog-title">Sending to server</DialogTitle>
            <Box padding={'20px'}>
                <center>
                    <Loader type={'line-scale'} active color={primaryColor} />
                </center>
            </Box>
        </Dialog>
    );
};

ServerSender.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default ServerSender;
