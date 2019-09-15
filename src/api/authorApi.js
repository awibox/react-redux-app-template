import axios from 'axios';
import store from '../store';
import { getAuthorSuccess} from '../actions/authorActions';

export function getAuthor() {
    return axios.get('https://api.github.com/users/awibox')
        .then(response => {
            store.dispatch(getAuthorSuccess(response.data));
            return response;
        });
}
