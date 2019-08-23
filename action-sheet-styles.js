/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import {
  StyleSheet,
} from 'react-native';

import { COLOR } from './color';

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  animatedOverlay: {
    zIndex: 2,
  },
  touchableOverlay: {
    zIndex: 3,
  },
  wrapper: {
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 4,
  },
  // ANDROID
  androidCard: {
    backgroundColor: COLOR.WHITE,
    minHeight: 50,
    padding: 20,
    paddingBottom: 0,
  },
  androidTitle: {
    color: COLOR.GREY_600,
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 15,
  },
  androidActionItem: {
    flexDirection: 'row',
    alignItems: "center",
  },
  androidItemTxt: {
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 18,
  },
  androidItemIcon: {
    marginRight: 20,
  },
  // IOS
  iosCard: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1,
    minHeight: 50,
  },
  iosCancelBtn: {
    marginVertical: 10,
    paddingVertical: 15,
  },
  iosTitle: {
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomColor: COLOR.GREY_300,
    borderBottomWidth: 1,
    color: COLOR.GREY_600,
    fontSize: 16,
  },
  iosCancelBtnText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: COLOR.PRIMARY,
  },
  iosItemsText: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 15,
    borderBottomColor: COLOR.GREY_300,
    borderBottomWidth: 1,
  },
});

export const getBaseStyles = ({ overlayColorValue, bottomPosition }) => {
  const overlayColor = overlayColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLOR.TRANSPARENT, COLOR.TRANSPARENT_DARK],
  })

  return {
    ...baseStyles,
    animatedOverlay: {
      ...baseStyles.overlay,
      ...baseStyles.animatedOverlay,
      backgroundColor: overlayColor,
    },
    touchableOverlay: {
      ...baseStyles.overlay,
      ...baseStyles.touchableOverlay,
    },
    wrapper: {
      ...baseStyles.wrapper,
      bottom: bottomPosition,
    },
    activeOpacity: 0.8,
    // ANDROID
    androidActionItemText: isDanger => ({
      ...baseStyles.androidItemTxt,
      color: isDanger ? COLOR.DANGER : COLOR.PRIMARY,
    }),
    androidItemTextColor: isDanger => {
      return isDanger ? COLOR.DANGER : COLOR.BLACK;
    },
    androidItemIconSize: 25,
    // IOS
    iosCancelBtn: {
      ...baseStyles.iosCard,
      ...baseStyles.iosCancelBtn,
    },
    iosItemsText: isDanger => {
      return {
        ...baseStyles.iosItemsText,
        color: isDanger ? COLOR.DANGER : COLOR.PRIMARY,
      }
    },
  }
}
