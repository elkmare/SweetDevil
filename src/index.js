import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const SERVANT = {
  header: {
    name: 'Altera Sweet Devil',
    rate: '★★★★★',
    japname: 'アルテラ•スウィート•デビル',
  },

  iden: {
    pic1: { src: 'http://i.imgur.com/TYysU4h.jpg', alt: 'SweetDevilAvatar',
    },
    values: [
      { name: 'Lv.', value: '90 / 90' },
      { name: 'ATK', value: '17.236'},
      { name: 'HP', value: '15.511'},
      { name: 'COST', value: '16'},
    ],
    pic2: {
      name: 'Bond Lv.', value: '5 / 5', src: 'http://i.imgur.com/wT0n2qj.png', alt:'SweetDevilBond'
    }
  },

  about: {
    header: 'About',
    name: 'Her True Name is Altera (アルテラ,), better known in history as Attila the Hun (アッティラ・ザ・フン). She was the overlord who established a great empire in the 5th Century. She was a warrior and king of the Huns, a tribe descending from the Xiongnu (Hunni). Leading an army of cavalry, the conquests of this great hero covered a great part of the map, controlling a vast territory spanning from Western Asia to Russia, Eastern Europe and even Gaul. It can be said that she invited the eventual collapse of the Roman Empire. Throughout her life, Altera was always in the midst of battle. Due to the terrifying acts she commited in war, she was greatly feared in all European nations as the Scourge of God (神の懲罰) and the Whip of God (神の鞭). She is a pure King of Combat (戦闘王).'
  },

  commands: {
    name: 'Command Cards',
    types: [
      'buster', 
      'buster',
      'arts',
      'arts',
      'quick',
    ]
  },

  noblePhantasm: {
    name: 'NoblePhantasm',
    type: 'buster',
    values: [
      { name: 'No Second Strike', value: '(二度目のストライクはない)'},
      { name: 'Target', value: 'All Enemies' },
      { name: 'Rank', value:'C-' },
      { name: 'lvl. 1', value: '300%' },
      { name: 'lvl. 2', value: '400%' },
      { name: 'lvl. 3', value: '450%' },
      { name: 'lvl. 4', value: '500%' },
      { name: 'lvl. 5', value: '550%' },
    ]
  },

  skills: {
    name: 'Skills',
    types: [
      {
        name: 'Active Skills',
        skills:[
          { name: 'Marksmanship', rank: 'A+' },
          { name: 'Presence Detection', rank: 'D+' },
          { name: 'Knight Tactics', rank: 'C+' },
        ],
      },
      {
        name: 'Passive Skills',
        skills: [
          { name: 'Presence Concealment', rank: 'C-' },
          { name: 'Experience Point Bonus', rank: 'B-' },
          { name: 'Cosmo Reactor', rank: 'A+' },
        ],
      },
    ],
  },

  picture: {
    reverse: {
      src: 'http://i.imgur.com/qNhI9aL.jpg',
    },
    obverse: {
      src: 'http://i.imgur.com/OWG5dxN.jpg',
    }
  }

}

ReactDOM.render(<App servant={SERVANT} />, document.getElementById('root'));
registerServiceWorker();
