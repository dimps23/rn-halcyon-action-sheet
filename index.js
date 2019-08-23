/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
} from 'react-native';

import ActionSheetAndroid from './ActionSheetAndroid';
import ActionSheetIos from './ActionSheetIos';
import { getBaseStyles } from './action-sheet-styles';

const ActionSheetContext = createContext();

const useActionSheet = () => useContext(ActionSheetContext);

const ActionSheetComponent = props => {
  return Platform.OS === 'ios' ? <ActionSheetIos {...props} /> : <ActionSheetAndroid {...props} />
}

const ActionSheetProvider = ({ children }) => {
  const [positionValue] = useState(new Animated.Value(0));
  const [overlayColorValue] = useState(new Animated.Value(0));
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Title');
  const [actionItems, setActionItems] = useState([]);

  const toggleActionSheet = () => {
    Animated.parallel([
      Animated.timing(
        positionValue,
        {
          toValue: isOpen ? 0 : 1,
          duration: 100,
          easing: Easing.ease,
        },
      ),
      Animated.timing(
        overlayColorValue,
        {
          toValue: isOpen ? 0 : 1,
          duration: 100,
          easing: Easing.ease,
        },
      ),
    ]).start();
  }

  const bottomPosition = positionValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 0],
  });

  const showActionSheet = (titleProp, actionItemsProp) => {
    toggleActionSheet();
    setIsOpen(true);
    setTitle(titleProp);
    setActionItems(actionItemsProp);
  }

  const closeActionSheet = () => {
    setIsOpen(false);
    toggleActionSheet();
  }

  const styles = getBaseStyles({ overlayColorValue, bottomPosition });

  return (
    <ActionSheetContext.Provider value={{ showActionSheet }}>
      {children}
      <Animated.View style={styles.animatedOverlay} pointerEvents="box-none" />
      {isOpen && <TouchableOpacity style={styles.touchableOverlay} onPress={closeActionSheet} />}

      <Animated.View style={styles.wrapper}>
        <ActionSheetComponent
          title={title}
          actionItems={actionItems}
          styles={styles}
          onClose={closeActionSheet}
        />
      </Animated.View>
    </ActionSheetContext.Provider>
  )
}

ActionSheetProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export { ActionSheetProvider, useActionSheet }
