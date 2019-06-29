import React from 'react';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import Header from './CVcategories/Header';

// Create Document Component
const CamilleCV = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Header />
      <View style={styles.container}>
        <View style={styles.section}>
          {/* <Education></Education>
          <Work></Work> */}
          <Text style={styles.h1}>I am Camille.</Text>
          <Text style={styles.highlight}>A Fullstack JS developer.</Text>
        </View>
        <View style={styles.section}>
          {/* <Projects></Projects> */}
          <Text style={styles.h1}>My experiences</Text>
          <Text style={styles.p}>My education</Text>
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
  },
  section: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    width: '50%',
    '@media max-width: 400': {
      width: '100%',
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  h1: {
    color: '#009688',
    fontSize: 20,
    fontWeight: '100',
  },
  highlight: {
    color: '#536dfe',
  },
  p: {
    color: '#3f3d56',
    fontSize: 11,
  },
});
