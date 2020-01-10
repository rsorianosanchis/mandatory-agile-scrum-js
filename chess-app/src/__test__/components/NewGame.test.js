import React from 'react';
import { mount } from 'enzyme-adapter-react-16';
import NewGame from '../../components/NewGame';

describe('<MatchLista />', () => {
  const newgame = mount(<NewGame />);
  test('test mount component NewGame', () => {
    // vi testa om component är monterad i variable matchlista på riktig.
    expect(newgame.length).toEqual(1);
  });

  test('test render component throw label', () => {
    expect(newgame.find('.label').text()).toEqual('Spelare 1');
  });
});
