import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import Colors from '../Colors';

const screen = Dimensions.get('screen');
const isLandscape = screen.width > screen.height;
const informasiPilihan = [1, 2, 3];
const artikel = [1, 2, 3];

const Beranda = () => {
  const renderInformasiPilihan = ({index, item}) => (
    <View style={styles.informasiPilihanCard}>
      <Text>{index}</Text>
    </View>
  );

  const renderArticles = (item, index) => (
    <View key={index} style={styles.artikel}>
      <View style={styles.artikelImage} />
      <View style={styles.artikelContent}>
        <Text style={styles.artikelTitle}>Nama Artikel</Text>
        <Text style={styles.artikelDesc}>Artikel ini adalah...</Text>
      </View>
    </View>
  );

  const informasiPilihanSeparator = [
    styles.separatorBar,
    {backgroundColor: '#fff', marginBottom: 0},
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.secondary} />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.greetingText}>Halo, Khairul!</Text>
          <View style={styles.search}>
            <Text style={styles.searchText}>Mau cari apa?</Text>
          </View>

          <Text style={styles.informasiPilihanTitle}>Informasi Pilihan</Text>
          <View style={informasiPilihanSeparator} />
        </View>

        <FlatList
          data={informasiPilihan}
          horizontal
          style={styles.informasiPilihan}
          contentContainerStyle={styles.informasiPilihanContainer}
          renderItem={renderInformasiPilihan}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>Artikel Untukmu</Text>
        <View style={styles.separatorBar} />

        {artikel.map(renderArticles)}

        <View style={styles.moreArticleButton}>
          <Text style={styles.moreArticleButtonText}>> Lihat lainnya..</Text>
        </View>
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
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 18,
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
  informasiPilihanTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textAlt,
    marginTop: 24,
  },
  informasiPilihan: {
    marginTop: -16,
    marginBottom: -64,
  },
  informasiPilihanContainer: {
    paddingHorizontal: 8,
  },
  informasiPilihanCard: {
    backgroundColor: Colors.background,
    elevation: 5,
    width: (isLandscape ? screen.height : screen.width) - 32,
    height: 180,
    margin: 16,
    marginHorizontal: 8,
    borderRadius: 5,
  },
  mainContent: {
    marginTop: 40,
    padding: 16,
    paddingBottom: 0,
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
    elevation: 5,
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
  moreArticleButton: {
    padding: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
    borderColor: '#ddd',
    borderTopWidth: 1,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  moreArticleButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Beranda;
