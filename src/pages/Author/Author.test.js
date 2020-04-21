import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import AuthorInfo from 'components/AuthorInfo/AuthorInfo';
import { Alert } from 'tigerspack';
import { Map } from 'immutable';
import { getAuthorSuccess } from 'actions/authorActions';
import AuthorContainer from './Author';

describe('Author', () => {
  const mockData = Map({
    avatar_url: 'http://localhost:8888/avatar',
    name: 'John',
    location: 'USA',
    company: 'Google',
    bio: 'Addition information',
    html_url: 'http://localhost:8888/url',
  });

  const initialState = {
    authorState: {
      author: mockData,
    },
    errors: {
      message: 'Fake error',
    },
    load: {
      isLoading: false,
    },
    getAuthorAction: () => {},
  };
  const mockStore = configureStore([thunk]);
  let store; let
    container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(<Provider store={store}>
      <AuthorContainer getAuthorAction={initialState.getAuthorAction} />
    </Provider>);
  });
  it('should render coorectly', () => {
    expect(container).toMatchSnapshot();
  });
  it('should render the container', () => {
    expect(container.length).toEqual(1);
  });
  it('should matches with initialState in the AuthorInfo', () => {
    expect(container.find(AuthorInfo).prop('author')).toEqual(mockData);
  });
  it('should display Alert', () => {
    expect(container.find(Alert)).toExist();
  });
  it('should check prop Alert', () => {
    expect(container.find(Alert).prop('children')).toEqual(initialState.errors.message);
  });
  it('should action on dispatching', () => {
    store.dispatch(getAuthorSuccess(mockData));
    const action = store.getActions();
    expect(action[0].type).toBe('GET_AUTHOR_SUCCESS');
    expect(action[0].payload).toEqual(mockData);
    container.unmount();
  });
});
