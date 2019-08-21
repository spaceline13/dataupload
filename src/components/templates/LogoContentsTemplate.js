import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';

import Header from '../organisms/Header';

const LogoContentsTemplate = ({ children }) => (
    <Box display={'flex'} flexDirection={'column'} height={'100%'} overflow={'hidden'}>
        <Box flex={'0 0 auto'}>
            <Header />
        </Box>
        <Box flex={'1 1 auto'} overflow={'auto'}>
            <Container>{children}</Container>
        </Box>
    </Box>
);
LogoContentsTemplate.propTypes = {
    children: PropTypes.array,
};

export default LogoContentsTemplate;
