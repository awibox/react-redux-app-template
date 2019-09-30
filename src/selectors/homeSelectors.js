import { createSelector } from 'reselect';
// selector
const getHomeName = (state) => state.homeState.home.name;
const getHomeDescription = (state) => state.homeState.home.description;
const getHomeUrl = (state) => state.homeState.home.html_url;
// reselect function
export const getHomeSelector = createSelector(
  [getHomeName, getHomeDescription, getHomeUrl],
  (homeName, homeDescription, homeUrl) => ({
    name: homeName,
    description: homeDescription,
    url: homeUrl,
  }),
);

export default getHomeSelector;
