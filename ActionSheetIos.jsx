import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const ActionSheetIos = props => {
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
    <React.Fragment>
      <View style={styles.iosCard}>
        <Text style={styles.iosTitle}>{title}</Text>
        {actionItems.map(item => (
          <TouchableOpacity key={item.title} onPress={() => handleItemSelect(item.onPress)}>
            <Text style={styles.iosItemsText(item.danger)}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.iosCancelBtn}
        onPress={onClose}
      >
        <Text style={styles.iosCancelBtnText}>Cancel</Text>
      </TouchableOpacity>
    </React.Fragment>
  )
}

ActionSheetIos.propTypes = {
  title: PropTypes.string.isRequired,
  actionItems: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}


export default ActionSheetIos;
