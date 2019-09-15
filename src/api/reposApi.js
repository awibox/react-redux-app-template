import axios from 'axios';
import store from '../store';
import { getReposSuccess} from '../actions/reposActions';

export function getRepos() {
    return axios.get('https://api.github.com/users/awibox/repos')
        .then(response => {
            store.dispatch(getReposSuccess(response.data));
            return response;
        });
}
