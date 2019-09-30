import { createSelector } from 'reselect';
// selector
const getErrorsState = (state) => state.errors;
// reselect function
export const getErrorsSelector = createSelector(
  [getErrorsState],
  (errors) => errors,
);

export default getErrorsSelector;
