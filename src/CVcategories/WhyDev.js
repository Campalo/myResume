import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const WhyDev = () => {
  return (
    <View style={stylesWhy.container}>
      <View style={stylesWhy.section}>
        <Image style={stylesWhy.image} src='https://i.imgur.com/m6bKPT7.png' />
        <Text style={stylesWhy.h1}>A career change</Text>
      </View>
      <View>
        <Text style={stylesWhy.p}>
          In 2019, I’ve challenged myself to become a Web Developer - after 3
          years in Web Marketing! I'm now developing various projects based on
          React and Node.js. I really enjoy the frontend part of it. I'm eager
          to join a team!
        </Text>
      </View>
    </View>
  );
};

export default WhyDev;

const stylesWhy = StyleSheet.create({
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
  image: {
    backgroundColor: '#F0DB4F',
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  p: {
    fontSize: 10,
    paddingTop: 10,
    lineHeight: 1.3,
  },
});
