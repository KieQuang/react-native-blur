import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {EvaStatus} from '@ui-kitten/components/devsupport/typings';
import {STATUS_NFT, UserProps} from 'constants/Types';
import {ImageRequireSource, ViewStyle} from 'react-native';

export type RootStackParamList = {
  Intro: undefined;
  ConnectWallet: undefined;
  Main: NavigatorScreenParams<MainBottomTabStackParamList>;

  Notification: undefined;
  NftDetails: {type: STATUS_NFT};

  ExploreProfileDetails: {user: UserProps};
  ExploreCollectionDetails: undefined;

  ChooseCollection: undefined;
  CreateCollection: undefined;
  CreateNfts: undefined;
  FixPrice: undefined;
  PreviewCollection: undefined;

  ProfileEdit: undefined;
  ProfileSettings: undefined;

  SuccessScr: {
    successScr: SuccessScreenType;
  };
};

export type MainBottomTabStackParamList = {
  Home: undefined;
  Explore: {index: number};
  Trending: undefined;
  Profile: undefined;
};

export interface SuccessScreenType {
  image?: ImageRequireSource;
  title?: string;
  description?: string;
  children?: ButtonType[] | null;
  buttonsViewStyle?: ViewStyle;
  logo?: boolean;
}
export interface ButtonType {
  status?: EvaStatus;
  title: string;
  onPress: () => void;
}
export type ExploreScreenNavigationProp = RouteProp<
  MainBottomTabStackParamList,
  'Explore'
>;
export type ProfileDetailsScreenNavigationProp = RouteProp<
  RootStackParamList,
  'ExploreProfileDetails'
>;
export type NftDetailsScreenNavigationProp = RouteProp<
  RootStackParamList,
  'NftDetails'
>;
