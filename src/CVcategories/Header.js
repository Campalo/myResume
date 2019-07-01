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

        <View style={stylesHeader.section1}>
          {/* <Text style={stylesHeader.h2}>Feel free to contact me: </Text> */}

          <Image
            style={stylesHeader.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text
            style={stylesHeader.link}
            href='https://www.linkedin.com/in/camille-charteau/?locale=en_US'>
            Linkedin
          </Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text style={stylesHeader.link} href='https://github.com/Campalo/'>
            Github
          </Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text style={stylesHeader.link}>+33 6 67 45 25 95</Text>
        </View>
      </View>

      <Image
        style={stylesHeader.imageJS}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'
      />
    </View>
  );
};

export default Header;

const stylesHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F0DB4F',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 10,
    width: '100%',
    justifyContent: 'start-left',
    position: 'relative',
  },
  section: {
    flexDirection: 'column',
  },
  section1: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    borderRadius: 50,
  },
  imageSM: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 5,
    height: 20,
    width: 20,
  },
  imageJS: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    width: 50,
  },
  h1: {
    paddingLeft: 20,
    paddingTop: 5,
    lineHeight: 1.5,
    fontSize: 16,
  },
  h2: {
    fontSize: 12,
    //color: '#696E72',
    marginLeft: 20,
    marginTop: 12,
  },
  link: {
    fontSize: 12,
    color: '#4db6ac',
    marginTop: 10,
  },
});
