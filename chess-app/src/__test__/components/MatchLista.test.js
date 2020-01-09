import React from 'react';
import { mount } from 'c:/Users/Ricardo L Soriano/EC_UTBILDNING/period_1_varen_2020/labb/mandatory-agile-scrum-js/chess-appnode_modules/@types/enzyme/index';
import MatchLista from '../../components/MatchLista';

describe('<MatchLista />', () => {
  test('rendering component MatchLista', () => {
    const matchlista = mount(<MatchLista />);
    // vi testa om component är monterad i variable på riktig.
    expect(matchlista.length).toEqual(1);
  });
});

//c:/Users/Ricardo L Soriano/EC_UTBILDNING/period_1_varen_2020/labb/mandatory-agile-scrum-js/chess-appnode_modules/@types/enzyme/index"
