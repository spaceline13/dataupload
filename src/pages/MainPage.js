import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';
import Table from '@material-ui/core/Table/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import RemoveIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

import FancyButton from '../components/atoms/FancyButton';
import LogoContentsTemplate from '../components/templates/LogoContentsTemplate';
import { getStepsList } from '../redux/selectors/stepsSelectors';
import { addFootstep } from '../redux/actions/stepsActions';

function createData(name, type, size, created) {
    return { name, type, size, created };
}

const rows = [
    createData('My first Upload', 'file', '20MB', '20/04/2018'),
    createData('My second Upload', 'file', '20MB', '20/04/2018'),
    createData('Another file', 'file', '20MB', '20/04/2018'),
    createData('My sensors', 'stream', '-', '20/04/2018'),
];

const MainPage = ({ history }) => {
    const dispatch = useDispatch();
    const steps = useSelector(getStepsList);
    return (
        <LogoContentsTemplate>
            <Box marginTop={'10vh'} />
            <Typography align={'center'} variant="h1" component="h2">
                Data Upload Tool
            </Typography>
            <Box marginTop={'8vh'} />
            <Typography align={'justify'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Box marginTop={'8vh'} />
            <center>
                <FancyButton
                    onClick={() => {
                        dispatch(addFootstep(-1));
                        history.push(steps[0].route);
                    }}>
                    <span>Add New</span>
                </FancyButton>
            </center>
            <Box marginTop={'8vh'} />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Size</TableCell>
                        <TableCell align="center">Created</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.type}</TableCell>
                            <TableCell align="center">{row.size}</TableCell>
                            <TableCell align="center">{row.created}</TableCell>
                            <TableCell align="right">
                                <Button color={'primary'} variant={'contained'}>
                                    <RemoveIcon color={'secondary.light'} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Box marginTop={'6vh'} />
        </LogoContentsTemplate>
    );
};

MainPage.propTypes = {
    history: PropTypes.object,
};
export default MainPage;
