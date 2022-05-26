
export interface UserProps {
  id: string | number;
  name: string;
  avatar: {
    uri: string;
  };
  wallet: number;
  userName: string;
}
export interface SellerItemProps {
  isFollowing: boolean;
  id: string | number;
  name: string;
  avatar: {
    uri: string;
  };
  wallet: number;
  userName: string;
  soldItems: number;
}
export interface BidProps {
  id: string | number;
  user: UserProps;
  bid: number;
  createAt: Date;
}
export interface NftProps {
  id: string | number;
  name?: string;
  image: {uri: string};
  userOwner: UserProps;
  price: number;
}
export interface FeatureNftItemProps {
  id: number | string;
  title: string;
  user: UserProps;
  status: STATUS_NFT;
  // use TimeStamp number
  timeStart: Date | number;
  timeEnd: Date | number;
  bidList: BidProps[];
  nft: NftProps;
  describe?: string;
}
export interface NotificationItemProps {
  id: number | string;
  user: UserProps;
  type: TYPE_NOTIFICATION;
  data: {
    title?: string;
    target?: string;
    bid?: number;
    nft?: {uri: string};
  };
  createAt: Date;
}
export interface Action {
  title?: string;
  type: 'capture' | 'library';
  options: any
}
export interface CollectionItemProps {
  id: number | string;
  title: string;
  collections: NftProps[];
}
export enum TYPE_NOTIFICATION {
  FOLLOW = 'Follow',
  BID = 'Bid',
  LIKE = 'Like',
}

export enum EKeyAsyncStorage {
  theme = 'theme',
  intro = 'intro',
}
export enum TYPE_MODAL {
  Success = 'Success',
  Fail = 'Fail',
}
export enum STATUS_NFT {
  ON_AUCTION = 'ON AUCTION',
  ENDING = 'ENDING',
  SOLD = 'SOLD',
}
export enum RESULT_TYPE {
  NFTs = 'NFTs',
  Personal = 'Personal',
  TopSeller = 'Top Seller',
}
export enum Animation_Types_Enum {
  SlideTop,
  SlideBottom,
  SlideInRight,
  SlideInLeft,
}
