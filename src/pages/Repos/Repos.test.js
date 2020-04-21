import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ReposCard from 'components/ReposCard/ReposCard';
import { Alert } from 'tigerspack';
import { List } from 'immutable';
import { getReposSuccess } from 'actions/reposActions';
import ReposContainer from './Repos';

describe('Repos', () => {
  const mockData = {
    html_url: 'http://localhost:8888/item',
    name: 'First Repo',
    description: 'Repository',
    language: 'javascript',
    id: 1,
    size: 10,
    stargazers_count: 10,
  };
  const initialState = {
    reposState: {
      repos: List([
        mockData,
      ]),
    },
    errors: {
      message: 'Fake error',
    },
    load: {
      isLoading: false,
    },
    match: {
      params: {
        user: 'test',
      },
    },
    getReposAction: () => {},
  };
  const mockStore = configureStore([thunk]);
  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(<Provider store={store}>
      <Router>
        <ReposContainer getReposAction={initialState.getReposAction} match={initialState.match}/>
      </Router>
    </Provider>);
  });
  it('should render coorectly', () => {
    expect(container).toMatchSnapshot();
  });
  it('should render the container', () => {
    expect(container.length).toEqual(1);
  });
  it('should matches with initialState in the ReposCard', () => {
    expect(container.find(ReposCard).at(0).prop('repo')).toEqual(mockData);
  });
  it('should display Alert', () => {
    expect(container.find(Alert)).toExist();
  });
  it('should check prop Alert', () => {
    expect(container.find(Alert).prop('children')).toEqual(initialState.errors.message);
  });
  it('should action on dispatching', () => {
    store.dispatch(getReposSuccess(mockData));
    const action = store.getActions();
    expect(action[0].type).toBe('GET_REPOS_SUCCESS');
    expect(action[0].payload).toEqual(mockData);
    container.unmount();
  });
});
