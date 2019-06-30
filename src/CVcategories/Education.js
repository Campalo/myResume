import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Education = () => {
  return (
    <View style={stylesEd.container}>
      <View style={stylesEd.section}>
        <Image style={stylesEd.image} src='https://i.imgur.com/m6bKPT7.png' />
        <Text style={stylesEd.h1}>Education</Text>
      </View>

      <View>
        <View style={stylesEd.section2}>
          <Text style={stylesEd.h2}>03 - 07.2019, Germany</Text>
          <Text style={stylesEd.h3}>FullStack Web Developer</Text>
          <Text style={stylesEd.p}>Wild Code School - 5 months Bootcamp</Text>
        </View>
      </View>

      <View>
        <View style={stylesEd.section2}>
          <Text style={stylesEd.h2}>2012 - 2016, France</Text>
          <Text style={stylesEd.h3}>International Marketing - Master2</Text>
          <Text style={stylesEd.p}>ESC Rennes Business School</Text>
        </View>
      </View>
    </View>
  );
};

export default Education;

const stylesEd = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  section: {
    flexDirection: 'row',
  },
  section2: {
    flexDirection: 'column',
  },
  image: {
    backgroundColor: '#F0DB4F',
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  h2: {
    fontSize: 10,
    paddingTop: 10,
    lineHeight: 1.3,
    color: '#696E72',
  },
  h3: {
    fontSize: 14,
    textDecoration: 'underline',
    textDecorationColor: '#F0DB4F',
    lineHeight: 1.3,
  },
  p: {
    fontSize: 10,
    lineHeight: 1.3,
  },
});
