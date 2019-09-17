import axios from 'axios';
import store from '../store';
import { getHomeSuccess, getHomeReleases} from '../actions/homeActions';

export function getHome() {
    console.log('getHome сработал');
    return axios.get('https://api.github.com/repos/BEM-builder/react-app-starter-kit')
        .then(response => {
            console.log(response);
            store.dispatch(getHomeSuccess(response.data));
            return response;
        });
}
export function getReleases() {
    console.log('getReleases сработал');
    return axios.get('https://api.github.com/repos/BEM-builder/react-app-starter-kit/releases')
        .then(response => {
            console.log(response);
            store.dispatch(getHomeReleases(response.data));
            return response;
        });
}
