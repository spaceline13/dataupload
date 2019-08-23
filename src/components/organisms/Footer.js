import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box/Box';
import { useDispatch, useSelector } from 'react-redux';

import NextButton from '../molecules/NextButton';
import BackButton from '../molecules/BackButton';
import FinishButton from '../molecules/FinishButton';
import CancelButton from '../molecules/CancelButton';
import { getStepByRoute, getStepsList } from '../../redux/selectors/stepsSelectors';
import { setActive } from '../../redux/actions/stepsActions';

const Footer = ({history, onFinish}) => {
    const steps = useSelector(getStepsList);
    const current = useSelector(state => getStepByRoute(state, history.location.pathname));
    const back = current.index > 0 ? steps[current.index - 1] : null;
    const next = current.index < steps.length - 1 ? steps[current.index + 1] : null;
    const finish = current.index === steps.length - 2;

    const dispatch = useDispatch();
    const goBack = () => {
        history.push(back.route);
        dispatch(setActive(back.index));
    };
    const goNext = () => {
        history.push(next.route);
        dispatch(setActive(next.index));
    };
    const doCancel = () => {
        window.location.href = '/';
    };
    const doFinish = () => {
        if (onFinish) onFinish(goNext);
    };

    return (
        <Box display={'flex'} flex={'none'} padding={'16px 40px'} borderTop={'1px solid #cbd6e2'} backgroundColor={'#f5f8fa'}>
            <Box width={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
                    {back && <BackButton onClick={goBack} />}
                    <CancelButton onClick={doCancel} />
                </Box>
                {next && !finish && <NextButton onClick={goNext} />}
                {finish && <FinishButton onClick={doFinish} />}
            </Box>
        </Box>
    );
};
Footer.propTypes = {
    history: PropTypes.object,
    onFinish: PropTypes.func
};
export default withRouter(Footer);
