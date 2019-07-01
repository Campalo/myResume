import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Enjoy = () => {
  return (
    <View style={stylesEnjoy.container}>
      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.image}
          src='https://i.imgur.com/m6bKPT7.png'
        />
        <Text style={stylesEnjoy.h1}>Career goals</Text>
      </View>

      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.imageSM}
          src='https://i.imgur.com/m6bKPT7.png'
        />
        <Text style={stylesEnjoy.p}>
          Become a components wizard! (css, functionalities)
        </Text>
      </View>

      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.imageSM}
          src='https://i.imgur.com/m6bKPT7.png'
        />
        <Text style={stylesEnjoy.p}>
          Expand my horizon by working in a diverse team
        </Text>
      </View>

      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.imageSM}
          src='https://i.imgur.com/m6bKPT7.png'
        />
        <Text style={stylesEnjoy.p}>Work remotely from time to time</Text>
      </View>

      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.imageSM}
          src='https://i.imgur.com/m6bKPT7.png'
        />
        <Text style={stylesEnjoy.p}>
          Discover and try new technologies: IOT, Flutter,...
        </Text>
      </View>
    </View>
  );
};

export default Enjoy;

const stylesEnjoy = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  section: {
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#F0DB4F',
  },
  imageSM: {
    marginRight: 5,
    paddingTop: 10,
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
