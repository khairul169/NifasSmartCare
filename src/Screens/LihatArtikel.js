import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Animated, Image} from 'react-native';
import {CircleButton, RoundedButton} from '../Components/Button';
import YouTube from 'react-native-youtube';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Lists from '../Components/Lists';
import Quiz from '../Components/Quiz';

const ContentImage = ({height = 100}, source) => {
  const style = [styles.contentImage, {height}];
  return <View style={style} />;
};

const CONTENT_TEXT = 0;
const CONTENT_SEPARATOR = 1;
const CONTENT_IMAGE = 2;
const CONTENT_LISTS = 3;
const CONTENT_YTVIDEO = 4;
const CONTENT_QUIZ = 5;

const LihatArtikel = props => {
  const [scrollY] = useState(new Animated.Value(0));
  const headerStyle = [
    styles.header,
    {
      backgroundColor: scrollY.interpolate({
        inputRange: [40, 280],
        outputRange: ['rgba(149, 117, 205, 0.0)', 'rgba(149, 117, 205, 1.0)'],
        extrapolate: 'clamp',
      }),
      elevation: scrollY.interpolate({
        inputRange: [40, 280],
        outputRange: [0, 3],
        extrapolate: 'clamp',
      }),
      height: scrollY.interpolate({
        inputRange: [40, 280],
        outputRange: [100, 72],
        extrapolate: 'clamp',
      }),
    },
  ];
  const backBtnStyle = {
    backgroundColor: Colors.secondary,
    elevation: scrollY.interpolate({
      inputRange: [40, 280],
      outputRange: [3, 0],
      extrapolate: 'clamp',
    }),
  };
  const headerTitleStyle = [
    styles.headerTitle,
    {
      opacity: scrollY.interpolate({
        inputRange: [40, 280],
        outputRange: [0.0, 1.0],
        extrapolate: 'clamp',
      }),
    },
  ];

  const articleItem = props.navigation.getParam('item');
  const articleName = articleItem ? articleItem.title : '';
  const contents = articleItem ? articleItem.content : [];
  const coverImage = articleItem ? articleItem.image : null;

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
          {articleName}
        </Animated.Text>
      </Animated.View>

      <Animated.ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        <View style={styles.cover}>
          <Image style={{width: '100%', height: '100%'}} source={coverImage} />
        </View>

        <Text style={styles.title}>{articleName}</Text>
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
          {contents.map((item, index) => {
            if (item[0] === CONTENT_SEPARATOR) {
              return <View key={index} style={styles.separatorLine} />;
            }
            if (item[0] === CONTENT_TEXT) {
              return (
                <Text key={index} style={styles.contentText}>
                  {item[1]}
                </Text>
              );
            }
            if (item[0] === CONTENT_IMAGE) {
              return <ContentImage key={index} height={200} />;
            }
            if (item[0] === CONTENT_LISTS) {
              return (
                <Lists
                  key={index}
                  style={styles.contentLists}
                  icon={item[3]}
                  caption={item[1]}
                  items={item[2]}
                />
              );
            }
            if (item[0] === CONTENT_YTVIDEO) {
              return (
                <YouTube
                  key={index}
                  apiKey="AIzaSyC2merDRztMxKg-QgVYaex2ls1vzkVjH60"
                  videoId={item[1]}
                  style={{alignSelf: 'stretch', height: 300, marginBottom: 24}}
                />
              );
            }
            if (item[0] === CONTENT_QUIZ) {
              return <Quiz key={index} question={item[1]} answers={item[2]} />;
            }
          })}
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
    paddingTop: StatusBar.currentHeight + 8,
    height: 100,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    zIndex: 1,
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  headerTitle: {
    fontSize: 18,
    color: Colors.textAlt,
    flex: 1,
    marginHorizontal: 16,
  },
  cover: {
    backgroundColor: Colors.primary,
    height: 300,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    elevation: 10,
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
