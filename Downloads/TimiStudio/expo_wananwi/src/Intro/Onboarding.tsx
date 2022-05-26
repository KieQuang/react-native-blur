import React, {memo} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {CommonActions, useNavigation} from '@react-navigation/native';
import useLayout from 'hooks/useLayout';

import Text from 'components/Text';
import Container from 'components/Container';
import {useTranslation} from 'react-i18next';
import {Images} from 'assets/images';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import Dots from './Dots';
import ButtonLinear from '../../components/ButtonLinear';
import {Icons} from 'assets/icons';
import GradientButton from 'components/GradientButton';
import {RootStackParamList} from 'navigation/types';

const Onboarding = memo(() => {
  const {dispatch} = useNavigation();
  const {height, width, top} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const {t} = useTranslation(['intro', 'common']);

  const translationX = useSharedValue(0);

  const activeIndex = useDerivedValue(() => {
    return Math.round(translationX.value / width);
  });
  const scrollRef = useAnimatedRef<ScrollView>();

  const [enable, setEnable] = React.useState(true);

  const DATA_INTRO = [
    {
      id: 1,
      title: t('intro:title_1'),
      description: t('intro:description_1'),
      image: Images.intro_1,
    },
    {
      id: 2,
      title: t('intro:title_2'),
      description: t('intro:description_2'),
      image: Images.intro_2,
    },
    {
      id: 3,
      title: t('intro:title_3'),
      description: t('intro:description_3'),
      image: Images.intro_3,
    },
    {
      id: 4,
      title: t('intro:title_4'),
      description: t('intro:description_4'),
      image: Images.intro_4,
    },
  ];
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      let x = e.contentOffset.x;
      if (x <= width * 3) {
        translationX.value = x;
      } else {
      }
    },
    onBeginDrag: e => {},
    onEndDrag: e => {},
  });
  const onIconPressNext = React.useCallback(() => {
    if (activeIndex.value === DATA_INTRO.length - 1) return;
    scrollRef.current?.scrollTo({x: width * (activeIndex.value + 1)});
  }, [activeIndex]);
  const onIconPressPrv = React.useCallback(() => {
    if (activeIndex.value > DATA_INTRO.length) return;
    scrollRef.current?.scrollTo({x: width * (activeIndex.value - 1)});
  }, [activeIndex]);

  let input = [0, width, width * 2, width * 3];
  // Show button Get Start
  const styleGetStart = useAnimatedStyle(() => {
    const transX = interpolate(translationX.value, input, [0, 0, 1, 0]);
    const zIndex = interpolate(translationX.value, input, [-10, -10, 10, -10]);

    return {
      opacity: transX,
      position: 'absolute',
      top: (278 + top) * (height / 812),
      left: 24,
      zIndex: zIndex,
    };
  }, [width, translationX.value]);
  // show button Next page
  const styleNext = useAnimatedStyle(() => {
    const zIndex = interpolate(translationX.value, input, [10, 10, -10, -10]);
    const transX = interpolate(translationX.value, input, [1, 1, 0, 0]);
    return {
      opacity: transX,
      position: 'absolute',
      top: (278 + top) * (height / 812),
      left: 24,
      zIndex: zIndex,
    };
  }, [width, translationX.value]);
  // show button Back page
  const styleBack = useAnimatedStyle(() => {
    const zIndex = interpolate(translationX.value, input, [-10, 10, 10, -10]);
    const transX = interpolate(translationX.value, input, [0, 1, 1, 0]);
    return {
      opacity: transX,
      position: 'absolute',
      top: (22 + top) * (height / 812),
      left: 24,
      zIndex: zIndex,
    };
  }, [width, translationX.value]);
  // show button Skip page
  const styleAnimated = useAnimatedStyle(() => {
    const transX = interpolate(translationX.value, input, [0, 0, 0, 1]);
    const zIndex = interpolate(translationX.value, input, [-10, -10, -10, 10]);
    return {
      opacity: transX,
      position: 'absolute',
      left: 24,
      zIndex: zIndex,
    };
  }, [width, translationX.value]);
  // show dots
  const styleDots = useAnimatedStyle(() => {
    const transX = interpolate(translationX.value, input, [1, 1, 1, 0]);
    const zIndex = interpolate(translationX.value, input, [10, 10, 10, -10]);
    return {
      opacity: transX,
      position: 'absolute',
      right: 24,
      top: top + 38,
      zIndex: zIndex,
    };
  }, [top, translationX.value]);
  const renderBackground = React.useCallback(() => {
    return (
      <ImageBackground
        source={Images.introBackground}
        style={[
          {
            position: 'absolute',
            zIndex: -100,
            top: 0,
            width: width,
            height: height,
          },
        ]}
        imageStyle={{
          width: width,
          height: height,
        }}
      />
    );
  }, [width, height]);

  const nextScreen = React.useCallback(
    (screenName: keyof RootStackParamList) => {
      const resetAction = CommonActions.reset({
        index: 1,
        routes: [
          {
            name: screenName,
          },
        ],
      });
      dispatch(resetAction);
    },
    [],
  );
  const _onStart = React.useCallback(() => {
    setEnable(false), onIconPressNext();
  }, []);
  const _onSkip = () => {
    nextScreen('Main');
  };

  const _onConnectWallet = React.useCallback(() => {
    nextScreen('ConnectWallet');
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      {/* Background */}
      {renderBackground()}
      {/* Content */}
      <Animated.ScrollView
        ref={scrollRef as any}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={width}
        scrollEnabled={enable}
        bounces={false}
        pagingEnabled={false}
        decelerationRate="fast"
        onScroll={scrollHandler}
        style={{width: width, height: height}}
        contentContainerStyle={{
          width: width * 4,
        }}>
        {DATA_INTRO.map((item, index) => {
          const input = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const style = useAnimatedStyle(() => {
            const translateX = interpolate(
              translationX.value,
              input,
              [width / 2, 0, -width / 2],
              Extrapolate.CLAMP,
            );
            const opacity = interpolate(translationX.value, input, [-1, 1, -1]);
            const scale = interpolate(
              translationX.value,
              input,
              [0.6, 1, 0.6],
              Extrapolate.CLAMP,
            );
            return {
              transform: [{translateX: translateX}, {scale: scale}],
              width: width,
              height: height,
              opacity: opacity,
            };
          });
          return (
            <Animated.View key={index} style={style}>
              <Text
                category="header"
                status={'basic'}
                marginH={24}
                marginT={top + 102 * (height / 812)}
                marginB={16}>
                {item.title}
              </Text>
              <Text
                category="body-2"
                status={'basic'}
                marginL={24}
                marginR={26}>
                {item.description}
              </Text>
              <Animated.Image
                source={item.image}
                style={{
                  width: 280 * (width / 375),
                  height: 340 * (height / 812),
                  alignSelf: 'flex-end',
                  marginRight: 16,
                  marginTop: 84 * (height / 812),
                }}
              />
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
      <Animated.View style={styleDots}>
        <Dots translationValue={translationX} />
      </Animated.View>
      <Animated.View style={styleGetStart}>
        <ButtonLinear
          text={'Get Start'}
          status="primary"
          category="button-1"
          onPress={_onStart}
          type="text"
          start={{x: 1, y: 0.1}}
          end={{x: 0.1, y: 1}}
        />
      </Animated.View>
      <Animated.View style={styleNext}>
        <ButtonLinear
          image={Icons.next}
          onPress={onIconPressNext}
          type="icon"
        />
      </Animated.View>
      <Animated.View style={styleBack}>
        <GradientButton title={t('common:back')} onPress={onIconPressPrv} />
      </Animated.View>
      <Animated.View
        style={[styleAnimated, {top: (22 + top) * (height / 812)}]}>
        <GradientButton title={t('common:skip')} onPress={_onSkip} />
      </Animated.View>
      <Animated.View
        style={[styleAnimated, {top: (278 + top) * (height / 812)}]}>
        <ButtonLinear
          text={t('intro:connect-wallet')}
          status="primary"
          category="button-1"
          onPress={_onConnectWallet}
          type="text"
          start={{x: 0.1, y: 1.6}}
          end={{x: 0.99, y: 0.1}}
        />
      </Animated.View>
    </Container>
  );
});

export default Onboarding;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  linearGradient: {
    borderRadius: 5,
    marginTop: 50,
    flex: 1,
    width: 40,
    height: 40,
  },
  skip: {},
  connectWallet: {},
});
