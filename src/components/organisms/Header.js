import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const Header = ({ logo }) => {
    return <Paper padding={'10px'}>{logo && <img alt={'logo'} src={logo} style={{ width: '200px', margin: '6px 20px' }} />}</Paper>;
};
Header.propTypes = {
    logo: PropTypes.string,
}
export default Header;
