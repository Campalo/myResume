import React from 'react';
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
//Resume categories
import Header from './CVcategories/Header';
import WhyDev from './CVcategories/WhyDev';
import Education from './CVcategories/Education';
import Work from './CVcategories/Work';
import Projects from './CVcategories/Projects';
import Enjoy from './CVcategories/Enjoy';
import Interests from './CVcategories/Interests';

// Create Document Component
const CamilleCV = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Header />
      <View style={styles.container}>
        <View style={styles.section}>
          <WhyDev />
          <Education />
          <Work />
        </View>
        <View style={styles.section}>
          <Enjoy />
          <Projects />
          <Interests />
        </View>
      </View>
      <View style={styles.section1}>
        <Text style={styles.link} href='https://github.com/Campalo/myResume'>
          Made with{' '}
          <Image
            style={styles.imageSM}
            src='https://img.icons8.com/dusk/64/000000/like.png'
          />{' '}
          by Camille Charteau with React.js and React-pdf library.
        </Text>
      </View>
    </Page>
  </Document>
);

export default CamilleCV;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#cfd8dc',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  section: {
    flexDirection: 'column',
    width: '48%',
    '@media max-width: 400': {
      width: '100%',
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  section1: {
    flexDirection: 'row',
    paddingBottom: '10px',
    paddingLeft: 25,
    textAlign: 'center',
  },
  imageSM: {
    marginRight: 5,
    marginLeft: 5,
  },
  link: {
    fontSize: 9,
    color: '#4453A4',
    textDecoration: 'none',
  },
});
