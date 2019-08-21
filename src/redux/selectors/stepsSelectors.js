const getStepsState = store => store.steps;

const getStepsList = store => (getStepsState(store) ? getStepsState(store).allSteps : []);

const getStepByRoute = (store, route) => getStepsList(store).find(step => step.route === route);

const getStepsNames = store => getStepsList(store).map(step => step.name);

const getStepsTexts = store => getStepsList(store).map(step => step.text);

const getStepName = (store, step) => getStepsNames(store)[step];

const getActiveIndex = store => getStepsState(store).activeStep;

const getActiveStep = store => getStepsList(store)[getActiveIndex(store)];

export { getStepsState, getStepsList, getStepName, getActiveIndex, getActiveStep, getStepsTexts, getStepsNames, getStepByRoute };
