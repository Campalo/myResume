import React from 'react';
import {Page, View, Document, StyleSheet} from '@react-pdf/renderer';
import Header from './CVcategories/Header';
import WhyDev from './CVcategories/WhyDev';

// Create Document Component
const CamilleCV = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Header />
      <View style={styles.container}>
        <View style={styles.section}>
          <WhyDev />
          {/* <Education></Education>
          <Work></Work> */}
        </View>
        <View style={styles.section}>
          <WhyDev />
          {/* <Projects></Projects> */}
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
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  section: {
    flexDirection: 'column',
    width: '45%',
    '@media max-width: 400': {
      width: '100%',
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
});
