import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Enjoy = () => {
  return (
    <View style={stylesWhy.container}>
      <View style={stylesWhy.section}>
        <Image style={stylesWhy.image} src='https://i.imgur.com/m6bKPT7.png' />
        <Text style={stylesWhy.h1}> I enjoy...</Text>
      </View>

      <View>
        <View style={stylesWhy.section}>
          <Image
            style={stylesWhy.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text style={stylesWhy.p}>
            Going to sport with colleagues and friends
          </Text>
        </View>
      </View>

      <View>
        <View style={stylesWhy.section}>
          <Image
            style={stylesWhy.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text style={stylesWhy.p}>
            Discovering new technologies: IOT, Robotics,...
          </Text>
        </View>
      </View>

      <View>
        <View style={stylesWhy.section}>
          <Image
            style={stylesWhy.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text style={stylesWhy.p}>
            Meeting people from different fields and countries
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Enjoy;

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
  imageSM: {
    marginRight: 5,
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
