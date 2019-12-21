import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const screen = Dimensions.get('screen');
const isLandscape = screen.width > screen.height;
const related = [1, 2, 3];
const artikel = [1, 2, 3];

const MoreButton = ({onPress}) => {
  const style = {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
    elevation: 3,
  };
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={style}>
        <Icon name="md-arrow-forward" size={20} />
      </View>
    </TouchableNativeFeedback>
  );
};

const RelatedItem = () => (
  <View style={styles.relatedCard}>
    <View style={styles.relatedImg} />
    <Text style={styles.relatedCaption} numberOfLines={1}>
      Test Hehehehe ahahahaw whadhawhdahw hawhdawh
    </Text>
  </View>
);

const ArticleItem = () => (
  <View style={styles.artikel}>
    <View style={styles.artikelImage} />
    <View style={styles.artikelContent}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="ios-book" size={18} color={Colors.secondary} />
        <Text style={[styles.artikelTitle, {marginLeft: 8}]}>Nama Artikel</Text>
      </View>
      <Text style={styles.artikelDesc}>Artikel ini adalah...</Text>
    </View>
  </View>
);

const Beranda = () => {
  const relatedSeparator = [
    styles.separatorBar,
    {backgroundColor: '#fff', marginBottom: 0},
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.secondary} />
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

        <FlatList
          data={related}
          horizontal
          style={styles.related}
          contentContainerStyle={styles.relatedContainer}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({index, item}) => <RelatedItem />}
          snapToInterval={screen.width * 0.8 - 16}
          snapToAlignment="center"
          decelerationRate="fast"
          scrollEventThrottle={32}
          pagingEnabled
        />
      </View>

      <View style={styles.mainContent}>
        <View style={styles.sectionRow}>
          <View>
            <Text style={styles.sectionTitle}>Konten Nifas</Text>
            <View style={styles.separatorBar} />
          </View>
          <MoreButton onPress={() => {}} />
        </View>

        {artikel.map((item, index) => (
          <ArticleItem key={index} />
        ))}
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
    width: (isLandscape ? screen.height : screen.width * 0.8) - 32,
    margin: 16,
    marginHorizontal: 8,
    borderRadius: 5,
    overflow: 'hidden',
  },
  relatedImg: {
    height: 150,
    backgroundColor: Colors.grey,
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
    height: isLandscape ? 140 : 100,
  },
  artikelImage: {
    flex: 2,
    alignSelf: 'stretch',
    backgroundColor: Colors.secondary,
  },
  artikelContent: {
    flex: 3,
    padding: 16,
  },
  artikelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  artikelDesc: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: 6,
  },
});

export default Beranda;
