import React from 'react';
import {Text, Image, View, StyleSheet} from '@react-pdf/renderer';

const Header = () => {
  return (
    <View style={stylesHeader.container}>
      <Image style={stylesHeader.image} src='https://i.imgur.com/OvRHc2K.jpg' />
      <View style={stylesHeader.section}>
        <Text style={stylesHeader.h1}>Hi, I'm Camille Charteau</Text>
        <Text style={stylesHeader.h1}>
          a Fullstack Web Developer, living in Berlin
        </Text>

        <View style={stylesHeader.section1}>
          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/ios-glyphs/104/000000/linkedin.png'
          />

          <Text
            style={stylesHeader.link}
            href='https://www.linkedin.com/in/camille-charteau/?locale=en_US'
            target='_blank'>
            camille-charteau
          </Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/windows/96/000000/github.png'
          />
          <Text
            style={stylesHeader.link}
            href='https://github.com/Campalo/'
            target='_blank'>
            Campalo
          </Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/office/96/000000/spain.png'
          />
          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/office/96/000000/great-britain.png'
          />
          <Text style={stylesHeader.link}>Fluent</Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/office/96/000000/france.png'
          />
          <Text style={stylesHeader.link}>Native</Text>
        </View>

        <View style={stylesHeader.section1}>
          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/ios/100/000000/phonelink-ring-filled.png'
          />
          <Text style={stylesHeader.link}>+33 6 67 45 25 95</Text>

          <Image
            style={stylesHeader.imageSM}
            src='https://img.icons8.com/material-outlined/100/000000/send.png'
          />
          <Text style={stylesHeader.link}>camille.charteau@hotmail.fr</Text>
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
    paddingLeft: 60,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 10,
    width: '100%',
    justifyContent: 'start-left',
    position: 'relative',
  },
  section: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  section1: {
    flexDirection: 'row',
  },
  h1: {
    lineHeight: 1.5,
    fontSize: 16,
  },
  image: {
    width: 100,
    borderRadius: 50,
  },
  imageSM: {
    height: 15,
    width: 15,
    marginRight: 3,
    marginTop: 7,
  },
  imageJS: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    width: 50,
  },
  link: {
    fontSize: 10,
    color: '#4453A4',
    marginRight: 12,
    marginTop: 10,
    textDecoration: 'none',
  },
});
