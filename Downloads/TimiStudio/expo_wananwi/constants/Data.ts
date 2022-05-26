import {Images} from 'assets/images';
import {
  BidProps,
  CollectionItemProps,
  FeatureNftItemProps,
  NftProps,
  NotificationItemProps,
  RESULT_TYPE,
  STATUS_NFT,
  TYPE_NOTIFICATION,
  UserProps,
} from './Types';

export const DATA_TOP_SELLER: UserProps[] = [
  {
    id: 0,
    name: 'Johness Damemon',
    userName: 'weibbo_gaming',
    avatar: Images.avatar_1,
    wallet: 129.234,
  },
  {
    id: 1,
    name: 'Lovita Grulturaty',
    userName: 'reul.tin',
    avatar: Images.avatar_2,
    wallet: 371.932,
  },
  {
    id: 2,
    name: 'Wikimiedia Loiyu',
    userName: 'bamo_09',
    avatar: Images.avatar_4,
    wallet: 341.456,
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    userName: 'niko_12',
    avatar: Images.avatar_3,
    wallet: 312.421,
  },
];

export const DATA_USER: UserProps[] = [
  {
    id: 0,
    name: 'Johness Damemon',
    userName: 'weibbo_gaming',
    avatar: Images.avatar_1,
    wallet: 129.234,
  },
  {
    id: 1,
    name: 'Lovita Grulturaty',
    userName: 'reul.tin',
    avatar: Images.avatar_2,
    wallet: 371.932,
  },
  {
    id: 2,
    name: 'Wikimiedia Loiyu',
    userName: 'bamo_09',
    avatar: Images.avatar_4,
    wallet: 341.456,
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    userName: 'zang.sell',
    avatar: Images.avatar_1,
    wallet: 312.421,
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    userName: 'kovac.niko',
    avatar: Images.avatar_2,
    wallet: 312.421,
  },
  {
    id: 5,
    name: 'Jenny Wilson',
    userName: 'shang.chi',
    avatar: Images.avatar_3,
    wallet: 312.421,
  },
  {
    id: 6,
    name: 'Jenny Wilson',
    userName: 'Sibaa',
    avatar: Images.avatar_4,
    wallet: 312.421,
  },
  {
    id: 7,
    name: 'Jenny Wilson',
    userName: 'wi.099',
    avatar: Images.avatar_3,
    wallet: 312.421,
  },
  {
    id: 8,
    name: 'Jenny Wilson',
    userName: 'zang.wuang',
    avatar: Images.avatar_4,
    wallet: 312.421,
  },
];

export const DATA_NFTS: NftProps[] = [
  {
    image: Images.nft_1,
    id: 'nft_1',
    userOwner: DATA_USER[1],
    price: 1.1234,
    name: 'Bessie Cooper',
  },
  {
    image: Images.nft_2,
    id: 'nft_2',
    userOwner: DATA_USER[2],
    price: 7.234,
    name: 'Robert Fox',
  },
  {
    image: Images.nft_3,
    id: 'nft_3',
    userOwner: DATA_USER[3],
    price: 2.034,
    name: 'Kristin Watson',
  },
  {
    image: Images.nft_4,
    id: 'nft_4',
    userOwner: DATA_USER[4],
    price: 5.423,
    name: 'Theresa Webb',
  },
  {
    image: Images.nft_5,
    id: 'nft_5',
    userOwner: DATA_USER[5],
    price: 1.423,
    name: 'Annette Black',
  },
  {
    image: Images.nft_6,
    id: 'nft_6',
    userOwner: DATA_USER[6],
    price: 3.423,
    name: 'Jane Cooper',
  },
  {
    image: Images.nft_7,
    id: 'nft_7',
    userOwner: DATA_USER[7],
    price: 1.423,
    name: 'Robbie Cooper',
  },
  {
    image: Images.nft_8,
    id: 'nft_8',
    userOwner: DATA_USER[8],
    price: 9.423,
    name: 'Chopper Cooper',
  },
];

