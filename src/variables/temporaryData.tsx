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
    id: '0',
    imageUrl: 'https://ghashtag.s3.eu-west-1.amazonaws.com/Cover+1x1.png',
    name: "999 Kingdom Phangan party for Women's Day",
    tags: [
      '8March',
      'kohPhangan',
      '999NFT',
      'blueramakohphangan',
      'openSea',
      'phanganparty',
    ],
    startData: 1678291680000,
    endData: 1678302680000,
    geoPosition: 'Phangan island',
    price: 2500,
    tickets: 2,
    currencySymbols: 'ZLT',
    description: `999 Kingdom, ruled by 999 NFT owners who depict unique marriage palaces. The first 9 palaces will be minted on March 8 in honor of International Women’s Day and will be available on the OpenSea marketplace. Join this unique project that combines art and new technologies and immerse yourself in the world of fairy tales.

Women's Day:
An exclusive event dedicated to the International Women's Day with a female composition of DJs and musicians from different countries, bringing together the most beautiful people of the island.
    
Metaverse Presentation:
A unique opportunity to learn about the latest technologies and innovations in digital art, including the DAO 999 NFT metaverse.
https://dao999nft.com
    
Party:
The event will take place in the prestigious Blurama club with exceptional sound quality, with the added bonus of a live broadcast of the celebration of the opening of the Far Far Away Kingdom to the whole world.
    
Dress code:
The dress code for the event is white and pastel pink.
    
➵ Line Up:
    
15:00 - @katrinalil.dj 
16:00 - @kayaa_ko 
17:00 - @playra 
18:00 - @lorensiya 
19:30 - @dj_makosha 
21:00 - @karin.stepaniuk 
22:30 - @eva_toya 
    
NFT Collection @999kigdomnft
Promo @mns.audio @cmmnt77 @ghashtag @ghashtagapp 

↡ ↡ ↡ ↡ ↡ ↡
➵ Tickets:
Women all day free with repost in Instagram
Men are free until 15:00
Early birds - 600 THB total of 30 tickets
With poster repost 500 THB
On the door - 1000 THB
Table reservation +66 92 424 6439`,
  },
  {
    id: '1',
    name: '"RISE" ECSTATIC DANCE @ PYRAMID W/ SANDESH & FRIENDS',
    tags: [],
    startData: 1836575410,
    endData: 1672947919,
    geoPosition: 'Pyramid Yoga Center',
    price: 500,
    tickets: 3,
    currencySymbols: 'ZLT',
    imageUrl:
      'https://phangan.events/wp-content/uploads/2023/03/22921_image_334421693_5712143218911055_2333167598250872206_n-300x157.jpg',
  },
  {
    id: '2',
    name: 'THE SUNDAY SESSION',
    tags: [],
    price: 1,
    currencySymbols: 'ZLT',
    startData: 1066608715,
    tickets: 1,
    endData: 1836575410,
    geoPosition: 'Bambu Huts, Haad Yuan, Ko Phangan',
    imageUrl:
      'https://phangan.events/wp-content/uploads/2023/01/329745488_573991184785724_8447220520983996798_n-1-300x169.jpeg',
  },
  {
    id: '3',
    name: 'FUNKY SOULFUL SUNSET W/ NOWANANDA - SUNDAY @ KAIF',
    tags: [],
    price: 1,
    currencySymbols: 'ZLT',
    startData: 1845245027,
    endData: 1363965191,
    tickets: 0,
    geoPosition: 'KAIF',
    imageUrl:
      'https://phangan.events/wp-content/uploads/2023/03/22916_image_330475208_160728186772387_2935044204381969968_n-300x150.jpg',
  },
  {
    id: '4',
    name: 'MAR. 05 SUNDAY BEACH GROOVES WITH AYAVI & PATRICK MCCREAGOR',
    tags: [],
    price: 1,
    currencySymbols: 'ZLT',
    startData: 1710507435,
    endData: 1710907435,
    tickets: 0,
    geoPosition: 'Amara Beach Resort',
    imageUrl:
      'https://phangan.events/wp-content/uploads/2023/03/22918_image_334259602_929532264870036_407834172929074817_n-212x300.jpg',
  },
  {
    id: '5',
    name: 'SENSUAL CHOCOLATE AWARENESS',
    tags: [],
    price: 2300,
    currencySymbols: 'ZLT',
    startData: 1262177088,
    endData: 1449452932,
    tickets: 5,
    geoPosition: 'Samma Karuna',
    imageUrl:
      'https://phangan.events/wp-content/uploads/2023/01/20353_image_321435774_853992949081917_4191167280549069456_n-300x169.jpg',
  },
  {
    id: '6',
    name: '💠 Sunday Sessions: SAMOTAREV + STRETCH',
    tags: [],
    price: 1,
    currencySymbols: 'ZLT',
    startData: 1301231421,
    endData: 1514295824,
    tickets: 0,
    geoPosition: 'Chill Up Koh Phangan',
    imageUrl:
      'https://phangan.events/wp-content/uploads/2023/02/22733_image_332519269_1628244057636908_6289305796911057743_n-300x169.jpg',
  },
].reverse();
export const votingCardsData = [
  {
    status: 'passed',
    orderNumber: '465',
    title: 'Increase Signed Blocks Window',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1676804400,
    depositEnd: 1677074400,
    dateStart: 2676804400,
    dateEnd: 1676840400,
  },
  {
    status: 'rejected',
    orderNumber: '342',
    title: 'Stacking Param Change',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1676656800,
    depositEnd: 1676822400,
    dateEnd: 1676743200,
    dateStart: 1676656800,
  },
  {
    status: 'rejected',
    orderNumber: '526',
    title: 'Minimum commisison rate 5%',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 1676822400,
    depositEnd: 1676196000,
    dateEnd: 1676833200,
    dateStart: 1676822400,
  },
  {
    status: 'passed',
    orderNumber: '153',
    title: 'La sosison de bulochka',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 373475628,
    depositEnd: 57574,
    dateEnd: 286385694,
    dateStart: 385764637,
  },
  {
    status: 'passed',
    orderNumber: '746',
    title: 'One more chance',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 373475628,
    depositEnd: 57574,
    dateEnd: 286385694,
    dateStart: 385764637,
  },
  {
    status: 'passed',
    orderNumber: '111',
    title: 'Buying lot in AccessPassWorld',
    description:
      'Just testing, no need to vote by validators. You can do it, if you want :)',
    createdAt: 373475628,
    depositEnd: 57574,
    dateEnd: 286385694,
    dateStart: 385764637,
  },
];
