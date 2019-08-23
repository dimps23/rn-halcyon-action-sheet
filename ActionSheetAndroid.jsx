import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from '../Icon';

const ActionSheetAndroid = props => {
  const {
    title,
    actionItems,
    styles,
    onClose,
  } = props;

  const handleItemSelect = itemCallBack => {
    itemCallBack();
    onClose();
  }

  return (
    <View style={styles.androidCard}>
      <Text style={styles.androidTitle}>{title}</Text>
      {actionItems.map(item => (
        <TouchableOpacity
          key={item.title}
          onPress={() => handleItemSelect(item.onPress)}
          activeOpacity={styles.activeOpacity}
          style={styles.androidActionItem}
        >
          {item.icon && (
            <Icon
              name={item.icon}
              size={styles.androidItemIconSize}
              color={styles.androidItemTextColor(item.danger)}
              style={styles.androidItemIcon}
            />
          )}
          <Text style={styles.androidActionItemText(item.danger)}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.androidItemTxt}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

ActionSheetAndroid.propTypes = {
  title: PropTypes.string.isRequired,
  actionItems: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ActionSheetAndroid;