export const DATA_FEATURE_NFT: FeatureNftItemProps[] = [
  {
    id: 'nfts_3',
    title: 'Bored Ape Yacht Club',
    user: DATA_USER[1],
    status: STATUS_NFT.ON_AUCTION,
    describe:
      'NFTs are currently taking the digital art and collectibles world by storm',
    timeStart: new Date(),
    timeEnd: new Date().getTime() + 18000000,
    bidList: [
      {
        id: 1,
        user: DATA_USER[0],
        bid: 2.3456,
        createAt: new Date(),
      },
      {
        id: 1,
        user: DATA_USER[2],
        bid: 3.3456,
        createAt: new Date(),
      },
    ],
    nft: {
      image: Images.nft_1,
      id: 'nft_1',
      userOwner: DATA_USER[8],
      price: 1.234,
    },
  },
  {
    id: 'nfts_2',
    title: 'Kibatsu Mecha',
    user: DATA_USER[1],
    status: STATUS_NFT.ENDING,
    timeStart: new Date(),
    describe:
      'NFTs are currently taking the digital art and collectibles world by storm',
    timeEnd: new Date(),
    bidList: [
      {
        id: 1,
        user: DATA_USER[0],
        bid: 2.3456,
        createAt: new Date(),
      },
      {
        id: 1,
        user: DATA_USER[0],
        bid: 3.3456,
        createAt: new Date(),
      },
    ],
    nft: {
      image: Images.nft_2,
      id: 'nft_1',
      userOwner: DATA_USER[3],
      price: 7.177,
    },
  },
  {
    id: 'nfts_4',
    title: 'Metroverse Genesis',
    user: DATA_USER[1],
    status: STATUS_NFT.SOLD,
    timeStart: new Date(),
    describe:
      'NFTs are currently taking the digital art and collectibles world by storm',
    timeEnd: new Date(),
    bidList: [
      {
        id: 1,
        user: DATA_USER[5],
        bid: 2.3456,
        createAt: new Date(),
      },
      {
        id: 1,
        user: DATA_USER[2],
        bid: 3.3456,
        createAt: new Date(),
      },
    ],
    nft: {
      image: Images.nft_3,
      id: 'nft_1',
      userOwner: DATA_USER[6],
      price: 2.424,
    },
  },
];
export const DATA_BEST_COLLECTION: CollectionItemProps[] = [
  {
    id: '1',
    title: 'Helium 3 - MASK BABY 🔥',
    collections: [
      DATA_NFTS[0],
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
  {
    id: '2',
    title: 'Bored Ape Chemistr 🏀',
    collections: [
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
];
export const DATA_COLLECTION: CollectionItemProps[] = [
  {
    id: '1',
    title: 'Helium 3 - MASK BABY 🔥',
    collections: [
      {
        image: Images.nft_9,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {
        image: Images.nft_10,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
  {
    id: '2',
    title: 'Bored Ape Chemistr 🏀',
    collections: [
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
  {
    id: '3',
    title: 'Bored Ape Chemistr 🏀',
    collections: [
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
];
export const DATA_SEARCH = [
  {id: 1, type: RESULT_TYPE.Personal, user: DATA_USER[0]},
  {id: 2, type: RESULT_TYPE.Personal, user: DATA_USER[1]},
  {id: 3, type: RESULT_TYPE.NFTs, results: 124},
  {id: 6, type: RESULT_TYPE.Personal, user: DATA_USER[2]},
  {id: 4, type: RESULT_TYPE.Personal, user: DATA_USER[3]},
  {id: 5, type: RESULT_TYPE.TopSeller, results: 145},
];
export const DATA_NFT: FeatureNftItemProps[] = [
  {
    id: 'nfts_3',
    title: 'Bored Ape Yacht Club',
    user: DATA_USER[1],
    status: STATUS_NFT.ON_AUCTION,

    timeStart: new Date(),
    // 5hour=18000000
    timeEnd: new Date().getTime() + 18000000,
    bidList: [
      {
        id: 1,
        user: DATA_USER[0],
        bid: 2.3456,
        createAt: new Date(),
      },
      {
        id: 1,
        user: DATA_USER[0],
        bid: 3.3456,
        createAt: new Date(),
      },
    ],
    nft: {
      image: Images.nft_11,
      id: 'nft_1',
      userOwner: DATA_USER[8],
      price: 1.234,
    },
  },
  {
    id: 'nfts_3',
    title: 'Kibatsua Mecha',
    user: DATA_USER[1],
    status: STATUS_NFT.ON_AUCTION,

    timeStart: new Date(),
    // 5hour=18000000
    timeEnd: new Date().getTime() + 18000000,
    bidList: [
      {
        id: 1,
        user: DATA_USER[0],
        bid: 2.3456,
        createAt: new Date(),
      },
      {
        id: 1,
        user: DATA_USER[0],
        bid: 3.3456,
        createAt: new Date(),
      },
    ],
    nft: {
      image: Images.nft_1,
      id: 'nft_1',
      userOwner: DATA_USER[8],
      price: 1.234,
    },
  },
  {
    id: 'nfts_3',
    title: 'Metroverse Genesis',
    user: DATA_USER[1],
    status: STATUS_NFT.ON_AUCTION,

    timeStart: new Date(),
    // 5hour=18000000
    timeEnd: new Date().getTime() + 18000000,
    bidList: [
      {
        id: 1,
        user: DATA_USER[0],
        bid: 2.3456,
        createAt: new Date(),
      },
      {
        id: 1,
        user: DATA_USER[0],
        bid: 3.3456,
        createAt: new Date(),
      },
    ],
    nft: {
      image: Images.nft_3,
      id: 'nft_1',
      userOwner: DATA_USER[8],
      price: 1.234,
    },
  },
];
export const DATA_BID: BidProps[] = [
  {
    id: '1',
    bid: 0.2441,
    createAt: new Date(),
    user: DATA_USER[4],
  },
  {
    id: '2',
    bid: 0.2121,
    createAt: new Date(),
    user: DATA_USER[5],
  },
  {
    id: '3',
    bid: 0.1441,
    createAt: new Date(),
    user: DATA_USER[2],
  },
  {
    id: '4',
    bid: 0.3441,
    createAt: new Date(),
    user: DATA_USER[3],
  },
  {
    id: '5',
    bid: 0.0441,
    createAt: new Date(),
    user: DATA_USER[7],
  },
];
export const DATA_EXPLORE_PROFILE = [
  {
    id: 0,
    user: DATA_USER[0],
    isFollowing: false,
    nft: Images.profile_nft_1,
  },
  {
    id: 1,
    user: DATA_USER[1],
    isFollowing: false,
    nft: Images.profile_nft_2,
  },
  {
    id: 4,
    user: DATA_USER[2],
    isFollowing: true,
    nft: Images.profile_nft_3,
  },
  {
    id: 6,
    user: DATA_USER[7],
    isFollowing: false,
    nft: Images.profile_nft_4,
  },
];
export const DATA_NEW: NotificationItemProps[] = [
  {
    id: 0,
    user: DATA_USER[0],
    type: TYPE_NOTIFICATION.FOLLOW,
    data: {
      title: 'follows your collections',
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 1,
    user: DATA_USER[1],
    type: TYPE_NOTIFICATION.LIKE,
    data: {
      title: 'likes post',
      target: '“Are U A Believer”',
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 2,
    user: DATA_USER[2],
    type: TYPE_NOTIFICATION.BID,
    data: {
      target: '“Are U A Believer”',
      bid: 0.15,
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
];
export const DATA_THIS_WEEK: NotificationItemProps[] = [
  {
    id: 0,
    user: DATA_USER[0],
    type: TYPE_NOTIFICATION.FOLLOW,
    data: {
      title: 'follows your collections',
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 1,
    user: DATA_USER[1],
    type: TYPE_NOTIFICATION.LIKE,
    data: {
      title: 'likes post',
      target: '“Are U A Believer”',
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 2,
    user: DATA_USER[2],
    type: TYPE_NOTIFICATION.BID,
    data: {
      target: '“Are U A Believer”',
      bid: 0.15,
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 3,
    user: DATA_USER[3],
    type: TYPE_NOTIFICATION.LIKE,
    data: {
      title: 'likes post',
      target: '“Are U A Believer”',
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 4,
    user: DATA_USER[5],
    type: TYPE_NOTIFICATION.LIKE,
    data: {
      title: 'likes post',
      target: '“Are U A Believer”',
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 5,
    user: DATA_USER[5],
    type: TYPE_NOTIFICATION.LIKE,
    data: {
      title: 'likes post',
      target: '“Are U A Believer”',
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 6,
    user: DATA_USER[7],
    type: TYPE_NOTIFICATION.BID,
    data: {
      target: '“Are U A Believer”',
      bid: 0.25,
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
  {
    id: 7,
    user: DATA_USER[6],
    type: TYPE_NOTIFICATION.BID,
    data: {
      target: '“Are U A Believer”',
      bid: 0.45,
      nft: Images.nft_1,
    },
    createAt: new Date(1652258542000),
  },
];
export const DATA_TRENDING_COLLECTION: CollectionItemProps[] = [
  {
    id: '1',
    title: 'Helium 3 - MASK BABY 🔥',
    collections: [
      DATA_NFTS[0],
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
  {
    id: '3',
    title: 'Gutter Cat Gang',
    collections: [
      DATA_NFTS[0],
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
  {
    id: '2',
    title: 'Goopdoods by Goopdude',
    collections: [
      DATA_NFTS[0],
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
  {
    id: '6',
    title: 'CyberBrokers',
    collections: [
      DATA_NFTS[0],
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
  {
    id: '6',
    title: 'Chromie Squiggle by Snowfro',
    collections: [
      DATA_NFTS[0],
      {
        image: Images.nft_1,
        id: 'nft_1',
        userOwner: DATA_USER[8],
        price: 1.1234,
      },
      {image: Images.nft_2, id: 'nft_2', userOwner: DATA_USER[8], price: 7.234},
      {image: Images.nft_3, id: 'nft_3', userOwner: DATA_USER[8], price: 2.034},
      {image: Images.nft_4, id: 'nft_4', userOwner: DATA_USER[8], price: 5.423},
      {image: Images.nft_5, id: 'nft_5', userOwner: DATA_USER[8], price: 1.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
      {image: Images.nft_8, id: 'nft_8', userOwner: DATA_USER[8], price: 9.423},
    ],
  },
];
