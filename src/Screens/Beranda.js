import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import {
  TouchableNativeFeedback as RNGHTouchable,
  FlatList as RNGHFlatList,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Window, Colors} from '../Consts';
import {CircleButton} from '../Components/Button';
import {articleList} from '../Mock';

const related = [...articleList].sort((a, b) => 0.5 - Math.random());
const artikel = articleList;

const RelatedItem = ({item, navigate}) => (
  <RNGHTouchable onPress={() => navigate('LihatArtikel', {item})}>
    <View style={styles.relatedCard}>
      <Image style={styles.relatedImg} source={item.image} />
      <Text style={styles.relatedCaption} numberOfLines={1}>
        {item.title}
      </Text>
    </View>
  </RNGHTouchable>
);

const ArticleItem = ({item, navigate}) => (
  <TouchableNativeFeedback onPress={() => navigate('LihatArtikel', {item})}>
    <View style={styles.artikel}>
      <Image style={styles.artikelImage} source={item.image} />
      <View style={styles.artikelContent}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <View style={{flex: 1}}>
            <Text style={styles.artikelTitle} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.artikelDesc} numberOfLines={3}>
              {item.desc}
            </Text>
          </View>
          <Icon
            name="ios-book"
            size={16}
            color={Colors.secondary}
            style={{marginTop: 2}}
          />
        </View>
      </View>
    </View>
  </TouchableNativeFeedback>
);

const Beranda = props => {
  const relatedSeparator = [
    styles.separatorBar,
    {backgroundColor: '#fff', marginBottom: 0},
  ];

  const statusBarStyle = {
    backgroundColor: Colors.secondary,
    height: StatusBar.currentHeight,
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={statusBarStyle} />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.sectionRow}>
              <Text style={styles.greetingText}>Halo, Khairul!</Text>
              <Icon name="md-list" color="#fff" size={20} />
            </View>
            <View style={styles.search}>
              <Text style={styles.searchText}>Mau cari apa?</Text>
            </View>

            <Text style={styles.relatedTitle}>Informasi Pilihan</Text>
            <View style={relatedSeparator} />
          </View>

          <RNGHFlatList
            data={related}
            horizontal
            style={styles.related}
            contentContainerStyle={styles.relatedContainer}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({index, item}) => (
              <RelatedItem item={item} navigate={props.navigation.navigate} />
            )}
          />
        </View>

        <View style={styles.mainContent}>
          <View style={styles.sectionRow}>
            <View>
              <Text style={styles.sectionTitle}>Konten Nifas</Text>
              <View style={styles.separatorBar} />
            </View>
            <CircleButton onPress={() => {}}>
              <Icon name="md-arrow-forward" size={20} />
            </CircleButton>
          </View>

          {artikel.map((item, index) => (
            <ArticleItem
              key={index}
              item={item}
              navigate={props.navigation.navigate}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.secondary,
  },
  headerContent: {
    padding: 16,
    paddingTop: 32,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textAlt,
  },
  search: {
    backgroundColor: '#eee',
    height: 44,
    marginTop: 12,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  searchText: {
    fontSize: 14,
    color: Colors.text,
  },
  relatedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textAlt,
    marginTop: 24,
  },
  related: {
    marginTop: -16,
    marginBottom: -96,
  },
  relatedContainer: {
    paddingHorizontal: 8,
  },
  relatedCard: {
    backgroundColor: Colors.background,
    elevation: 5,
    width: (Window.isLandscape ? Window.height : Window.width * 0.8) - 32,
    margin: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  relatedImg: {
    width: '100%',
    height: Window.isLandscape ? Window.width * 0.24 : Window.height * 0.22,
    backgroundColor: '#eee',
  },
  relatedCaption: {
    fontSize: 14,
    margin: 12,
  },
  mainContent: {
    marginTop: 80,
    padding: 16,
    paddingBottom: 8,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.grey,
    marginTop: 16,
  },
  separatorBar: {
    backgroundColor: Colors.primary,
    height: 4,
    borderRadius: 3,
    width: 60,
    marginTop: 8,
    marginBottom: 16,
  },
  artikel: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    elevation: 3,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    height: Window.isLandscape ? Window.width * 0.2 : Window.height * 0.15,
  },
  artikelImage: {
    flex: 2,
    height: '100%',
    alignSelf: 'stretch',
    backgroundColor: Colors.secondary,
  },
  artikelContent: {
    flex: 3,
    padding: 16,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  artikelTitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  artikelDesc: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey,
    marginTop: 6,
  },
});

export default Beranda;
