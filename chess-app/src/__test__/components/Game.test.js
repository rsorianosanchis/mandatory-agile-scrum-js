import React from 'react';
import { mount } from 'enzyme-adapter-react-16';
import Game from '../../components/Game.js';

describe('<Game />', () => {
  const game = mount(<Game />);
  test('test mount component Game', () => {
    expect(game.length).toEqual(1);
  });

  test('test render component throw button text', () => {
    expect(game.find('.btn').text()).toEqual('Acceptera Spel');
  });
});
