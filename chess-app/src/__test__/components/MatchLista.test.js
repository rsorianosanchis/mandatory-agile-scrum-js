import React from 'react';
import { mount } from 'enzyme-adapter-react-16';
import MatchLista from '../../components/MatchLista';

describe('<MatchLista />', () => {
  test('test mount component MatchLista', () => {
    const matchlista = mount(<MatchLista />);
    // vi testa om component är monterad i variable matchlista på riktig.
    expect(matchlista.length).toEqual(1);
  });

  test('test render component throw title', () => {
    expect(matchlista.find('.lista').text()).toEqual('List of Games');
  });
});

//c:/Users/Ricardo L Soriano/EC_UTBILDNING/period_1_varen_2020/labb/mandatory-agile-scrum-js/chess-appnode_modules/@types/enzyme/index"
