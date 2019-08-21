import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import Hidden from '@material-ui/core/Hidden/Hidden';

import NavigationStepper from '../molecules/NavigationStepper';
import { getStepsList, getStepsTexts } from '../../redux/selectors/stepsSelectors';
import { APP_TITLE, OF_TEXT, STEP_TEXT } from '../../EN_Texts';

const Stepper = ({ history }) => {
    const steps = useSelector(getStepsList);
    const stepTexts = useSelector(getStepsTexts);
    const activeStep = steps.find(step => step.route === history.location.pathname).index; //useSelector(getActiveIndex);

    return (
        <Grid container>
            <Hidden smDown>
                <Grid className={'hidden-xs'} item sm={1} float={'left'}>
                    <Box padding={'26px'}>{APP_TITLE}</Box>
                </Grid>
            </Hidden>
            <Grid item sm={12} md={10}>
                <NavigationStepper activeStep={activeStep} steps={stepTexts} />
            </Grid>
            <Hidden smDown>
                <Grid item sm={1}>
                    <Box padding={'26px'} textAlign={'right'}>
                        {STEP_TEXT} {activeStep} {OF_TEXT} {stepTexts.length}
                    </Box>
                </Grid>
            </Hidden>
        </Grid>
    );
};

Stepper.propTypes = {
    history: PropTypes.object,
};
export default withRouter(Stepper);
