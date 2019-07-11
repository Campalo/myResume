import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const WhyDev = () => {
  return (
    <View style={stylesWhy.container}>
      <View style={stylesWhy.section}>
        <Image
          style={stylesWhy.image}
          src='https://img.icons8.com/wired/96/000000/woman-at-computer.png'
        />
        <Text style={stylesWhy.h1}>Profile</Text>
      </View>
      <View>
        <Text style={stylesWhy.p}>
          In January 2019, I’ve challenged myself to become a Web Developer -
          after 3 years in Web Marketing. I'm now developing responsive Web apps
          using React and Node.js. I enjoy building dynamic applications and
          features that enhance the user experience. I'm eager to join a team in
          September!
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
    paddingBottom: 5,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  section: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  image: {
    backgroundColor: '#F0DB4F',
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  p: {
    fontSize: 9,
    paddingTop: 5,
    lineHeight: 1.3,
  },
});
