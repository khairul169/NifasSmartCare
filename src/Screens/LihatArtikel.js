import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Animated} from 'react-native';
import {CircleButton, RoundedButton} from '../Components/Button';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Lists from '../Components/Lists';

const ContentImage = ({height = 100}, source) => {
  const style = [styles.contentImage, {height}];
  return <View style={style} />;
};

const LihatArtikel = props => {
  const [scrollY] = useState(new Animated.Value(0));
  const headerStyle = [
    styles.header,
    {
      backgroundColor: scrollY.interpolate({
        inputRange: [260, 280],
        outputRange: ['rgba(149, 117, 205, 0.0)', 'rgba(149, 117, 205, 1.0)'],
        extrapolate: 'clamp',
      }),
    },
  ];
  const backBtnStyle = {
    backgroundColor: 'transparent',
    elevation: 0,
  };
  const headerTitleStyle = [
    styles.headerTitle,
    {
      opacity: scrollY.interpolate({
        inputRange: [260, 280],
        outputRange: [0.0, 1.0],
        extrapolate: 'clamp',
      }),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Animated.View style={headerStyle}>
        <CircleButton
          onPress={() => props.navigation.goBack()}
          size={36}
          style={backBtnStyle}
          animated>
          <Icon name="md-arrow-back" size={20} color="#fff" />
        </CircleButton>
        <Animated.Text style={headerTitleStyle} numberOfLines={1}>
          Nama Artikel
        </Animated.Text>
      </Animated.View>

      <Animated.ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        <View style={styles.cover} />

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
          <RoundedButton
            onPress={() => {}}
            style={styles.actionButton}
            size={40}>
            <Icon name="md-thumbs-up" size={20} color={Colors.primary} />
          </RoundedButton>
          <RoundedButton
            onPress={() => {}}
            style={styles.actionButton}
            size={40}>
            <Icon name="md-star-outline" size={20} color={Colors.primary} />
          </RoundedButton>
          <RoundedButton
            onPress={() => {}}
            style={styles.actionButton}
            size={40}>
            <Icon name="md-share-alt" size={20} color={Colors.primary} />
          </RoundedButton>
        </View>

        <View style={styles.content}>
          <View style={styles.separatorLine} />

          <Text style={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <View style={styles.separatorLine} />

          <Text style={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    padding: 16,
    paddingBottom: 12,
    paddingTop: StatusBar.currentHeight + 8,
    top: 0,
    left: 0,
    flexDirection: 'row',
    zIndex: 1,
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  headerTitle: {
    fontSize: 20,
    color: Colors.textAlt,
    flex: 1,
    marginLeft: 24,
  },
  cover: {
    backgroundColor: Colors.primary,
    height: 300,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    elevation: 3,
    overflow: 'hidden',
    position: 'relative',
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
    marginBottom: 16,
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
