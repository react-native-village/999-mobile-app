import {TicketInfo} from 'src/types';

export const categoriesData = [
  {
    id: '0',
    title: 'All',
  },
  {
    id: '1',
    title: 'Music',
  },
  {
    id: '2',
    title: 'Festival',
  },
  {
    id: '3',
    title: 'Bootcamp',
  },
  {
    id: '4',
    title: 'Fair',
  },
  {
    id: '5',
    title: 'Geek',
  },
];

export const ticketsData: TicketInfo[] = [
  {
    id: '1',
    name: 'Groovy Tunes',
    tags: ['Rock', 'Funny'],
    startData: 1708113600000,
    endData: 1708128000000,
    geoPosition: 'Retro Mountain',
    price: 100000,
    tickets: 3,
    currencySymbols: 'ADA',
    imageUrl:
      'https://d1629ugb7moz2f.cloudfront.net/e/21162/cFPvQBjmRmwyo1PA0VR4hO572mDold5r664eQISO.jpg',
  },
  {
    id: '2',
    name: 'Space Nation',
    tags: ['Festival', 'Music'],
    price: 3645177,
    currencySymbols: 'ADA',
    startData: 1684346400000,
    endData: 1679090400000,
    tickets: 1,
    geoPosition: 'London, United Kingdom',

    imageUrl:
      'https://sun9-21.userapi.com/impg/6szHtBSxhWsTpgI6DxooVNJX5a91UnSyZ7v3IA/xyuHV-esCNk.jpg?size=1728x2160&quality=96&sign=03b666b473379e25cab2aed65755971a&type=album',
  },
  {
    id: '3',
    name: 'Gravity',
    tags: ['Fair'],
    price: 524,
    currencySymbols: 'ADA',
    startData: 1678487400000,
    endData: 1678512600000,
    tickets: 0,
    geoPosition: 'Berlin, Germany',
    imageUrl:
      'https://sun9-45.userapi.com/impg/lFGaAdWwVD-RiW4bXw4bKcnXsWv606YEtDVkVw/-bJyCbt3Y0A.jpg?size=1728x2160&quality=96&sign=2873a53d37fb2a0260ad8eeda276c385&type=album',
  },
  {
    id: '4',
    name: 'TechnoCon',
    tags: ['Geek', 'Funny'],
    price: 5.2,
    currencySymbols: 'ADA',
    startData: 1692640800000,
    endData: 1692651600000,
    tickets: 0,
    geoPosition: 'Bangkok, Tailand',
    imageUrl:
      'https://sun9-16.userapi.com/impg/IM0FOwieyY1mIZnpSCjRdTwsoDjSQKULiBA8VA/FB_BmF3zLwg.jpg?size=1920x1080&quality=96&sign=642aa11f787d1a0407227250c63d4aa0&type=album',
  },
  {
    id: '5',
    name: 'Party Box',
    tags: ['Bootcamp', 'Funny'],
    price: 1200,
    currencySymbols: 'ADA',
    startData: 1690927200000,
    endData: 1690970400000,
    tickets: 5,
    geoPosition: 'Bom, Belgium',
    imageUrl:
      'https://sun9-10.userapi.com/impg/S7lroEi5Ox84ce1k898ZQ80OcaLt7FIocaw5sg/A5Gf6lG6UaU.jpg?size=1728x2160&quality=96&sign=36306177bc52952d06692237696078d7&type=album',
  },
  {
    id: '6',
    name: 'Slow Motion',
    tags: ['Music'],
    price: 1050000,
    currencySymbols: 'ADA',
    startData: 1700593200000,
    endData: 1700604000000,
    tickets: 0,
    geoPosition: 'Paris, France',
    imageUrl:
      'https://sun9-69.userapi.com/impg/jDt0aw3j-fLKxhu7mgnxh952Cg9ZhYnZkwLjXg/2kD7PrezqUw.jpg?size=1728x2160&quality=96&sign=a473e5ca3b9375621f1db528ca69fdbd&type=album',
  },
];
export const votingCardsData = [
  {
    status: 'passed',
    orderNumber: '465',
    title: 'Increase Signed Blocks Window',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1674335097000,
    depositEnd: 1674498852000,
    dateStart: 1674381600000,
    dateEnd: 1674410400000,
  },
  {
    status: 'rejected',
    orderNumber: '342',
    title: 'Stacking Param Change',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1676735052000,
    depositEnd: 1676754781000,
    dateStart: 1676743200000,
    dateEnd: 1676746800000,
  },
  {
    status: 'rejected',
    orderNumber: '526',
    title: 'Minimum commisison rate 5%',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1676822400000,
    depositEnd: 1676841181000,
    dateEnd: 1676833200000,
    dateStart: 1676822400000,
  },
  {
    status: 'passed',
    orderNumber: '153',
    title: 'La sosison de bulochka',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1678270381000,
    depositEnd: 1678317481000,
    dateStart: 1678280400000,
    dateEnd: 1678309201000,
  },
  {
    status: 'passed',
    orderNumber: '746',
    title: 'One more chance',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1670004421000,
    depositEnd: 1670017021000,
    dateStart: 1670011201000,
    dateEnd: 1670014801000,
  },
  {
    status: 'passed',
    orderNumber: '111',
    title: 'Buying lot in AccessPassWorld',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1659972841000,
    depositEnd: 1660008961000,
    dateStart: 1659974401000,
    dateEnd: 1659992401000,
  },
];
