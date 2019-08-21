import React from 'react';
import Stepper from '@material-ui/core/Stepper/Stepper';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step/Step';
import StepLabel from '@material-ui/core/StepLabel/StepLabel';
const NavigationStepper = ({ steps, activeStep }) => {
    return (
        <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
                return (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    );
};
NavigationStepper.propTypes = {
    steps: PropTypes.array,
    activeStep: PropTypes.number,
};
export default NavigationStepper;
