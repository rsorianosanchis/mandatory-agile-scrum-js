import React from 'react';
import { mount } from 'enzyme-adapter-react-16';
import App from '../../App.js';

describe('<App />', () => {
  const app = mount(<App />);
  test('test mount component App', () => {
    expect(app.length).toEqual(1);
  });

  test('test render component throw title', () => {
    expect(app.find('.title').text()).toEqual('Chess project');
  });
});
