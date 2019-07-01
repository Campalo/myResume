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
          years in Web Marketing! Now, I'm developing Web apps using React and
          Node. I enjoy buidling them components after components, adding
          dynamic functionalities and feedbacks for the user experience.
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
