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
          In 2019, I’ve challenged myself to become a Developer and join a team
          - after 3 years in Web Marketing! I'm now developing various projects
          based on React, Node.js and the SCRUM methodology. I am thrilled to
          have started this trade! Tell me more more about your projects and
          team.
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
  },
  section: {
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#ffee58',
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  p: {
    fontSize: 10,
    paddingTop: 10,
  },
});
