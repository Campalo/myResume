import React from 'react';
import {Page, View, Document, StyleSheet} from '@react-pdf/renderer';
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
    </Page>
  </Document>
);

export default CamilleCV;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  section: {
    flexDirection: 'column',
    width: '47%',
    '@media max-width: 400': {
      width: '100%',
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
});
