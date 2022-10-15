import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import store from '../redux/configureStore';
import NewsBody from '../components/NewsBody';

describe('Render components', () => {
  test('render navbar', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Header /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render homePage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><NewsBody /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
