import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Consts';

const List = ({item}) => (
  <View style={styles.item}>
    <Icon
      name="md-arrow-dropright"
      size={20}
      color={Colors.secondary}
      style={styles.itemIcon}
    />
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

const Lists = ({style, items, caption, icon = true}) => {
  const containerStyle = [styles.container, icon && {marginLeft: 4}, style];
  const contentStyle = [styles.content, icon && {marginLeft: 16}];
  return (
    <View style={containerStyle}>
      {icon && <Icon name="md-quote" size={20} color={Colors.secondary} />}
      <View style={contentStyle}>
        {caption && <Text style={styles.caption}>{caption}</Text>}
        {items &&
          items.map((item, index) => (
            <List key={index} index={index} item={item} />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    marginLeft: 1,
  },
  itemIcon: {
    marginTop: 1,
  },
  itemText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Lists;
