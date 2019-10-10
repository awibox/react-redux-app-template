import { createSelector } from 'reselect';
// selector
const getLoadStatusState = (state) => state.load.isLoading;
// reselect function
export const getLoadStatusSelector = createSelector(
  [getLoadStatusState],
  (isLoading) => isLoading,
);

export default getLoadStatusSelector;
