import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import HomeInfo from 'components/HomeInfo/HomeInfo';
import { Alert } from 'tigerspack';
import { Map } from 'immutable';
import { getHomeSuccess } from 'actions/homeActions';
import HomeContainer from './Home';

describe('Home', () => {
  const mockData = Map({
    name: 'Finder',
    description: 'Search engine',
    html_url: 'http://localhost:8888/url',
  });
  const initialState = {
    homeState: {
      home: mockData,
    },
    errors: {
      message: 'Fake error',
    },
    load: {
      isLoading: false,
    },
    getHomeAction: () => {},
  };
  const mockStore = configureStore([thunk]);
  let store; let
    container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(<Provider store={store}>
      <HomeContainer getHomeAction={initialState.getHomeAction}/>
    </Provider>);
  });
  it('should render corectly', () => {
    expect(container).toMatchSnapshot();
  });
  it('should render the container', () => {
    expect(container.length).toEqual(1);
  });
  it('should matches with initialState in the HomeInfo', () => {
    expect(container.find(HomeInfo).prop('home')).toEqual(mockData);
  });
  it('should display Alert', () => {
    expect(container.find(Alert)).toExist();
  });
  it('should check prop Alert', () => {
    expect(container.find(Alert).prop('children')).toEqual(initialState.errors.message);
  });
  it('should action on dispatching', () => {
    store.dispatch(getHomeSuccess(mockData));
    const action = store.getActions();
    expect(action[0].type).toBe('GET_HOME_SUCCESS');
    expect(action[0].payload).toEqual(mockData);
    container.unmount();
  });
});
