import React from 'react';
import {Text, Image, View, StyleSheet} from '@react-pdf/renderer';

const Header = () => {
  return (
    <View style={stylesHeader.container}>
      <Image style={stylesHeader.image} src='https://i.imgur.com/OvRHc2K.jpg' />
      <View style={stylesHeader.section}>
        <Text style={stylesHeader.h1}>Hi, I'm CAMILLE CHARTEAU</Text>
        <Text style={stylesHeader.h1}>
          a FULLSTACK WEB DEVELOPER, living in BERLIN
        </Text>
        <Text style={stylesHeader.h2}>
          Fee free to contact me on Linkedin or at +33 6 67 45 25 95
        </Text>
      </View>
    </View>
  );
};

export default Header;

const stylesHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffee58',
    padding: 30,
    width: '100%',
    justifyContent: 'center',
  },
  section: {
    flexDirection: 'column',
  },
  image: {
    width: 100,
    borderRadius: 50,
  },
  h1: {
    paddingLeft: 30,
    lineHeight: 2.2,
    fontSize: 16,
  },
  h2: {
    paddingLeft: 30,
    fontSize: 12,
    marginTop: 14,
  },
});
