import axios from 'axios';
import store from '../store';
import { getHomeSuccess, getHomeReleases} from '../actions/home';

export function getHome() {
    return axios.get('https://api.github.com/repos/awibox/react-redux-app-boilerplate')
        .then(response => {
            store.dispatch(getHomeSuccess(response.data));
            return response;
        });
}
export function getReleases() {
    return axios.get('https://api.github.com/repos/awibox/react-redux-app-boilerplate/releases')
        .then(response => {
            store.dispatch(getHomeReleases(response.data));
            return response;
        });
}
