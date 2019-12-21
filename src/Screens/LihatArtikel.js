import React from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {CircleButton, RoundedButton} from '../Components/Button';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Lists from '../Components/Lists';

const ContentImage = ({height = 100}, source) => {
  const style = [styles.contentImage, {height}];
  return <View style={style} />;
};

const LihatArtikel = props => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <CircleButton
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}
          size={40}>
          <Icon name="md-arrow-back" size={20} />
        </CircleButton>
        <View style={styles.headerImage} />
      </View>

      <Text style={styles.title}>Nama Artikel</Text>
      <View style={styles.infoSection}>
        <Icon name="md-time" size={16} color={Colors.secondary} />
        <Text style={styles.infoSectionText}>8 menit baca</Text>
        <Icon
          name="md-thumbs-up"
          size={16}
          color={Colors.secondary}
          style={{marginLeft: 12}}
        />
        <Text style={styles.infoSectionText}>422</Text>
      </View>
      <View style={styles.actionButtonGroup}>
        <RoundedButton onPress={() => {}} style={styles.actionButton} size={40}>
          <Icon name="md-thumbs-up" size={20} color={Colors.primary} />
        </RoundedButton>
        <RoundedButton onPress={() => {}} style={styles.actionButton} size={40}>
          <Icon name="md-star-outline" size={20} color={Colors.primary} />
        </RoundedButton>
        <RoundedButton onPress={() => {}} style={styles.actionButton} size={40}>
          <Icon name="md-share-alt" size={20} color={Colors.primary} />
        </RoundedButton>
      </View>

      <View style={styles.separatorLine} />
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Lists
          style={styles.contentLists}
          caption="Berikut daftar blahblah:"
          items={[
            'hahasdsdasdsadasdsasadsada awewaeaw sdasawea awa',
            'hehe',
            'wew',
          ]}
        />

        <ContentImage height={200} />

        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.secondary,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    elevation: 3,
    overflow: 'hidden',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: StatusBar.currentHeight + 16,
    left: 16,
    zIndex: 1,
  },
  headerImage: {
    height: 300,
    backgroundColor: Colors.secondary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSectionText: {
    fontSize: 14,
    color: Colors.grey,
    marginLeft: 6,
  },
  actionButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  actionButton: {
    margin: 8,
  },
  separatorLine: {
    backgroundColor: Colors.secondary,
    height: 1,
    marginTop: 16,
    marginHorizontal: 24,
  },
  content: {
    padding: 24,
    paddingBottom: 0,
  },
  contentText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 28,
    marginBottom: 24,
  },
  contentImage: {
    resizeMode: 'contain',
    height: 100,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 24,
  },
  contentLists: {
    marginBottom: 32,
  },
});

export default LihatArtikel;
